export function SectionPlaneControls({ clipEnabled, onToggle }) {
  // Livrable 2 : bascule on/off. Le vrai plan de coupe (THREE.Plane + material.clippingPlanes)
  // sera branché au Livrable 3 une fois le modèle GLTF réel intégré (les coupes anatomiques
  // demandées au §1 du cahier des charges nécessitent des géométries fermées par partie).
  return (
    <div style={{ position: 'absolute', top: 12, right: 12 }}>
      <button
        onClick={onToggle}
        style={{
          padding: '6px 12px',
          borderRadius: 6,
          border: '1px solid #444',
          background: clipEnabled ? '#3a6' : '#222',
          color: 'white',
          cursor: 'pointer',
          fontSize: 13,
        }}
      >
        {clipEnabled ? 'Vue en coupe : ON' : 'Vue en coupe : OFF'}
      </button>
    </div>
  );
}
