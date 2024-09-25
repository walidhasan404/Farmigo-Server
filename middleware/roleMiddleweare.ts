import { Request, Response, NextFunction } from "express";

interface User {
    role: string;
}

interface CustomRequest extends Request {
    user?: User; 
}

const roleMiddleware = (requiredRole: string) => {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        const userRole = req.user?.role;

        if (userRole === requiredRole) {
            next(); // User has the required role, proceed to the next middleware
        } else {
            res.status(403).json({ message: "Forbidden: You do not have the required role." }); // User does not have the required role
        }
    };
};

export default roleMiddleware;
