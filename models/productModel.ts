import{model, Schema, Document, Types} from "mongoose";

interface IProduct extends Document {
    farmer_id: Types.ObjectId;
     category_id: Types.ObjectId;
    product_name: string;
    description?: string;
    price: number;
    quantity: number;
    images: string[];
    created_at: Date;
}


const productSchema = new Schema<IProduct>({
    farmer_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    product_name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
    images: [String],
    created_at: { type: Date, default: Date.now }
})

const Product = model<IProduct>('Product', productSchema)

export default Product;