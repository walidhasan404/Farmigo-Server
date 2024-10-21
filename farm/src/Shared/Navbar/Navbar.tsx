import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../../Components/Avatar/Avatar";
import { useAuth } from "../../Authentication/AuthProvider/AuthContext";
import UserNavigationPanel from "./UserNavigationPanel";
import CartButton from "../Button/CartButton";

/* const Navbar = () => {

const { userAuth } = useAuth();
// The lines `const token = userAuth?.token;` and `const profile_img = userAuth?.profile_img;` are
using optional chaining (`?.`) to access the `token` and `profile_img` properties from the
`userAuth` object. For Saving from Type Error : Property 'name' does not exist on type 'User | null'.ts(2339) 
const token = userAuth?.token;
const profile_img = userAuth?.profile_img;

const [userNavPanel, setUserNavPanel] = useState(false)
 //console.log(userAuth.data.profile_img);

 const handleUserNavPanel = () =>{
  setUserNavPanel(prev => !prev)
}

const handleBlur = () =>{
  //why i setTimout use 
  setTimeout(()=>{
      setUserNavPanel(false)
  }, 200)
  
}
  return (
    <nav className="">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="" className="flex items-center space-x-4">
              <img
                className="w-18 h-14"
                src="https://th.bing.com/th/id/R.871df517843a3f095a340d94557c7488?rik=vqCLOacO0RckdQ&riu=http%3a%2f%2fwww.techsir.com%2fd%2ffile%2fp%2f201303%2f9b9391b0d94da31b2c5003c0665bcf4f.png&ehk=xIYcYpoZw85sFOA0UZW8aSxV%2f8zHkBHX5sKDQ5NCX2I%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
              //Menu open: "hidden", Menu closed: "block"  
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>

            {// Menu open: "block", Menu closed: "hidden" 
            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link
              to={"/"}
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Home{" "}
            </Link>

            <Link
              to={"/Products"}
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Products{" "}
            </Link>

            <Link
              to={"/blogs"}
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Blogs{" "}
            </Link>

            <Link
              to={"/weather"}
              className="text-base text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Weather{" "}
            </Link>
          </div>
    
          <CartButton/>
          <div>
            {token ? (
               <div className="relative" onClick={handleUserNavPanel} onBlur={handleBlur}>
               <button className="w-12 h-12 mt-1">
               <Avatar src={profile_img || ''} alt="User Avatar" />
               </button>

                 // useernavigation 
                 {
                     userNavPanel ?  <UserNavigationPanel/> : ""
                 }
               

             </div>
             
            ) : (
              <Link
                to="/login"
                title=""
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                role="button"
              >
                {" "}
                Login{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; */

import { Search, User, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const { userAuth } = useAuth();

//The lines `const token = userAuth?.token;` and `const profile_img = userAuth?.profile_img;` are
//using optional chaining (`?.`) to access the `token` and `profile_img` properties from the
//`userAuth` object. For Saving from Type Error : Property 'name' does not exist on type 'User | null'.ts(2339)

const token = userAuth?.token;
const profile_img = userAuth?.profile_img;

const [userNavPanel, setUserNavPanel] = useState(false)
 //console.log(userAuth.data.profile_img);

 const handleUserNavPanel = () =>{
  setUserNavPanel(prev => !prev)
}

const handleBlur = () =>{
  //why i setTimout use 
  setTimeout(()=>{
      setUserNavPanel(false)
  }, 200)
  
}
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
         {/*  //Logo  */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="https://th.bing.com/th/id/R.871df517843a3f095a340d94557c7488?rik=vqCLOacO0RckdQ&riu=http%3a%2f%2fwww.techsir.com%2fd%2ffile%2fp%2f201303%2f9b9391b0d94da31b2c5003c0665bcf4f.png&ehk=xIYcYpoZw85sFOA0UZW8aSxV%2f8zHkBHX5sKDQ5NCX2I%3d&risl=&pid=ImgRaw&r=0" alt="Farmigo" width={120} height={40} />
            </Link>
          </div>

          {/* // Navigation Links  */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/products" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                Products
              </Link>
            
              <div className="relative group">
                <Link to="/weather" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                  Weather
                </Link>
              </div>
             
              <div className="relative group">
                <Link to="/blogs" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                  Blogs
                </Link>
              </div>
            </div>
          </div>
         
           {/* Right side icons  */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <Search className="h-6 w-6" />
              </button>
              <div className="">
                <CartButton/>
               </div>
               
                   <div>
            {token ? (
               <div className="relative" onClick={handleUserNavPanel} onBlur={handleBlur}>

                {token.length > 0 ? (
                  <button className="mt-4 rounded-full text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ml-3">
                  <Avatar src={profile_img || ''} alt="User Avatar" className="h-6 w-12 " />
                  </button>
                   
                ): (<button className="p-1 rounded-full text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ml-3">
                <User className="h-6 w-8" />
              </button> )}
              

                 {/* // useernavigation panel */}
                 {
                  userNavPanel ?  <UserNavigationPanel/> : ""
              }
            

          </div>
          
         ) : (
           <Link
             to="/login"
             className="ml-2 hidden lg:inline-flex md:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
             role="button"
           >
             Login
           </Link>
         )}
       </div>
              
            </div>
          </div>

          {/* // Mobile menu button  */}
          <div className="-mr-2 flex md:hidden items-center">
          <div className="">
          <CartButton/>
          </div>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

    {/*  // Mobile menu, show/hide based on menu state  */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
        id="mobile-menu"
      >
      
       
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/products" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">
            Products
          </NavLink>
        
    
          <Link to="/weather" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">
            Weather
          </Link>
          <Link to="/blogs" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">
            BLOG
          </Link>
         
        </div>
        <div> 
            {token ? (
               <div className="relative" onClick={handleUserNavPanel} onBlur={handleBlur}>

                {token.length > 0 ? (
                  <button className="mt-4 rounded-full text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ml-3">
                  <Avatar src={profile_img || ''} alt="User Avatar" className="h-6 w-12 " />
                  </button>
                   
                ): (<button className="p-1 rounded-full text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ml-3">
                <User className="h-6 w-8" />
              </button> )}
              

                 {/* // useernavigation panel */}
                 {
                  userNavPanel ?  <UserNavigationPanel/> : ""
              }
            

          </div>
          
         ) : (
          <NavLink to="/login" className="ml-2 text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">
          Login
        </NavLink>
         )}
       </div>
      </div>
     
    </nav>
  )
}

