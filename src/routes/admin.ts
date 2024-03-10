// src/routes/admin.ts
import express from 'express';
import { addGroceryItem, viewGroceryItems, removeGroceryItem, updateGroceryItem } from '../controllers/AdminController';

const router = express.Router();

router.post('/grocery', addGroceryItem);
router.get('/grocery', viewGroceryItems);
router.delete('/grocery/:id', removeGroceryItem);
router.put('/grocery/:id', updateGroceryItem);

export default router;
