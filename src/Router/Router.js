import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Pages/Blog/Blog";
import AddProduct from "../Components/Pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../Components/Pages/Dashboard/MyProducts/MyProducts";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Shop from "../Components/Pages/Shop/Shop";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Error from "../Components/Shared/Error/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/shop",
                element: <Shop></Shop>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/dashboard',
                element:<DashboardLayout></DashboardLayout>,
                children:[
                    {
                        path:'/dashboard/addproduct',
                        element:<AddProduct></AddProduct>
                    },
                    {
                        path:'/dashboard/myproducts',
                        element:<MyProducts></MyProducts>
                    }
                ]
            }
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])