import mongoose, { Schema, Document } from "mongoose";

// Define an interface for the User model
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "farmer" | "customer";
  profilePic?: string;
  farmDescription?: string;
  productsOffered?: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Create the User schema
const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "farmer", "customer"],
    default: "customer",
  },
  profilePic: {
    type: String,
    default: "",
  },
  farmDescription: {
    type: String,
    default: "",
  },
  productsOffered: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Automatically update `updatedAt` before saving
userSchema.pre<IUser>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

// Create and export the model
const User = mongoose.model<IUser>("User", userSchema);
export default User;