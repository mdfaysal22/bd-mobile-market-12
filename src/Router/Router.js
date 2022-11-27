import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Pages/Blog/Blog";
import AddProduct from "../Components/Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Components/Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../Components/Pages/Dashboard/AllSeller/AllSeller";
import MyOrder from "../Components/Pages/Dashboard/MyOrder/MyOrder";
import MyProducts from "../Components/Pages/Dashboard/MyProducts/MyProducts";
import Category from "../Components/Pages/Home/Categories/Category/Category";
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
                path: "/:category",
                loader: ({params}) => fetch(`http://localhost:5000/allproducts/${params.category}`),
                element: <Category></Category>
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
                    },
                    {
                        path:"/dashboard/allseller",
                        element: <AllSeller></AllSeller>
                    },
                    {
                        path:"/dashboard/allbuyer",
                        element:<AllBuyer></AllBuyer>
                    },
                    {
                        path:'/dashboard/myorders',
                        element: <MyOrder></MyOrder>
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