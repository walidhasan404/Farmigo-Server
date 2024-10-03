import { IUser } from "../models/userModel";
import jwt from "jsonwebtoken";
interface ProfileData {
  token: string;  // JWT token to be sent in the response header
  profile_img: string;
  name: string;
  email: string;
}
// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

const formatProfileData = (user: IUser): ProfileData => {
     // Get the profile data from the profile data object passed to the constructor function and convert it into a JSON string using the profile data object.
       // Create a JWT payload
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "5d" });
  return {
    token : token,
    profile_img: user.profilePic ?? '',
    name: user.name,
    email: user.email,
  };
};

export default formatProfileData;