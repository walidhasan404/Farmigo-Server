import mongoose, {Schema, Document, Model} from "mongoose";

interface IOrderItem {
  id: string;
  quantity: number
}

interface IOrder extends Document {
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  division: string;
  postalCode: string;
  saveInfo: boolean;
  useShippingAddress: boolean;
  shippingMethod: string;
  shippingCost: number;
  total: number;
  orderItems: IOrderItem[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
}


const OrderItemSchema: Schema = new Schema({
  id: {type: String,},
  quantity: {type: Number,}
})

const OrderSchema: Schema = new Schema(
  {
    email: { type: String, },
    country: { type: String, },
    firstName: { type: String, },
    lastName: { type: String, },
    address: { type: String, },
    apartment: { type: String },
    city: { type: String, },
    division: { type: String, },
    postalCode: { type: String, },
    saveInfo: { type: Boolean, default: false },
    useShippingAddress: { type: Boolean, default: false },
    shippingMethod: { type: String, },
    shippingCost: { type: Number, },
    total: { type: Number, },
    orderItems: [OrderItemSchema],
    status: { type: String, default: "pending" }, // Order status
  },
  { timestamps: true }
);


const Order: Model<IOrder> = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;