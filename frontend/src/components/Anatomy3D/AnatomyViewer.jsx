import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { SectionPlaneControls } from './SectionPlaneControls.jsx';

/**
 * Viewer anatomique 3D — Livrable 2 : socle fonctionnel minimal.
 *
 * Source de modèle recommandée (vérifiée) : le dépôt ashemag/human-atlas
 * (https://github.com/ashemag/human-atlas) — TypeScript/React/Three.js, MIT,
 * 2234 maillages BodyParts3D sous licence CC BY 4.0 (attribution obligatoire),
 * 15 systèmes anatomiques, vues éclatées. Fonctionne 100% côté client (aucune
 * clé API, aucun backend requis pour l'affichage), ce qui simplifie la
 * conformité HDS pour ce module précis. Limite connue : modèle de référence
 * masculin adulte uniquement, nomenclature en anglais — la traduction TA2
 * française reste à faire nous-mêmes (mapping FMA -> vocabulaire CISMeF/SNOMED CT).
 * En attendant l'intégration réelle, ce composant affiche un placeholder.
 */
export function AnatomyViewer({ modelUrl = null, label = 'Modèle anatomique (placeholder)' }) {
  const [clipEnabled, setClipEnabled] = useState(false);

  return (
    <div style={{ width: '100%', height: '480px', position: 'relative', background: '#0f1115' }}>
      <Canvas camera={{ position: [2.5, 1.5, 2.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.1} />
        <Suspense fallback={<Html center style={{ color: 'white' }}>Chargement du modèle…</Html>}>
          {modelUrl ? <LoadedModel url={modelUrl} clipEnabled={clipEnabled} /> : <PlaceholderBody label={label} />}
        </Suspense>
        <OrbitControls enableDamping dampingFactor={0.08} minDistance={1} maxDistance={8} />
      </Canvas>

      <SectionPlaneControls clipEnabled={clipEnabled} onToggle={() => setClipEnabled((v) => !v)} />
    </div>
  );
}

function LoadedModel({ url }) {
  // useGLTF utilise par défaut le DRACOLoader/KTX2Loader configurés globalement
  // (voir DracoLoader.js) une fois `useGLTF.setDRACOLoader(...)` appelé au bootstrap de l'app.
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

/** Silhouette géométrique simple servant de repère tant que le vrai modèle TA2 n'est pas intégré. */
function PlaceholderBody({ label }) {
  const group = useRef();
  return (
    <group ref={group}>
      <mesh position={[0, 0.75, 0]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color="#d9a066" />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <capsuleGeometry args={[0.35, 0.9, 8, 16]} />
        <meshStandardMaterial color="#e0b98a" />
      </mesh>
      <mesh position={[-0.55, 0.15, 0]} rotation={[0, 0, Math.PI / 10]}>
        <capsuleGeometry args={[0.1, 0.7, 8, 16]} />
        <meshStandardMaterial color="#e0b98a" />
      </mesh>
      <mesh position={[0.55, 0.15, 0]} rotation={[0, 0, -Math.PI / 10]}>
        <capsuleGeometry args={[0.1, 0.7, 8, 16]} />
        <meshStandardMaterial color="#e0b98a" />
      </mesh>
      <Html position={[0, -0.9, 0]} center style={{ color: '#9aa', fontSize: 12, whiteSpace: 'nowrap' }}>
        {label}
      </Html>
    </group>
  );
}
