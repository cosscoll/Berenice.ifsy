import { Router } from 'express';
import fsrsRoutes from './fsrs.routes.js';
import ecosRoutes from './ecos.routes.js';
import ueRoutes from './ue.routes.js';

const router = Router();

router.use('/fsrs', fsrsRoutes);
router.use('/ecos', ecosRoutes);
router.use('/ue', ueRoutes);

router.get('/health', (req, res) => res.json({ status: 'ok' }));

export default router;
