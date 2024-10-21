import { Link } from "react-router-dom";
import { useAuth } from "../../Authentication/AuthProvider/AuthContext";
import useGetData from "../../common/Hooks/useGetData"
import { LogOutIcon } from "lucide-react";


const Sidebar = () => {
    const {userAuth} = useAuth()
    const token = userAuth?.token

    const {userRole} = useGetData(token)
    console.log('====================================');
    console.log(userRole);
    console.log('====================================');
  return (
    <div className="hidden lg:flex flex-col h-svh bg-white w-64">
    <div className="flex items-center justify-center py-6">
        <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full">
                <i className="fas fa-circle text-white"></i>
            </div>
            <Link to={'/'} className="ml-3 text-xl font-bold text-gray-800">Farmigo</Link>
        </div>
    </div>
    <div className="flex flex-col justify-between h-full"> 
    <nav className="flex-1 px-4">
        
        <ul className="space-y-4">
            <Link to={'/dashboard'} className="flex items-center text-blue-600">
                <i className="fas fa-home mr-3"></i>
                <span>Dashboard</span>
            </Link>
            {
        userRole === "admin" && (
            <> 
            <Link to={'/dashboard/admin/users'} className="flex items-center text-gray-400">
                <i className="fas fa-shopping-cart mr-3"></i>
                <span>Users</span>
            </Link>
            <Link to={'/dashboard/admin/products'} className="flex items-center text-gray-400">
                <i className="fas fa-shopping-cart mr-3"></i>
                <span>Products</span>
            </Link>
            <Link to={'/dashboard/admin/blogs'} className="flex items-center text-gray-400">
                <i className="fas fa-shopping-cart mr-3"></i>
                <span>Blogs</span>
            </Link>
            <Link to={'/dashboard/admin/blogs'} className="flex items-center text-gray-400">
                <i className="fas fa-shopping-cart mr-3"></i>
                <span>Orders</span>
            </Link>
            </>
        )
    }
            {
                userRole === "farmer" ? (
                    <>
                    <Link to={'/dashboard/farmer/products'} className="flex items-center text-gray-400">
                        <i className="fas fa-shopping-cart mr-3"></i>
                        <span>Products</span>
                    </Link>
                    <Link to={'/dashboard/farmer/orders'} className="flex items-center text-gray-400">
                        <i className="fas fa-shopping-cart mr-3"></i>
                        <span>Orders</span>
                    </Link>
                    <Link to={'/dashboard/farmer/customers'} className="flex items-center text-gray-400">
                        <i className="fas fa-shopping-cart mr-3"></i>
                        <span>Customers</span>
                    </Link>
                    </>
                ):(
                    <>
                    <Link to={'/dashboard/delivary-add'} className="flex items-center text-gray-400">
                        <i className="fas fa-shopping-cart mr-3"></i>
                        <span>Delivary Address</span>
                    </Link>
                    <Link to={'/dashboard/carts'} className="flex items-center text-gray-400">
                        <i className="fas fa-shopping-cart mr-3"></i>
                        <span>Carts</span>
                    </Link>
                    </>
                )
            }
            <Link to={'/dashboard/profile'} className="flex items-center text-gray-400">
                <i className="fas fa-user mr-3"></i>
                <span>Profile</span>
            </Link>
           
        </ul>

        
        
    </nav>

       <nav className="p-4"> 
            <button className="flex items-center text-gray-400">
                <LogOutIcon/>
                <span onClick={() =>{
                    sessionStorage.removeItem('user')
                    window.location.href='/login'
                }} >Logout</span>
            </button>
        </nav>
    </div>

   
</div>
  )
}

export default Sidebar