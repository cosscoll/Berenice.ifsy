import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUEs } from '../services/api/ueService.js';

const BLOCS = [
  { value: '', label: 'Tous' },
  { value: 'S1-S2', label: 'S1-S2 — Fondamentaux' },
  { value: 'S3-S4', label: 'S3-S4 — Pathologies & Urgences' },
  { value: 'S5-S6', label: 'S5-S6 — Expertise & Leadership' },
];

export function UECatalogue() {
  const [bloc, setBloc] = useState('');
  const [ues, setUes] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('loading');
    fetchUEs(bloc || undefined)
      .then((data) => {
        setUes(data);
        setStatus('done');
      })
      .catch(() => setStatus('error'));
  }, [bloc]);

  return (
    <div>
      <h1>Catalogue des UE</h1>

      <div style={{ marginBottom: 16 }}>
        {BLOCS.map((b) => (
          <button
            key={b.value}
            onClick={() => setBloc(b.value)}
            style={{ marginRight: 8, background: bloc === b.value ? '#3a6' : undefined }}
          >
            {b.label}
          </button>
        ))}
      </div>

      {status === 'error' && (
        <p style={{ color: '#e66' }}>
          Impossible de charger les UE — vérifier que le backend tourne et que `npm run seed:ue` a été exécuté.
        </p>
      )}
      {status === 'loading' && <p>Chargement…</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {ues.map((ue) => (
          <li key={`${ue.code}-${ue.bloc}`} style={{ padding: '6px 0', borderBottom: '1px solid #222' }}>
            <Link to={`/ue/${ue.code}`} style={{ color: '#8cf' }}>
              UE{ue.code} — {ue.titre}
            </Link>
            <span style={{ color: '#777', fontSize: 12, marginLeft: 8 }}>({ue.bloc})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
