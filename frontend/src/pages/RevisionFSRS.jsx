import { useFSRS } from '../hooks/useFSRS.js';

export function RevisionFSRS() {
  const { current, intervals, rate, Rating, isDone } = useFSRS();

  if (isDone || !current) {
    return <h1>Aucune carte à réviser pour le moment 🎉</h1>;
  }

  return (
    <div>
      <h1>Révision (FSRS)</h1>
      <div style={{ padding: 24, border: '1px solid #333', borderRadius: 8, maxWidth: 480 }}>
        <p style={{ fontSize: 18 }}>{current.front}</p>
        <hr style={{ borderColor: '#333' }} />
        <p style={{ color: '#9aa' }}>{current.back}</p>
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <button onClick={() => rate(Rating.Again)}>Again ({intervals?.again}j)</button>
        <button onClick={() => rate(Rating.Hard)}>Hard ({intervals?.hard}j)</button>
        <button onClick={() => rate(Rating.Good)}>Good ({intervals?.good}j)</button>
        <button onClick={() => rate(Rating.Easy)}>Easy ({intervals?.easy}j)</button>
      </div>
    </div>
  );
}
