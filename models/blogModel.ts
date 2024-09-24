import { Schema, model, Document, Types } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  categories: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  comments: Types.ObjectId[];
}

const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

// Pre-save hook to update `updatedAt` field
blogSchema.pre<IBlog>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Blog = model<IBlog>("Blog", blogSchema);
export default Blog;
