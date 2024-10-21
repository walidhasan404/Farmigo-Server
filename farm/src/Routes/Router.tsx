import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/User/Login/Login";
import RegisterPage from "../Authentication/User/Registration/Registration";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ProductsPage from "../Pages/Products/ProductsPage";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import BlogCard from "../Pages/Blogs/Blogs";
import CartPage from "../Pages/Cart/CartPage";
import Weather from "../Pages/Weather/Weather";
import Dashboard from "../Dashboard/index";
import ProfileUpdate from "../Dashboard/common/Profile/Profile";
import CheckoutForm from "../Pages/checkout/CheckoutForm";
import Dashboards from "../Dashboard/layouts/Dashboard";
import ProductsList from "../Dashboard/components/Farmer/ProductsList";
import AddProducts from "../Dashboard/components/Farmer/AddProducts";
import OrderList from "../Dashboard/components/Farmer/OrderList";
import AllProducts from "../Dashboard/components/Admin/AllProducts";
import AllUsers from "../Dashboard/components/Admin/AllUsers";
import BlogsPage from "../Dashboard/components/Admin/BlogPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <ProductsPage />
            },
           
            {
                path: "/blogs",
                element: <BlogCard />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/checkout",
                element: <CheckoutForm />
            },
            /* {
                path: "/products/grain & cereal",
                element: <Grain />
            },
            {
                path: "/products/dairy",
                element: <Dairy />
            },
            {
                path: "/products/poultry",
                element: <Poultry />
            },
            {
                path: "/products/fruit",
                element: <Fruit />

            }, */
            {
                path: "/products/:id",
                element: <ProductDetails />
            },
            {
                path: "/weather",
                element: <Weather />
            },
        ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <RegisterPage/>,
    },
    {
      path: `/dashboard`,
      element: <Dashboard/>,
      children: [
        { path: "/dashboard", element: <Dashboards /> },
        { path: "profile", element: <ProfileUpdate /> },
        { path: "farmer/products", element: <ProductsList/> },
        { path: "farmer/add-products", element: <AddProducts/> }, 
        { path: "farmer/orders", element: <OrderList/> }, 

        /* admin */
        { path: "admin/products", element: <AllProducts /> },
        { path: "admin/blogs", element: <BlogsPage /> }, 
        { path: "admin/users", element: <AllUsers /> }, 



      ]
    }
  ]);
