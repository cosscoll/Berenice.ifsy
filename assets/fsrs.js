/**
 * Planificateur de révisions — version simplifiée, autonome, sans dépendance.
 *
 * IMPORTANT (honnêteté technique) : ceci n'est PAS la librairie ts-fsrs
 * utilisée dans la version précédente du projet (qui nécessitait npm et un
 * backend). C'est une réimplémentation simplifiée, inspirée des principes de
 * FSRS (stabilité, difficulté, courbe d'oubli), pensée pour fonctionner sans
 * aucune installation. Les intervalles calculés seront globalement
 * raisonnables pour de la révision espacée, mais ne sont pas garantis
 * identiques à ceux du véritable algorithme FSRS.
 *
 * Note RATING: 1=Again (à revoir), 2=Hard (difficile), 3=Good (bien), 4=Easy (facile)
 */

const FSRS_STORAGE_KEY = 'ifsi_fsrs_state_v1';

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(dateISO, days) {
  const d = new Date(dateISO + 'T00:00:00');
  d.setDate(d.getDate() + Math.max(0, Math.round(days)));
  return d.toISOString().slice(0, 10);
}

/** Charge l'état de toutes les cartes depuis le stockage local du navigateur. */
function loadFsrsState() {
  try {
    const raw = localStorage.getItem(FSRS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveFsrsState(state) {
  try {
    localStorage.setItem(FSRS_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // stockage indisponible (navigation privée, quota plein...) — on continue sans persister
  }
}

/** Retourne l'état d'une carte, initialisé à "nouvelle" si jamais vue. */
function getCardState(state, cardId) {
  return state[cardId] || {
    due: todayISO(),
    stability: 1,
    difficulty: 5, // échelle 1 (facile) à 10 (difficile)
    reps: 0,
    lapses: 0,
    state: 'new', // new | learning | review
  };
}

/**
 * Applique une note à une carte et retourne son nouvel état.
 * Logique simplifiée : la stabilité augmente après une bonne réponse
 * (proportionnellement à la difficulté), chute fortement après un "Again".
 */
function applyRating(cardState, rating) {
  const next = { ...cardState };
  next.reps += 1;

  if (rating === 1) {
    // Again : échec — on repart presque de zéro, la difficulté augmente
    next.lapses += 1;
    next.stability = Math.max(1, next.stability * 0.4);
    next.difficulty = Math.min(10, next.difficulty + 1.2);
    next.state = 'relearning';
    next.due = addDays(todayISO(), 1);
    return next;
  }

  // Facteur de croissance de la stabilité selon la note et la difficulté actuelle
  const easeByRating = { 2: 1.2, 3: 1.8, 4: 2.6 }; // Hard / Good / Easy
  const difficultyPenalty = 1 - (next.difficulty - 5) * 0.05; // plus difficile = croît moins vite
  const growth = easeByRating[rating] * Math.max(0.5, difficultyPenalty);

  next.stability = Math.max(1, next.stability * growth);
  next.difficulty = Math.max(1, Math.min(10, next.difficulty + (rating === 4 ? -0.8 : rating === 2 ? 0.3 : -0.2)));
  next.state = 'review';
  next.due = addDays(todayISO(), next.stability);

  return next;
}

/** Liste les cartes dues aujourd'hui ou avant, triées par échéance. */
function getDueCards(deck) {
  const state = loadFsrsState();
  return deck
    .map((card) => ({ ...card, fsrs: getCardState(state, card.id) }))
    .filter((card) => card.fsrs.due <= todayISO())
    .sort((a, b) => a.fsrs.due.localeCompare(b.fsrs.due));
}

/** Enregistre la note donnée par l'apprenant pour une carte. */
function reviewCard(cardId, rating) {
  const state = loadFsrsState();
  const current = getCardState(state, cardId);
  state[cardId] = applyRating(current, rating);
  saveFsrsState(state);
  return state[cardId];
}
