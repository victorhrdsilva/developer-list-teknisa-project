import express from 'express';
import syncDatabase from '../controllers/syncDatabase.js'
const router = express.Router();

router.get('/syncDatabase', syncDatabase);

export default router;