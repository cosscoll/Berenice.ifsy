/**
 * Petit avatar "infirmière" flottant, présent sur toutes les pages.
 * IMPORTANT — honnêteté : ce n'est PAS une vraie IA conversationnelle (ça
 * nécessiterait un serveur et une clé API, incompatible avec un site 100%
 * statique). C'est un assistant à réponses pré-écrites : quelques conseils
 * contextuels par page, et une reconnaissance de quelques mots-clés simples
 * pour orienter Bérénice vers la bonne page. Le dit clairement dans son
 * message d'ouverture pour ne jamais laisser croire à autre chose.
 */

const NURSE_TIPS_BY_PAGE = {
  dashboard: ["Un petit tour par « Révision » chaque jour vaut mieux qu'une grosse session une fois par semaine."],
  ue: ["Clique sur un bloc de semestre pour voir le détail des UE qui le composent."],
  revision: ["Essaie de répondre à voix haute avant de révéler la réponse — ça ancre bien mieux que de juste lire.", "Le menu déroulant en haut te permet de choisir un chapitre précis à réviser, pas besoin d'attendre que ce soit dû."],
  'cartes-mentales': ["Tu peux glisser la carte pour la déplacer, et zoomer à la molette. Le bouton ⤢ l'ouvre en plein écran.", "Le bouton ⬇ télécharge la carte en image, pratique pour l'imprimer ou la revoir hors-ligne."],
  anatomie: ["Les vraies planches historiques apparaissent sous le schéma quand le système en a une (cœur, poumons, squelette...)."],
  ecos: ["Ces cas se jouent mieux à voix haute avec quelqu'un — demande à un camarade d'incarner le patient."],
  ressources: ["Les liens YouTube ouvrent une recherche déjà filtrée — regarde 2-3 vidéos différentes sur le même sujet, ça aide à mieux comprendre."],
  apprendre: ["Le rappel actif est la technique la plus efficace, mais c'est aussi celle qui demande le plus de courage — bravo si tu es sur cette page !"],
  todo: ["Une tâche à la fois. Coche-la avant de passer à la suivante, ça fait du bien de voir la liste se vider."],
};

const GENERIC_TIPS = [
  "N'oublie pas de dormir suffisamment avant un examen — la mémorisation se consolide surtout pendant le sommeil.",
  "Une session de 25 minutes bien concentrée vaut mieux qu'une heure distraite.",
  "Tu as le droit de trouver ça difficile. Continue quand même, un petit pas à la fois.",
];

const KEYWORD_RESPONSES = [
  { keywords: ['glasgow', 'gcs'], response: "Le score de Glasgow, c'est dans les fiches de Révision (UE 2.4) et dans la carte mentale « Urgences & AFGSU »." },
  { keywords: ['braden', 'escarre'], response: "L'échelle de Braden et les stades d'escarre sont dans les fiches de Révision — cherche « Braden » ou « escarre »." },
  { keywords: ['insuline', 'diabete', 'diabète'], response: "Le diabète a sa propre carte mentale complète dans « Cartes mentales »." },
  { keywords: ['stress', 'fatigue', 'peur', 'angoisse', 'découragée', 'decouragee'], response: "C'est normal de ressentir ça en 1ère année. Une petite pause, un verre d'eau, et on reprend juste une fiche à la fois. Tu gères." },
  { keywords: ['aide', 'comment', 'methode', 'méthode'], response: "Va voir la page « Comment réviser » — les méthodes qui marchent vraiment, expliquées simplement." },
  { keywords: ['ecos', 'patient', 'simulation'], response: "Pour les cas ECOS, demande à un camarade de jouer le patient à voix haute — c'est bien plus efficace qu'à lire tout seul." },
  { keywords: ['anatomie', 'schema', 'schéma', 'image'], response: "Va voir « Anatomie » — il y a de vraies planches historiques en plus des schémas." },
];

function nurseSvg() {
  return `
    <svg viewBox="0 0 64 64" width="40" height="40">
      <circle cx="32" cy="32" r="30" fill="#2E5C52" />
      <circle cx="32" cy="28" r="12" fill="#F3D9C4" />
      <path d="M20 24 a12 8 0 0 1 24 0 Z" fill="#fff" />
      <rect x="27" y="18" width="10" height="10" fill="#fff" />
      <rect x="29.5" y="15.5" width="5" height="15" fill="#B1502F" />
      <rect x="22" y="20.5" width="15" height="5" fill="#B1502F" />
      <circle cx="27" cy="29" r="1.4" fill="#1E2A24" />
      <circle cx="37" cy="29" r="1.4" fill="#1E2A24" />
      <path d="M27 34 Q32 37 37 34" stroke="#1E2A24" stroke-width="1.4" fill="none" stroke-linecap="round" />
      <path d="M18 50 Q32 40 46 50 L46 58 Q32 52 18 58 Z" fill="#fff" />
    </svg>
  `;
}

function initNurseAvatar(pageId) {
  const widget = document.createElement('div');
  widget.id = 'nurse-widget';
  widget.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:9000; font-family:"Public Sans",sans-serif;';
  widget.innerHTML = `
    <button id="nurse-toggle" title="Ouvrir l'assistante" aria-label="Ouvrir l'assistante de révision" aria-expanded="false"
      style="width:56px; height:56px; border-radius:999px; border:none; background:#fff; box-shadow:0 4px 14px rgba(0,0,0,0.2); cursor:pointer; display:flex; align-items:center; justify-content:center;">
      ${nurseSvg()}
    </button>
    <div id="nurse-panel" style="display:none; position:absolute; bottom:66px; right:0; width:280px; background:#fff; border-radius:14px; box-shadow:0 8px 24px rgba(0,0,0,0.25); padding:16px; border:1px solid var(--line);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <strong style="font-family:'Fraunces',serif; color:var(--pine); font-size:15px;">Ton assistante</strong>
        <button id="nurse-close" aria-label="Fermer l'assistante" style="border:none; background:none; cursor:pointer; font-size:16px; color:var(--ink-soft);">✕</button>
      </div>
      <p id="nurse-message" style="font-size:13px; margin:0 0 10px;"></p>
      <div style="display:flex; gap:6px; margin-bottom:10px;">
        <button id="nurse-next" style="flex:1; font-size:12px; padding:6px;">Autre conseil</button>
      </div>
      <input id="nurse-input" type="text" placeholder="Pose une question (mots-clés simples)…" style="width:100%; font-size:13px; padding:6px 8px;">
      <p style="font-size:10px; color:var(--ink-soft); margin:8px 0 0;">
        Assistante à réponses pré-écrites, pas une vraie IA — pour de vraies questions, direction « Comment réviser » ou un formateur.
      </p>
    </div>
  `;
  document.body.appendChild(widget);

  const pageTips = NURSE_TIPS_BY_PAGE[pageId] || [];
  const allTips = [...pageTips, ...GENERIC_TIPS];
  let tipIndex = 0;

  function showTip() {
    const name = typeof STUDENT_NAME !== 'undefined' ? STUDENT_NAME : '';
    document.getElementById('nurse-message').textContent = (name ? `${name}, ` : '') + allTips[tipIndex % allTips.length];
    tipIndex++;
  }

  showTip();

  document.getElementById('nurse-toggle').addEventListener('click', () => {
    const panel = document.getElementById('nurse-panel');
    const isOpen = panel.style.display !== 'none';
    panel.style.display = isOpen ? 'none' : 'block';
    document.getElementById('nurse-toggle').setAttribute('aria-expanded', String(!isOpen));
  });
  document.getElementById('nurse-close').addEventListener('click', () => {
    document.getElementById('nurse-panel').style.display = 'none';
    document.getElementById('nurse-toggle').setAttribute('aria-expanded', 'false');
  });
  document.getElementById('nurse-next').addEventListener('click', showTip);

  document.getElementById('nurse-input').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const text = e.target.value.toLowerCase();
    const match = KEYWORD_RESPONSES.find((k) => k.keywords.some((kw) => text.includes(kw)));
    document.getElementById('nurse-message').textContent = match
      ? match.response
      : "Je ne reconnais pas assez ce mot-clé (je suis toute simple !) — essaie « Comment réviser » ou explore le menu à gauche.";
    e.target.value = '';
  });
}
