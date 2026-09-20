import { Router } from 'express';
import {
  listScenarios,
  startECOSSession,
  submitAIEvaluation,
  validateEvaluation,
} from '../controllers/ecos.controller.js';

const router = Router();

router.get('/scenarios', listScenarios);
router.post('/sessions/:scenarioId', startECOSSession);
router.post('/evaluations', submitAIEvaluation);
router.patch('/evaluations/:evaluationId/validate', validateEvaluation);

export default router;
