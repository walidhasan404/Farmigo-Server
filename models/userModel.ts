import mongoose, { Schema, Document } from "mongoose";

interface IAddress {
  street?: string;
  city?: string;
  postal_code?: string;
  house_number?: string;
}

// Define an interface for the User model
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "farmer" | "customer";
  profilePic?: string;
  address?: IAddress;
  google_auth?: Boolean;
  isFarmerRequestPending?: Boolean;
  farmDescription?: string; // ? optional
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
  address: {
    street: { type: String, default: "" },
    city: { type: String, default: "" },
    postal_code: { type: String, default: "" },
    house_number: { type: String, default: "" },
    default: {},
  },
  google_auth: {
    type: Boolean,
    default: false,
  },
  isFarmerRequestPending: {
    type: Boolean,
    default: false,
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

// Automatically update updatedAt before saving
userSchema.pre<IUser>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

// Create and export the model
const User = mongoose.model<IUser>("User", userSchema);
export default User;