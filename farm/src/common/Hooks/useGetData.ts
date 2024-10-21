import { jwtDecode } from 'jwt-decode'; // Importing jwtDecode
import { JwtPayload } from 'jwt-decode'; // Importing JwtPayload for type safety

// Define the shape of the decoded token
interface CustomTokenPayload extends JwtPayload {
    user: {
        id: string;
        role?: string;
    };
     // Optional, as not all tokens may have a role
}

// Define the return type for the hook
interface UseTokenDataResult {
    userId: string;
    userRole: string;
}

// Custom Hook to Extract User ID and Role from Token
const useGetData = (token: string | undefined): UseTokenDataResult => {
    if (!token) {
        return { userId: '', userRole: '' };
    }

    try {
       
      //  console.log(token);
       

        const decodedToken = jwtDecode<CustomTokenPayload>(token);
        //console.log('Decoded Token:', decodedToken);
        
        const userId = decodedToken.user?.id;
        const userRole = decodedToken.user?.role || ''; // Default to an empty string if role is undefined
        // console.log(userRole, 'hook');
         
        return { userId, userRole };
    } catch (error) {
        console.error("Invalid token", error);
        return { userId: '', userRole: '' }; // Return default values in case of an error
    }
};

export default useGetData;
