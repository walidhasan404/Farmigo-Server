import { log } from "console";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface User {
  role: string;
  id: string;
}

interface CustomRequest extends Request {
  user?: User;
}

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

interface User {
  id: string;
  role: string;
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
  const token = req.header("auth-token");
  log(token, 'auth token');
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    ///console.log('sec', JWT_SECRET);

    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

    req.user = decoded.user;
    //  console.log(req.user);

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Unauthorized: Token expired" });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    } else {
      console.error("Unexpected error:", error);
      return res
        .status(401)
        .json({ message: "Unauthorized: Token verification failed" });
    }
  }
};

