/**
 * Ressources externes. Sites vérifiés existants (URL réelles trouvées par
 * recherche). Pour YouTube, des LIENS DE RECHERCHE par thème plutôt qu'une
 * chaîne précise : une chaîne peut disparaître ou changer, un lien de
 * recherche reste toujours utile.
 */
const EXTERNAL_SITES = [
  {
    titre: 'Infirmiers.com — Espace étudiants',
    desc: "Site professionnel de référence en France : actualités IFSI, méthodologie, forum d'entraide entre étudiants.",
    url: 'https://www.infirmiers.com/etudiants-en-ifsi',
  },
  {
    titre: 'Nomad Education — Révisions DEI/IFSI',
    desc: "Fiches de révision gratuites classées par UE et par semestre, faites pour le programme infirmier.",
    url: 'https://www.nomadeducation.fr/revisions/diplome-infirmier-dei-ifsi-toutes-les-ue-par-s-lb77c265',
  },
  {
    titre: 'FUN MOOC (France Université Numérique)',
    desc: "Cours en ligne gratuits d'universités françaises — cherchez 'santé', 'soins infirmiers' ou une UE précise dans leur catalogue.",
    url: 'https://www.fun-mooc.fr/fr/',
  },
];

const YOUTUBE_TOPICS = [
  { label: 'Anatomie du cœur et cycle cardiaque', query: 'anatomie cœur cycle cardiaque infirmier' },
  { label: 'Lecture ECG pour infirmiers', query: 'lecture ECG infirmier débutant' },
  { label: 'Gestes AFGSU / RCP', query: 'AFGSU gestes de premiers secours infirmier' },
  { label: 'Calcul de dose infirmier', query: 'calcul de dose médicament infirmier méthode' },
  { label: 'Système respiratoire expliqué', query: 'système respiratoire anatomie physiologie infirmier' },
  { label: 'Prise de constantes vitales', query: 'prise des constantes vitales infirmier technique' },
  { label: "Système nerveux et échelle de Glasgow", query: 'échelle de Glasgow infirmier explication' },
  { label: 'Injections IM / SC / IV (techniques de base)', query: 'technique injection IM SC infirmier' },
];

function youtubeSearchUrl(query) {
  return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
}
