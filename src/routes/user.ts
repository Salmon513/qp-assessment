// src/routes/user.ts
import express from 'express';
import { viewAvailableItems, bookItems } from '../controllers/UserController';

const router = express.Router();

router.get('/grocery', viewAvailableItems);
router.post('/grocery/book', bookItems);

export default router;
