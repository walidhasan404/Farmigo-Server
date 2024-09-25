import { Request, Response } from 'express';
import Category from '../models/categoryModel';  // Assuming your Category model is in the models folder


// POST /categories (Add new category)
export const  createCategory = async (req: Request, res: Response) => {
  try {
    const { category_name } = req.body;
    const newCategory = new Category({ category_name });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error adding category', error });
  }
};


// GET /categories (List all categories)
export const getCategory =  async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
};


// GET /categories/:id (View category details)
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category details', error });
  }
};


// PUT /categories/:id (Update category details)
export const upadteCategory = async (req: Request, res: Response) => {
  try {
    const { category_name } = req.body;
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { category_name },
      { new: true }
    );
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error });
  }
};

// DELETE /categories/:id (Remove category)
export const delteCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.status(200).json({ message: 'Category removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing category', error });
  }
};
