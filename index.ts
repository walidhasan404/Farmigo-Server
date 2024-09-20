import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/authRoute";
import cookieParser from "cookie-parser";
import connectDB from "./db/config";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// connect to mongodb
connectDB();

// All Routes
app.use("/api/users", authRoutes);

// Root Route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with CORS, bcrypt, JWT, and Mongoose!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
