// src/models/GroceryItem.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class GroceryItem extends Model {}

GroceryItem.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    inventory: { type: DataTypes.INTEGER, allowNull: false }
  }, 
  { 
    sequelize, 
    modelName: 'GroceryItem'
  }
);

export default GroceryItem;


