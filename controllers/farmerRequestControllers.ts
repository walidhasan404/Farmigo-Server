import { Request, Response } from "express";


interface User {
  id: string; 
  role:string;
}

interface CustomRequest extends Request {
  user?: User; 
}

// User sends request to become a farmer
export const requestToJoinFarmer = async (req: CustomRequest, res: Response) => {
  const userId = req.user?.id; // Safely access id using optional chaining
   console.log(userId);
   const role = req.user?.role;
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized: User not found.' });
  }
  if (role === 'admin') {
    return res.status(401).json({ message: "Admin Can't Apply For Farmer" });
  }
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (user.role === 'farmer') {
      return res.status(400).json({ message: 'You are already a farmer.' });
    }

    if (user.isFarmerRequestPending) {
      return res.status(400).json({ message: 'Your request to join as a farmer is pending.' });
    }

    user.isFarmerRequestPending = true;
    await user.save();

    res.status(200).json({ message: 'Request to join as a farmer sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};





// Admin gets all farmer join requests
export const getFarmerRequests = async (_req:Request, res:Response) => {
  try {
    const requests = await User.find({ isFarmerRequestPending: true, role: 'customer' }).select('name email role');

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};



// Admin approves farmer request
export const approveFarmerRequest = async (req:Request, res:Response) => {
  console.log(req.params);
  
  const userId = req.params.id;
  console.log(userId);
  

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (!user.isFarmerRequestPending) {
      return res.status(400).json({ message: 'No pending request for this user.' });
    }

    // Update role to farmer and reset the request flag
    user.role = 'farmer';
    user.isFarmerRequestPending = false;
    await user.save();

    res.status(200).json({ message: 'Request approved, user is now a farmer.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};




// Admin declines farmer request
export const declineFarmerRequest = async (req:Request, res:Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (!user.isFarmerRequestPending) {
      return res.status(400).json({ message: 'No pending request for this user.' });
    }

    // Reset the request flag without changing the role
    user.isFarmerRequestPending = false;
    await user.save();

    res.status(200).json({ message: 'Request declined.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
