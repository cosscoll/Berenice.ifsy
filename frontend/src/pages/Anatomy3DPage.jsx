import { useState } from 'react';
import { AnatomyViewer } from '../components/Anatomy3D/AnatomyViewer.jsx';
import { listSystems, structuresForSystem, TA2_MAPPING_STATUS } from '../components/Anatomy3D/AnatomyNomenclatureTA2.js';

export function Anatomy3DPage() {
  const systems = listSystems();
  const [systemId, setSystemId] = useState(systems[0]?.id ?? '');
  const structures = structuresForSystem(systemId);

  return (
    <div>
      <h1>Anatomie 3D</h1>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="system-select" style={{ marginRight: 8 }}>Système anatomique :</label>
        <select id="system-select" value={systemId} onChange={(e) => setSystemId(e.target.value)}>
          {systems.map((s) => (
            <option key={s.id} value={s.id}>{s.fr}</option>
          ))}
        </select>
      </div>

      <AnatomyViewer label={systems.find((s) => s.id === systemId)?.fr} />

      <div style={{ marginTop: 16 }}>
        <h2 style={{ fontSize: 16 }}>Structures ({structures.length})</h2>
        <ul style={{ columns: 2, color: '#ccc' }}>
          {structures.map((s) => (
            <li key={s.en}>{s.fr} <span style={{ color: '#666', fontSize: 12 }}>({s.en})</span></li>
          ))}
        </ul>
        <p style={{ color: '#888', fontSize: 12 }}>
          {TA2_MAPPING_STATUS.statut} — {TA2_MAPPING_STATUS.description}
        </p>
      </div>
    </div>
  );
}
