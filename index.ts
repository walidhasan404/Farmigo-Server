
import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./db/config";
import cookieParser from 'cookie-parser';
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
  origin: ['http://localhost:5173', 'https://farmigo.com'], // Allow multiple origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow cookies or credentials to be sent
  optionsSuccessStatus: 200 // For legacy browser support
};

// Use CORS with options
app.use(cors(corsOptions));
app.use(cookieParser()); 
app.use(express.json()); // Parse JSON request bodies

connectDB(); 

// Root Route
/* app.use('/api/v1', authrRouter)
app.use('/api/v1', authMiddleware2, farmRequestRouter)
app.use('/api/v1', authMiddleware2, categoryRouter)
app.use('/api/v1', productsRouter) */





app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, TypeScript with CORS, bcrypt, JWT, and Mongoose!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
