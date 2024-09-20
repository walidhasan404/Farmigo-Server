import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import formatProfileData from "../utils/formatProfileData";
import getRandomImageUrl from "../utils/randomImageGenerator";

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

interface User {
  role: string;
  id: string;
}

interface CustomRequest extends Request {
  user?: User;
}

// Registration controller
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const userData = {
      name,
      email,
      password: hashedPassword,
      role: role || "customer",
      profilePic: getRandomImageUrl(),
    };

    // Create a new user
    const newUser = new User(userData);

    // Save the user to the database
    await newUser.save();

    // Remove the password from the response
    const { password: _, ...userWithoutPassword } = newUser.toObject();

    // Respond with success
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Login controller
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create a JWT payload
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    // Sign the JWT token
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "5d" });
    //Set JWT in cookie
    res.cookie("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });
    // Return the token in the response
    res.status(200).json(formatProfileData(user));
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get user profile
export const getUserProfile = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update user profile
export const updateUserProfile = async (req: CustomRequest, res: Response) => {
  const userId = req.user?.id;
  const updates = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, updates, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
