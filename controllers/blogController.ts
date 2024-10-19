import { Request, Response } from "express";
import Blog from "../models/blogModel";
import Category from "../models/categoryModel";

interface User {
  role: string;
  id: string;
}

interface CustomRequest extends Request {
  user?: User;
}

export const createBlog = async (req: CustomRequest, res: Response) => {
  try {
    const { title, content, categories } = req.body;

    const categoryDocs = await Category.find({
      category_name: { $in: categories },
    });

    if (categoryDocs.length !== categories.length) {
      return res.status(400).json({
        success: false,
        message: "One or more categories are invalid.",
      });
    }

    const categoryIds = categoryDocs.map((category) => category._id);

    const blog = new Blog({
      title,
      content,
      author: req.user?.id,
      categories: categoryIds,
    });

    const savedBlog = await blog.save();

    return res.status(201).json({ success: true, data: savedBlog });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server Error", error });
  }
};

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const query = req.query;

    const blogs = await Blog.find(query);

    return res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};

export const updateBlog = async (req: CustomRequest, res: Response) => {
  try {
    const { title, content, categories } = req.body;

    const categoryDocs = await Category.find({
      category_name: { $in: categories },
    });

    if (categoryDocs.length !== categories.length) {
      return res.status(400).json({
        success: false,
        message: "One or more categories are invalid.",
      });
    }

    const categoryIds = categoryDocs.map((category) => category._id);

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, categories: categoryIds },
      { new: true }
    );

    return res.status(200).json({ success: true, data: updatedBlog });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error", error });
  }
};

export const deleteBlog = async (req: CustomRequest, res: Response) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    return res.status(204).json({ success: true, message: "Blog deleted successfully." });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error", error });
  }
};

