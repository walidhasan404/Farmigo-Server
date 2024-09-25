import{model, Schema, Document, Types} from "mongoose";

interface IProduct extends Document {
    farmer_id: Types.ObjectId;
    category: string;
    product_name: string;
    description?: string;
    price: number;
    quantity: number;
    images: string[];
    rating: number;
    featured?: boolean;
    created_at: Date;
}


const productSchema = new Schema<IProduct>({
    farmer_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product_name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true},
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
    rating:{ type: Number, required: true },
    images: [String],
    featured: {type : Boolean , default: false},
    created_at: { type: Date, default: Date.now }
})

const Product = model<IProduct>('Product', productSchema)

export default Product;