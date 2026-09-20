/**
 * Charge le deck FSRS (backend/src/data/fsrs-decks/decks-seed.json) en base pour
 * un utilisateur donné. Le format JSON reprend exactement le schéma "Fiche
 * Révision" du cahier des charges (§3).
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { connectDB, disconnectDB } from '../../config/db.config.js';
import { FSRSCard } from '../../models/FSRSCard.model.js';
import { createCard } from './fsrsScheduler.js';
import { logger } from '../../utils/logger.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DECK_PATH = path.join(__dirname, '..', '..', 'data', 'fsrs-decks', 'decks-seed.json');

export async function seedFsrsDeck(userId) {
  await connectDB();

  const raw = await readFile(DECK_PATH, 'utf-8');
  const deck = JSON.parse(raw);

  const docs = deck.map((item) => {
    const card = createCard({ ue: item.ue, concept: item.concept, tags: item.tags });
    return {
      userId,
      ue: item.ue,
      concept: item.concept,
      type: item.type,
      front: item.front,
      back: item.back,
      tags: item.tags,
      visual: item.visual,
      due: card.due,
      stability: card.stability,
      difficulty: card.difficulty,
      elapsed_days: card.elapsed_days,
      scheduled_days: card.scheduled_days,
      reps: card.reps,
      lapses: card.lapses,
      state: card.state,
      last_review: card.last_review ?? null,
    };
  });

  const inserted = await FSRSCard.insertMany(docs);
  logger.info(`Seed FSRS: ${inserted.length} carte(s) créée(s) pour user ${userId} depuis ${path.basename(DECK_PATH)}`);
  await disconnectDB();
  return inserted;
}

// Exécution directe: `node src/services/fsrs/fsrsSeed.js <userId>`
if (import.meta.url === `file://${process.argv[1]}`) {
  const userId = process.argv[2];
  if (!userId) {
    console.error('Usage: node fsrsSeed.js <userId>');
    process.exit(1);
  }
  seedFsrsDeck(userId).then(() => process.exit(0));
}
