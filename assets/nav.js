/** Génère la barre de navigation latérale, identique sur toutes les pages. */
const NAV_ITEMS = [
  { id: 'dashboard', href: 'index.html',           label: 'Tableau de bord', icon: 'dashboard' },
  { id: 'ue',        href: 'ue.html',              label: 'Catalogue UE',    icon: 'book' },
  { id: 'revision',  href: 'revision.html',        label: 'Révision',        icon: 'cards' },
  { id: 'cartes-mentales', href: 'cartes-mentales.html', label: 'Cartes mentales', icon: 'map' },
  { id: 'anatomie',  href: 'anatomie.html',        label: 'Anatomie',        icon: 'body' },
  { id: 'ecos',      href: 'ecos.html',            label: 'Simulation ECOS', icon: 'patient' },
  { id: 'ressources', href: 'ressources.html',      label: 'Ressources',      icon: 'link' },
  { id: 'todo',      href: 'todo.html',            label: 'Mes tâches',      icon: 'check' },
  { id: 'apprendre', href: 'apprendre.html',       label: 'Comment réviser', icon: 'lightbulb' },
];

function renderNav(activeId) {
  const items = NAV_ITEMS.map((item) => `
    <a href="${item.href}" class="${item.id === activeId ? 'active' : ''}">
      ${ICONS[item.icon]}<span>${item.label}</span>
    </a>
  `).join('');

  document.getElementById('sidebar').innerHTML = `
    <div class="brand">IFSI Platform</div>
    <div class="brand-sub">Version statique</div>
    <nav class="nav-list">${items}</nav>
    <div class="sidebar-footer">Vos données restent dans ce navigateur.</div>
  `;
}
