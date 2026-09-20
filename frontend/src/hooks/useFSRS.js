import { useCallback, useState } from 'react';
import { newCard, previewIntervals, applyRating, Rating } from '../services/fsrs/fsrsEngine.js';

/**
 * Hook de révision FSRS pour une file de cartes en mémoire.
 * (Le Livrable 3 branchera ceci sur l'API backend /api/fsrs/*.)
 */
export function useFSRS(initialCards = []) {
  const [cards, setCards] = useState(
    initialCards.length ? initialCards : [{ id: 'demo', ...newCard(), front: 'Carte de démonstration', back: '...' }],
  );
  const [index, setIndex] = useState(0);

  const current = cards[index] ?? null;
  const intervals = current ? previewIntervals(current) : null;

  const rate = useCallback(
    (rating) => {
      if (!current) return;
      const updated = applyRating(current, rating);
      setCards((prev) => prev.map((c, i) => (i === index ? { ...c, ...updated } : c)));
      setIndex((i) => Math.min(i + 1, cards.length - 1));
    },
    [current, index, cards.length],
  );

  return { cards, current, intervals, rate, Rating, isDone: index >= cards.length - 1 && !current };
}
