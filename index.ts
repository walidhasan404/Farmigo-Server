
import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./db/config";
import cookieParser from 'cookie-parser';
import authrRouter from "./routes/authRoute";
import farmRequestRouter from "./routes/farmerRequestRoute";
import dotenv from 'dotenv'
import categoryRouter from './routes/categoryRoutes';
import productsRouter from './routes/productsRoutes';

dotenv.config()

const app = express();
const port = 3000;

// Middleware  // Enable 
// CORS options
const corsOptions = {
  origin: ['http://localhost:5173', 'https://farmigo-8d2d8.web.app', 'https://farmigo-8d2d8.firebaseapp.com'], // Allow multiple origins
  credentials: true, // Allow cookies or credentials to be sent
  optionsSuccessStatus: 200 // For legacy browser support
};

// Use CORS with options
app.use(cors(corsOptions));
app.use(cookieParser()); 
app.use(express.json()); // Parse JSON request bodies

connectDB(); 

// Root Route
app.use('/api/v1', authrRouter)
app.use('/api/v1', farmRequestRouter)
app.use('/api/v1', categoryRouter)
app.use('/api/v1', productsRouter)





app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, Farmigo");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
