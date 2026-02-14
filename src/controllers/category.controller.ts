import { Request, Response } from "express";
import Category from "../models/category.model";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, type, description } = req.body;
    
    // Check if category already exists
    const existingCategory = await Category.findOne({ name, type });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists for this type" });
    }

    const category = new Category({ name, type, description });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const { type } = req.query;
    const filter = type ? { type } : {};
    const categories = await Category.find(filter).sort({ name: 1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};
