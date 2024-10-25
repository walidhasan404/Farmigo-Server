import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/authRoute";
import cookieParser from "cookie-parser";
import connectDB from "./db/config";
import orderRoutes from './routes/orderRoutes'

const app = express();
const port = 3000;

// Middleware

const corsOptions = {
  origin: 'http://localhost:5173', // Frontend origin
  credentials: true, // Allow sending credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// connect to mongodb
connectDB();

// All Routes
app.use("/api/users", authRoutes);
app.use('/api/order', orderRoutes)

// Root Route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with CORS, bcrypt, JWT, and Mongoose!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
