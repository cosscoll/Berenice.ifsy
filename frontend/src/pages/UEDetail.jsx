import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUE } from '../services/api/ueService.js';

export function UEDetail() {
  const { code } = useParams();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('loading');
    fetchUE(code)
      .then((res) => {
        setData(res);
        setStatus('done');
      })
      .catch(() => setStatus('error'));
  }, [code]);

  if (status === 'loading') return <p>Chargement…</p>;
  if (status === 'error') return <p style={{ color: '#e66' }}>UE introuvable ou backend indisponible.</p>;
  if (!data) return null;

  return (
    <div>
      <p><Link to="/ue" style={{ color: '#8cf' }}>&larr; Retour au catalogue</Link></p>
      <h1>UE{data.code}</h1>

      {data.versions.map((v) => (
        <div key={v.bloc} style={{ marginBottom: 16, padding: 12, border: '1px solid #222', borderRadius: 6 }}>
          <strong>{v.bloc}</strong> — {v.titre}
        </div>
      ))}

      <h2>Fiches de révision associées</h2>
      {data.sampleCards.length === 0 && <p style={{ color: '#777' }}>Aucune fiche FSRS pour cette UE pour le moment.</p>}
      <ul>
        {data.sampleCards.map((c) => (
          <li key={c._id}>{c.concept} — {c.front}</li>
        ))}
      </ul>
    </div>
  );
}
