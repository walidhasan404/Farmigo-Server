import { Request, Response } from "express";
import Blog from "../models/blogModel";
import Category from "../models/categoryModel";
import { isValidObjectId } from "mongoose";
import { Types } from "mongoose";

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
    const { blogId } = req.params;
    const {
      title,
      content,
      categories,
    }: { title: string; content: string; categories: string[] } = req.body;

    // Check if blogId is valid
    if (!isValidObjectId(blogId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid blog ID." });
    }

    // Check if the blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found." });
    }

    // Validate the provided categories
    const categoryDocs = await Category.find({
      category_name: { $in: categories },
    });
    if (categoryDocs.length !== categories.length) {
      return res.status(400).json({
        success: false,
        message: "One or more categories are invalid.",
      });
    }

    const categoryIds = categoryDocs.map(
      (category) => category._id as Types.ObjectId
    );

    // Update the blog
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.categories = categoryIds || blog.categories;
    blog.updatedAt = new Date();

    const updatedBlog = await blog.save();

    return res.status(200).json({ success: true, data: updatedBlog });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server Error", error });
  }
};

export const deleteBlog = async (req: CustomRequest, res: Response) => {
  try {
    const { blogId } = req.params;

    // Check if blogId is valid
    if (!isValidObjectId(blogId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid blog ID." });
    }

    // Check if the blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found." });
    }

    // Delete the blog
    await Blog.deleteOne({ _id: blogId });

    return res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully." });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server Error", error });
  }
};
