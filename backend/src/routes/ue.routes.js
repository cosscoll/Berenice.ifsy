import { Router } from 'express';
import { listUEs, getUE } from '../controllers/ue.controller.js';

const router = Router();

router.get('/', listUEs);
router.get('/:code', getUE);

export default router;
