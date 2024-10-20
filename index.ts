import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./db/config";
import cookieParser from 'cookie-parser';
import authrRouter from "./routes/authRoute";
import farmRequestRouter from "./routes/farmerRequestRoute";
import dotenv from 'dotenv';
import categoryRouter from './routes/categoryRoutes';
import productsRouter from './routes/productsRoutes';
import { Server, Socket } from 'socket.io';
import http from 'http';
import { log } from "console";
import blogRouter from "./routes/blogRoutes";
import orderRouter from "./routes/orderRoutes";
import reviewRouter from "./routes/reviewRoutes";
dotenv.config();

const app = express();
const port = 3000;

const server = http.createServer(app);

// CORS options
const corsOptions = {
  origin: ['http://localhost:5173', 'https://farmigo-8d2d8.web.app', 'https://farmigo-8d2d8.firebaseapp.com'], // Allow multiple origins
  credentials: true, // Allow cookies or credentials to be sent
  optionsSuccessStatus: 200 // For legacy browser support
};

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'https://farmigo-8d2d8.web.app', 'https://farmigo-8d2d8.firebaseapp.com'], // Match the origin to the frontend
    methods: ['GET', 'POST'],
  },
});

// Use CORS with options
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json()); // Parse JSON request bodies

connectDB(); 

// Root Route
app.use('/api/v1', authrRouter);
app.use('/api/v1', farmRequestRouter);
app.use('/api/v1', categoryRouter);
app.use('/api/v1', productsRouter);
app.use('/api/v1', blogRouter)
app.use('/api/v1/order', orderRouter)
app.use('/api/v1/review', reviewRouter)



// Real-time chat handling
io.on('connection', (socket: Socket) => {
  console.log('A user connected:', socket.id);

  // Handle sending messages
  socket.on('sendMessage', async (data) => {
    const { chat_id, product_id, customer_id, farmer_id, message, sender_id, reciever_id } = data;

    /* let chat = await Chat.findOne({ chat_id });
    if (!chat) {
      chat = new Chat({ chat_id, product_id, customer_id, farmer_id, messages: [] });
    }

    chat.messages.push({ sender_id, message, reciever_id, createdAt: new Date() });
    await chat.save(); */
    log(message)
    // Broadcast the message to both participants
    io.emit('receiveMessage', { farmer_id, message, sender_id });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Test Route
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, Farmigo");
});

// Start server with WebSocket support
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
