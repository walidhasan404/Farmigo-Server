import axios from "axios";

/* Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
overrideMethod @ hook.js:591
printWarning @ react.development.js:209
error @ react.development.js:183
resolveDispatcher @ react.development.js:1592
useContext @ react.development.js:1602
(anonymous) @ fetchUser.tsx:8
Show 5 more frames
Show less
react.development.js:1618  Uncaught TypeError: Cannot read properties of null (reading 'useContext')
    at useContext (react.development.js:1618:21)
    at fetchUser.tsx:8:23
useContext @ react.development.js:1618
(anonymous) @ fetchUser.tsx:8
Show 1 more frame
Show less
[NEW] Explain Console errors by using Copilot in Edge: click
         
         to explain an error. 
        Learn more */
    interface AuthResponse {
      profile_img: string;
      name: string;
      email: string;
      token: string;
    }
        

    export const userAuthThroughServer = (
      serverRoute: string,
      formData: {}
    ): Promise<AuthResponse> => {   // Using AuthResponse type here
      console.log('====================================');
      console.log(formData);
      console.log('====================================');
      return axios
        .post((import.meta as any).env.VITE_API + serverRoute, formData)
        .then(({ data }) => {
          return data as AuthResponse;  // Cast the response to AuthResponse
        })
        .catch((err: any) => {
          console.error("Error authenticating user through server:", err);
          throw new Error(err.response?.data?.message || "Server Error");
        });
    };
    