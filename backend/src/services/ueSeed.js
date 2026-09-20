/**
 * Charge le référentiel des UE (fichiers JSON de backend/src/data/ue-content/)
 * dans MongoDB. Idempotent : upsert par code UE.
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { connectDB, disconnectDB } from '../config/db.config.js';
import { UE } from '../models/UE.model.js';
import { logger } from '../utils/logger.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'data', 'ue-content');

const BLOCKS = [
  { file: 'S1-S2.json', bloc: 'S1-S2' },
  { file: 'S3-S4.json', bloc: 'S3-S4' },
  { file: 'S5-S6.json', bloc: 'S5-S6' },
];

export async function seedUEs() {
  await connectDB();
  let total = 0;

  for (const { file, bloc } of BLOCKS) {
    const raw = await readFile(path.join(DATA_DIR, file), 'utf-8');
    const { semesters, ues } = JSON.parse(raw);

    for (const ue of ues) {
      await UE.findOneAndUpdate(
        { code: ue.id, bloc },
        { code: ue.id, titre: ue.titre, semesters, bloc },
        { upsert: true, new: true },
      );
      total += 1;
    }
    logger.info(`UE seed: ${ues.length} UE chargées depuis ${file}`);
  }

  logger.info(`UE seed terminé: ${total} entrées traitées (upsert).`);
  await disconnectDB();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  seedUEs().then(() => process.exit(0));
}
