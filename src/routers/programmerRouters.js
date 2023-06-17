import express from 'express';
import { createProgrammer, getProgrammerById, getProgrammers, updateProgrammer } from '../controllers/programmerControllers.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { programmerCreateSchema } from '../schemas/programmerCreateSchema.js';
import { programmerUpdateSchema } from '../schemas/programmerUpdateSchema.js';
const router = express.Router();

router.post('/crateProgrammer', validateSchema(programmerCreateSchema), createProgrammer);

router.get('/retrieveProgrammers', getProgrammers);
router.get('/retrieveProgrammer/:id', getProgrammerById);

router.put('/updateProgrammer/:id', validateSchema(programmerUpdateSchema), updateProgrammer);

export default router;