import { Router } from 'express';
import { getServices, getPackages } from '../controllers/catalog.controller';

const router = Router();

router.get('/services', getServices);
router.get('/packages', getPackages);

export default router;
