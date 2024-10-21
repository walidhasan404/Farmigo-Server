import React, { useContext } from "react";
import { authWithGoogle } from "../Authentication/AuthProvider/firebase.config";
import axios from "axios";
import { User } from "firebase/auth"; // Import the correct User type
import toast from "react-hot-toast";
import { storeInSession } from "../common/session";
import { AuthContext} from "../Authentication/AuthProvider/AuthContext";


/* Interface used but still showing error: Property 'accessToken' does not exist on type 'never'.ts(2339) */


  const Oath: React.FC = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
      throw new Error("AuthContext must be used within an AuthProvider");
    }
    const { setUserAuth } = authContext;

  const userAuthThroughServer = (serverRoute: string, formData: {}) => {
      axios.post((import.meta as any).env.VITE_API + serverRoute, formData)
        .then(({ data }) => {
          toast.success('Sign in Successfully');
          storeInSession("user", JSON.stringify(data));
          setUserAuth(data);
          console.log("User authenticated through server:", data);
        })
        .catch((err) => {
          console.error("Error authenticating user through server:", err);
        });
    };

    const handleGoogleAuth = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      try {
        const user: User | null = await authWithGoogle();

        if (user) {
          const serverRoute = "/google-auth";
          const formData = {
            access_token: (user as any).accessToken || '',
          };

          userAuthThroughServer(serverRoute, formData);
        }
      } catch (error) {
        console.error("Authentication failed", error);
      }
    };

    return (
      <button
        onClick={(e) => handleGoogleAuth(e)}
        className="w-full text-green-700 py-2 rounded-md hover:shadow-md shadow flex items-center justify-center"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google Logo"
          className="w-5 h-5 mr-2"
        />
        Continue with Google
      </button>
    );
  };

export default Oath;
