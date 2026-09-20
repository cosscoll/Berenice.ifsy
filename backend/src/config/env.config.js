import 'dotenv/config';

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '4000', 10),
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ifsi-platform',
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  JWT_SECRET: process.env.JWT_SECRET || 'change-me-in-production',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
  // gpt-realtime-2.1-mini par défaut : ~0,02-0,05 $/min contre ~0,06-0,11 $/min pour le
  // modèle flagship (tarifs vérifiés juillet 2026). Le flagship reste nécessaire pour les
  // scénarios ECOS à forte charge de raisonnement (ex. psychiatrie) — voir model_tier
  // dans les scénarios ECOS et la logique de sélection dans openaiRealtimeBridge.js.
  OPENAI_REALTIME_MODEL_STANDARD: process.env.OPENAI_REALTIME_MODEL_STANDARD || 'gpt-realtime-2.1-mini',
  OPENAI_REALTIME_MODEL_COMPLEX: process.env.OPENAI_REALTIME_MODEL_COMPLEX || 'gpt-realtime-2.1',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
};

export function assertRequiredEnv() {
  const missing = [];
  if (env.NODE_ENV === 'production' && env.JWT_SECRET === 'change-me-in-production') {
    missing.push('JWT_SECRET');
  }
  if (missing.length) {
    throw new Error(`Variables d'environnement manquantes: ${missing.join(', ')}`);
  }
}
