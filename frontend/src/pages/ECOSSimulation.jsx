import { useEffect, useRef, useState } from 'react';
import { fetchScenarios } from '../services/api/ecosService.js';
import { startECOSRealtimeSession, stopECOSRealtimeSession } from '../services/webrtc/realtimeClient.js';

export function ECOSSimulation() {
  const audioRef = useRef(null);
  const sessionRef = useRef(null);
  const [scenarios, setScenarios] = useState([]);
  const [scenarioId, setScenarioId] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    fetchScenarios()
      .then((list) => {
        setScenarios(list);
        if (list.length) setScenarioId(list[0].ecos_id);
      })
      .catch(() => setStatus('list-error'));
  }, []);

  async function handleStart() {
    if (!scenarioId) return;
    setStatus('connecting');
    try {
      sessionRef.current = await startECOSRealtimeSession({ scenarioId, audioEl: audioRef.current });
      setStatus('active');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  function handleStop() {
    stopECOSRealtimeSession(sessionRef.current ?? {});
    setStatus('idle');
  }

  return (
    <div>
      <h1>Simulation ECOS — Avatar patient</h1>

      {status === 'list-error' && (
        <p style={{ color: '#e66' }}>
          Impossible de charger les scénarios — vérifier que `npm run seed:ecos` a été exécuté côté backend.
        </p>
      )}

      <select value={scenarioId} onChange={(e) => setScenarioId(e.target.value)} disabled={status === 'active'}>
        {scenarios.map((s) => (
          <option key={s.ecos_id} value={s.ecos_id}>
            {s.ecos_id} — {s.titre}
          </option>
        ))}
      </select>

      <p style={{ marginTop: 12 }}>Statut de session : <strong>{status}</strong></p>
      <audio ref={audioRef} autoPlay />
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button onClick={handleStart} disabled={!scenarioId || status === 'connecting' || status === 'active'}>
          Démarrer la session
        </button>
        <button onClick={handleStop} disabled={status !== 'active'}>Arrêter</button>
      </div>
      {status === 'error' && (
        <p style={{ color: '#e66' }}>
          Échec de connexion — vérifier que le backend tourne et que OPENAI_API_KEY est configurée.
        </p>
      )}
    </div>
  );
}
