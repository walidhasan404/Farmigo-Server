import { Schema, model, Document, Types} from 'mongoose';

interface IMessage {
  sender_id: string;
  reciever_id: string;
  message: string;
  createdAt: Date;
}

export interface IChat extends Document {
  chat_id: string;
  product_id: Types.ObjectId;
  customer_id:  Types.ObjectId;
  farmer_id: Types.ObjectId;
  messages: IMessage[];
}

const messageSchema = new Schema<IMessage>({
  sender_id: { type: String, required: true },
  reciever_id: { type: String, required: true },
  message: { 
    type: String, 
    required: true,
    trim: true,
    lowercase: true,
    maxLength: 1000,
    validate: {
      validator: (value: string) => {
        return value.length <= 1000;
      }
   }},
  createdAt: { type: Date, default: Date.now },
}, {timestamps: true});


const chatSchema = new Schema<IChat>({
  chat_id: { type: String, required: true },
  product_id: { type: Schema.Types.ObjectId, ref: 'Product' },
  customer_id: { type: Schema.Types.ObjectId, ref: 'User' },
  farmer_id: { type: Schema.Types.ObjectId, ref: 'User' },
  messages: [messageSchema],
});

export default model<IChat>('Chat', chatSchema);
