/** Navigation principale — V2 */
const NAV_ITEMS = [
  { id: 'dashboard', href: 'index.html', label: 'Tableau de bord', icon: 'dashboard' },
  { id: 'referentiel', href: 'referentiel.html', label: 'Référentiel 2026', icon: 'book' },
  { id: 'apprentissage', href: 'apprentissage.html', label: 'Apprentissage guidé', icon: 'lightbulb' },
  { id: 'revision', href: 'revision.html', label: 'Révision', icon: 'cards' },
  { id: 'quiz', href: 'quiz.html', label: 'Quiz', icon: 'check' },
  { id: 'examen', href: 'examen.html', label: 'Examen blanc', icon: 'check' },
  { id: 'progression', href: 'progression.html', label: 'Progression', icon: 'dashboard' },
  { id: 'cartes-mentales', href: 'cartes-mentales.html', label: 'Cartes mentales', icon: 'map' },
  { id: 'anatomie', href: 'anatomie.html', label: 'Anatomie', icon: 'body' },
  { id: 'ecos', href: 'ecos.html', label: 'Simulation ECOS', icon: 'patient' },
  { id: 'stage', href: 'stage.html', label: 'Stage', icon: 'patient' },
  { id: 'calculs', href: 'calculs.html', label: 'Calculs infirmiers', icon: 'lightbulb' },
  { id: 'bibliotheque', href: 'bibliotheque.html', label: 'Bibliothèque & recherche', icon: 'link' },
  { id: 'ressources', href: 'ressources.html', label: 'Ressources', icon: 'link' },
  { id: 'todo', href: 'todo.html', label: 'Mes tâches', icon: 'check' },
  { id: 'apprendre', href: 'apprendre.html', label: 'Méthodes de révision', icon: 'lightbulb' },
  { id: 'ue', href: 'ue.html', label: 'Anciennes UE', icon: 'book' },
];
function renderNav(activeId) {
  const items=NAV_ITEMS.map(item=>`<a href="${item.href}" class="${item.id===activeId?'active':''}">${ICONS[item.icon]}<span>${item.label}</span></a>`).join('');
  document.getElementById('sidebar').innerHTML=`<div class="brand">IFSI Platform</div><div class="brand-sub">Parcours infirmier • V2</div><nav class="nav-list">${items}</nav><div class="sidebar-footer">Progression enregistrée dans ce navigateur.</div>`;
}
