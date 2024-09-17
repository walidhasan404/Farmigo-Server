import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./db/config";

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

connectDB();
// Root Route
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, TypeScript with CORS, bcrypt, JWT, and Mongoose!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
