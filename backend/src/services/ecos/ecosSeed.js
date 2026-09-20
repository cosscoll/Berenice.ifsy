/**
 * Charge les scénarios ECOS (backend/src/data/ecos-scenarios/scenarios-seed.json)
 * en base. Idempotent : upsert par ecos_id.
 *
 * ⚠️ Contenu à faire valider par un formateur IFSI avant tout usage réel avec des
 * étudiants — ce sont des scénarios pédagogiques rédigés pour la structure technique,
 * pas des protocoles cliniques validés.
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { connectDB, disconnectDB } from '../../config/db.config.js';
import { ECOSScenario } from '../../models/ECOSScenario.model.js';
import { logger } from '../../utils/logger.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_PATH = path.join(__dirname, '..', '..', 'data', 'ecos-scenarios', 'scenarios-seed.json');

export async function seedECOSScenarios() {
  await connectDB();
  const raw = await readFile(DATA_PATH, 'utf-8');
  const scenarios = JSON.parse(raw);

  let count = 0;
  for (const s of scenarios) {
    await ECOSScenario.findOneAndUpdate({ ecos_id: s.ecos_id }, s, { upsert: true, new: true });
    count += 1;
  }

  logger.info(`Seed ECOS: ${count} scénario(s) chargé(s).`);
  await disconnectDB();
  return count;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  seedECOSScenarios().then(() => process.exit(0));
}
