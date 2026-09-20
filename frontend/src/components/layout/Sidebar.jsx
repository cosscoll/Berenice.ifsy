import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Tableau de bord' },
  { to: '/ue', label: 'Catalogue UE' },
  { to: '/revision', label: 'Révision (FSRS)' },
  { to: '/anatomie', label: 'Anatomie 3D' },
  { to: '/ecos', label: 'Simulation ECOS' },
];

export function Sidebar() {
  return (
    <nav style={{ width: 220, borderRight: '1px solid #222', padding: 16 }}>
      <div style={{ fontWeight: 700, marginBottom: 16 }}>IFSI Platform</div>
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          style={({ isActive }) => ({
            display: 'block',
            padding: '8px 0',
            color: isActive ? '#fff' : '#9aa',
            textDecoration: 'none',
          })}
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}
