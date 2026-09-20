/**
 * Wrapper client de ts-fsrs — même moteur que le backend (fsrsScheduler.js) pour
 * pouvoir prévisualiser les intervalles côté UI sans aller-retour serveur.
 */
import { fsrs, generatorParameters, createEmptyCard, Rating } from 'ts-fsrs';

const params = generatorParameters({ enable_fuzz: true, enable_short_term: true });
export const scheduler = fsrs(params);

export function newCard() {
  return createEmptyCard(new Date());
}

/** Retourne les 4 intervalles proposés (en jours) pour affichage sur les boutons de notation. */
export function previewIntervals(card, now = new Date()) {
  const result = scheduler.repeat(card, now);
  const daysUntil = (due) => Math.max(1, Math.round((new Date(due) - now) / 86400000));
  return {
    again: daysUntil(result[Rating.Again].card.due),
    hard: daysUntil(result[Rating.Hard].card.due),
    good: daysUntil(result[Rating.Good].card.due),
    easy: daysUntil(result[Rating.Easy].card.due),
  };
}

/** Applique la note (API next(), recommandée depuis ts-fsrs v5 pour une note déjà connue). */
export function applyRating(card, rating, now = new Date()) {
  return scheduler.next(card, now, rating).card;
}

export { Rating };
