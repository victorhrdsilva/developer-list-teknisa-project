import express from 'express';
import { createProgrammer, getProgrammerById, getProgrammers } from '../controllers/programmerControllers.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { programmerSchema } from '../schemas/programmerSchema.js';
const router = express.Router();

router.post('/crateProgrammer', validateSchema(programmerSchema), createProgrammer);

router.get('/retrieveProgrammers', getProgrammers)
router.get('/retrieveProgrammer/:id', getProgrammerById)


export default router;