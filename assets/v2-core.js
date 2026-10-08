/**
 * Fonctions communes V2 : profil de formation et progression locale.
 * Toutes les données restent dans le navigateur.
 */
const IFSI_V2_PROFILE_KEY = 'ifsi_profile_v2';
const IFSI_QUIZ_STATS_KEY = 'ifsi_quiz_stats_v2';
const IFSI_STAGE_KEY = 'ifsi_stage_v2';

function getTrainingProfile() {
  try {
    return JSON.parse(localStorage.getItem(IFSI_V2_PROFILE_KEY) || 'null') || {
      referential: '2026',
      year: 1,
      semester: 1,
    };
  } catch {
    return { referential: '2026', year: 1, semester: 1 };
  }
}

function saveTrainingProfile(profile) {
  localStorage.setItem(IFSI_V2_PROFILE_KEY, JSON.stringify(profile));
}

function getQuizStats() {
  try {
    return JSON.parse(localStorage.getItem(IFSI_QUIZ_STATS_KEY) || '{"attempts":0,"correct":0,"sessions":0,"lastScore":null}');
  } catch {
    return { attempts: 0, correct: 0, sessions: 0, lastScore: null };
  }
}

function saveQuizSession(correct, total) {
  const stats = getQuizStats();
  stats.attempts += total;
  stats.correct += correct;
  stats.sessions += 1;
  stats.lastScore = total ? Math.round((correct / total) * 100) : 0;
  localStorage.setItem(IFSI_QUIZ_STATS_KEY, JSON.stringify(stats));
  return stats;
}

function getStageData() {
  try {
    return JSON.parse(localStorage.getItem(IFSI_STAGE_KEY) || 'null') || {
      service: '',
      start: '',
      end: '',
      objectives: [],
      notes: [],
    };
  } catch {
    return { service: '', start: '', end: '', objectives: [], notes: [] };
  }
}

function saveStageData(data) {
  localStorage.setItem(IFSI_STAGE_KEY, JSON.stringify(data));
}

function safeText(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);
}
