import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import SignUp from "../Components/Pages/SignUp/SignUp";
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
                path:'/home',
                element:<Home></Home>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            }
        ]
    }
])