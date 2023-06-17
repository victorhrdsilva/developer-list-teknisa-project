import express from 'express';
import { createProgrammer } from '../controllers/programmerControllers.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { programmerSchema } from '../schemas/programmerSchema.js';
const router = express.Router();

router.post('/crateProgrammer', validateSchema(programmerSchema), createProgrammer);

export default router;