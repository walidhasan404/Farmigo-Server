import { Request, Response } from "express";
import productModel from "../models/productModel";

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productModel.find();
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch products" });
    }
};

// Update product by ID
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ success: false, message: "Product not found" });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update product" });
    }
};

// Delete product by ID
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ success: false, message: "Product not found" });
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete product" });
    }
};