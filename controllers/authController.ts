import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel";

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
