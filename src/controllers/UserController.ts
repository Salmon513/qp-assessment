import { Request, Response } from 'express';
import GroceryItem from '../models/GroceryItem';

export const viewAvailableItems = async (req: Request, res: Response) => {
  try {
    const groceryItems = await GroceryItem.findAll();
    res.json(groceryItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const bookItems = async (req: Request, res: Response) => {
  const { itemIds } = req.body;
  try {
    res.json({ message: 'Items booked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
