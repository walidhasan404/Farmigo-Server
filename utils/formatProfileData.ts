import { IUser } from "../models/userModel";

interface ProfileData {
  profile_img: string;
  name: string;
  email: string;
}

const formatProfileData = (user: IUser): ProfileData => {
  return {
    profile_img: user.profilePic ?? '',
    name: user.name,
    email: user.email,
  };
};

export default formatProfileData;