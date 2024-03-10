import { Request, Response } from 'express';
import GroceryItem from '../models/GroceryItem';

export const addGroceryItem = async (req: Request, res: Response) => {
  try {
    const { name, price, inventory } = req.body;
    const groceryItem = await GroceryItem.create({ name, price, inventory });
    res.status(201).json(groceryItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const viewGroceryItems = async (req: Request, res: Response) => {
  try {
    const groceryItems = await GroceryItem.findAll();
    res.json(groceryItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const removeGroceryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedCount: number = await GroceryItem.destroy({ where: { id } });
    if (deletedCount > 0) {
      res.json({ message: 'Grocery item removed successfully' });
    } else {
      res.status(404).json({ error: 'Grocery item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateGroceryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, inventory } = req.body;
  try {
    const updatedCount: any = await GroceryItem.update({ name, price, inventory }, { where: { id } });
    if (updatedCount > 0) {
      res.json({ message: 'Grocery item updated successfully' });
    } else {
      res.status(404).json({ error: 'Grocery item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};




