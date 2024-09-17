import { IUser } from "./models/userModel";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: "admin" | "farmer" | "customer";
      };
    }
  }
}
