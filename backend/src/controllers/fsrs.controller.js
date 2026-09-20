import { FSRSCard } from '../models/FSRSCard.model.js';
import { ReviewLog } from '../models/ReviewLog.model.js';
import { previewSchedule, reviewCard, dueCards } from '../services/fsrs/fsrsScheduler.js';

export async function getDueCards(req, res, next) {
  try {
    const { userId } = req.params;
    const cards = await FSRSCard.find({ userId }).lean();
    res.json({ due: dueCards(cards) });
  } catch (err) {
    next(err);
  }
}

export async function previewCardSchedule(req, res, next) {
  try {
    const card = await FSRSCard.findById(req.params.cardId).lean();
    if (!card) return res.status(404).json({ error: 'Carte introuvable' });
    res.json(previewSchedule(card));
  } catch (err) {
    next(err);
  }
}

export async function submitReview(req, res, next) {
  try {
    const { rating } = req.body; // 1=Again 2=Hard 3=Good 4=Easy
    const card = await FSRSCard.findById(req.params.cardId);
    if (!card) return res.status(404).json({ error: 'Carte introuvable' });

    const { card: updated, log } = reviewCard(card.toObject(), rating);
    Object.assign(card, updated);
    await card.save();

    await ReviewLog.create({
      userId: card.userId,
      cardId: card._id,
      rating,
      state: log.state,
      due: log.due,
      stability: log.stability,
      difficulty: log.difficulty,
      elapsed_days: log.elapsed_days,
      last_elapsed_days: log.last_elapsed_days,
      scheduled_days: log.scheduled_days,
      review: log.review,
    });

    res.json({ card, log });
  } catch (err) {
    next(err);
  }
}
