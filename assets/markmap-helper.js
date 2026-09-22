/**
 * Rendu de cartes mentales — API directe markmap-lib / markmap-view (vérifiée
 * sur markmap.js.org), PAS markmap-autoloader. L'autoloader ne re-scanne pas
 * fiablement le contenu injecté dynamiquement (SPA), ce qui causait des
 * cartes mentales vides quand on cliquait dessus. Cette version crée
 * explicitement chaque carte, donc elle fonctionne à chaque appel, y compris
 * sur du contenu ajouté après coup.
 */
function renderMindmap(svgEl, markdownText) {
  const { Transformer, Markmap } = window.markmap;
  const transformer = new Transformer();
  const { root } = transformer.transform(markdownText);
  return Markmap.create(svgEl, { autoFit: true, duration: 200 }, root);
}
