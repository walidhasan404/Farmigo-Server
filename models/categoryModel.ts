import mongoose, { Schema, Document, model } from 'mongoose';

// Define the interface for the Category document
interface ICategory extends Document {
  category_name: string;
}

// Define the Category schema
const CategorySchema: Schema = new mongoose.Schema({
  category_name: { type: String, required: true },
}, {
  timestamps: true, 
});

// Create the Category model
const Category = model<ICategory>('Category', CategorySchema);

export default Category;
