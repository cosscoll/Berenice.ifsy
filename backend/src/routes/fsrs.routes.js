import { Router } from 'express';
import { getDueCards, previewCardSchedule, submitReview } from '../controllers/fsrs.controller.js';

const router = Router();

router.get('/users/:userId/due', getDueCards);
router.get('/cards/:cardId/preview', previewCardSchedule);
router.post('/cards/:cardId/review', submitReview);

export default router;
