import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // To load environment variables from a .env file

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI as string; // Casting to string, since you've checked its presence
    if (!dbURI) {
      throw new Error('MongoDB connection URI is not defined in environment variables');
    }

    await mongoose.connect(dbURI);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
