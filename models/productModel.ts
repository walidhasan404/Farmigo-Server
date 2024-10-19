import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    farmer_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product_name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    images: [String],
    featured: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
});

export default mongoose.model("Product", productSchema);
