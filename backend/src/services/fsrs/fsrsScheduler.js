/**
 * Configuration et wrapper du moteur FSRS (ts-fsrs) pour la modélisation
 * Difficulté / Stabilité / Rétractabilité demandée par le cahier des charges.
 *
 * Doc package: https://github.com/open-spaced-repetition/ts-fsrs
 */
import { fsrs, generatorParameters, createEmptyCard, Rating, State } from 'ts-fsrs';

// Paramètres par défaut recommandés par ts-fsrs ; enable_fuzz évite que deux cartes
// programmées le même jour tombent à la même seconde (répartition de charge de révision).
const params = generatorParameters({
  enable_fuzz: true,
  enable_short_term: true,
  maximum_interval: 36500, // ~100 ans, plafond de sécurité
});

export const scheduler = fsrs(params);

/**
 * Crée une carte FSRS vierge pour un nouveau concept (UE / fiche de révision).
 * @param {object} meta - métadonnées pédagogiques (ue, concept, tags, difficulté initiale suggérée)
 */
export function createCard(meta = {}) {
  const card = createEmptyCard(new Date());
  return {
    ...card,
    meta: {
      ue: meta.ue ?? null,
      concept: meta.concept ?? null,
      tags: meta.tags ?? [],
    },
  };
}

/**
 * Calcule les 4 planifications possibles (Again / Hard / Good / Easy) pour une carte,
 * à une date de révision donnée. Utilisé pour afficher les intervalles proposés à l'utilisateur.
 */
export function previewSchedule(card, reviewDate = new Date()) {
  const result = scheduler.repeat(card, reviewDate);
  return {
    again: result[Rating.Again],
    hard: result[Rating.Hard],
    good: result[Rating.Good],
    easy: result[Rating.Easy],
  };
}

/**
 * Applique la note choisie par l'apprenant et retourne la carte mise à jour + le log
 * (à persister dans ReviewLog pour l'historique / audit pédagogique).
 * Utilise scheduler.next(), l'API recommandée depuis ts-fsrs v5 pour appliquer
 * une note déjà connue (repeat() sert uniquement à la prévisualisation des 4 issues).
 */
export function reviewCard(card, rating, reviewDate = new Date()) {
  if (![Rating.Again, Rating.Hard, Rating.Good, Rating.Easy].includes(rating)) {
    throw new Error(`Rating invalide: ${rating}`);
  }
  const { card: updated, log } = scheduler.next(card, reviewDate, rating);
  return {
    card: { ...updated, meta: card.meta },
    log,
  };
}

/** Cartes dues à la révision aujourd'hui (ou avant), triées par échéance. */
export function dueCards(cards, now = new Date()) {
  return cards
    .filter((c) => new Date(c.due) <= now)
    .sort((a, b) => new Date(a.due) - new Date(b.due));
}

export { Rating, State };
