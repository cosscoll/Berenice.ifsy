/** Personnalisation — prénom de l'étudiante, messages d'encouragement, streak. */
const STUDENT_NAME = 'Bérénice';

const ENCOURAGEMENTS = [
  "Continue comme ça, {name} !",
  "Petit à petit, {name}, ça rentre.",
  "{name}, chaque fiche revue est un pas de plus vers le diplôme.",
  "Bien joué {name}, la régularité paie toujours plus que le bachotage.",
  "{name}, même 5 minutes aujourd'hui, c'est déjà ça de pris.",
  "Tu tiens le rythme, {name} — c'est ça qui fait la différence.",
];

function randomEncouragement() {
  const msg = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
  return msg.replace('{name}', STUDENT_NAME);
}

/** Compte les jours distincts où le site a été ouvert (petit indicateur de régularité). */
const STREAK_KEY = 'ifsi_visit_days_v1';
function recordVisitAndGetStreakInfo() {
  const today = new Date().toISOString().slice(0, 10);
  let days = [];
  try { days = JSON.parse(localStorage.getItem(STREAK_KEY) || '[]'); } catch {}
  if (!days.includes(today)) days.push(today);
  days = days.slice(-90); // garde 90 jours max
  try { localStorage.setItem(STREAK_KEY, JSON.stringify(days)); } catch {}

  // Calcule la série de jours consécutifs se terminant aujourd'hui.
  let streak = 0;
  let cursor = new Date();
  const daySet = new Set(days);
  while (daySet.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return { totalDays: days.length, streak };
}
