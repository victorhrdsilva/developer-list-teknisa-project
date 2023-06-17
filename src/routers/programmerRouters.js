import express from 'express';
import { createProgrammer, deleteProgrammer, getProgrammerById, getProgrammers, updateProgrammer } from '../controllers/programmerControllers.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { programmerCreateSchema } from '../schemas/programmerCreateSchema.js';
import { programmerUpdateSchema } from '../schemas/programmerUpdateSchema.js';
import { verifyProgrammerWithId } from '../middlewares/verifyProgrammerWithId.js';
const router = express.Router();

router.post('/createProgrammer', validateSchema(programmerCreateSchema), createProgrammer);

router.get('/retrieveProgrammers', getProgrammers);
router.get('/retrieveProgrammer/:id', getProgrammerById);

router.put('/updateProgrammer/:id', validateSchema(programmerUpdateSchema), verifyProgrammerWithId, updateProgrammer);

router.delete('/deleteProgrammer/:id', verifyProgrammerWithId, deleteProgrammer)

export default router;