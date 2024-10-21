import { createContext, useState, useEffect, useContext } from "react";
import { lookInSession } from "../../common/session";

interface User {
  token: string;
  profile_img: string;
  name: string;
  email: string;
}

interface AuthContextType {
  userAuth: User | null;
  setUserAuth: (user: User | null) => void;
  cartItems: number;
  setCartItems: (cartItems: number) => void;
}

// Create the AuthContext without a default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userAuth, setUserAuth] = useState<User | null>(null);
  const [cartItems, setCartItems] = useState<number>(0)
/*   useEffect(() => {
    let userInSession = lookInSession("user");
    userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth(null);
  }, []); when i use this code show Error : Uncaught SyntaxError: "undefined" is not valid JSON*/

  useEffect(() => {
    let userInSession = lookInSession("user");
  
    //console.log(userInSession);
    
    // Check if userInSession is valid before parsing
    if (userInSession) {
      try {
        const parsedUser = JSON.parse(userInSession);
        setUserAuth(parsedUser);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    } else {
      setUserAuth(null); // If no user in session, set to null
    }
  }, []);
  

  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth , cartItems, setCartItems }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext safely
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
