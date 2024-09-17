// authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Use lowercase `string` for the JWT secret type
const JWT_SECRET: string = process.env.JWT_SECRET || "your_jwt_secret";

interface User {
    id: String; 
    role: String;
  }

interface DecodedToken {
  user: User; 
}


interface CustomRequest extends Request {
  user?: User; 
}

export const authMiddleware2 = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify the token and cast the result to DecodedToken
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

    // Assign the decoded user to req.user
    req.user = decoded.user;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
