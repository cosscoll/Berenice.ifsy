import { createApp } from './app.js';
import { connectDB } from './config/db.config.js';
import { env, assertRequiredEnv } from './config/env.config.js';
import { logger } from './utils/logger.js';

async function main() {
  assertRequiredEnv();
  await connectDB();

  const app = createApp();
  app.listen(env.PORT, () => {
    logger.info(`API IFSI démarrée sur http://localhost:${env.PORT} (${env.NODE_ENV})`);
  });
}

main().catch((err) => {
  logger.error('Échec du démarrage du serveur', { err: err.message });
  process.exit(1);
});
