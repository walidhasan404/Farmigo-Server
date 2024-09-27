import { Schema, model, Document } from "mongoose";

interface ICategory extends Document {
  category_name: string;
}

const categorySchema = new Schema<ICategory>({
  category_name: { type: String, required: true, unique: true },
});

const Category = model<ICategory>("Category", categorySchema);
export default Category;
