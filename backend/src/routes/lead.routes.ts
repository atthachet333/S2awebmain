import { Router } from 'express';
import { submitContact, submitConsultation } from '../controllers/lead.controller';
import { validateBody } from '../middleware/validate';
import { formDailyRateLimiter, formRateLimiter } from '../middleware/rateLimit';
import { contactSchema } from '../schemas/contact.schema';
import { consultationSchema } from '../schemas/consultation.schema';

const router = Router();

router.post('/contact', formDailyRateLimiter, formRateLimiter, validateBody(contactSchema), submitContact);
router.post(
  '/consultations',
  formDailyRateLimiter,
  formRateLimiter,
  validateBody(consultationSchema),
  submitConsultation,
);

export default router;
