import { Router } from 'express';
import healthRoutes from './health.routes';
import catalogRoutes from './catalog.routes';
import leadRoutes from './lead.routes';

const router = Router();

// รวมทุก route ภายใต้ /api
router.use(healthRoutes);
router.use(catalogRoutes);
router.use(leadRoutes);

export default router;
