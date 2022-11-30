import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CategorySingel from "../../Pages/CategoryPage/CategorySingel";
import Confrim from "../../Pages/Confrim/Confrim";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayout from "../../Pages/Dashboard/DashboardLayout/DashboardLayout";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";

import Home from "../../Pages/Home/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import Login from "../../Pages/SignUp/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
           
            {
                path: '/category/:id',
                loader: ({params})=> fetch(`https://car-resale-server-side.vercel.app/category/${params.id}`),
                element: <PrivetRoute><CategorySingel></CategorySingel></PrivetRoute>  
            },
            {
                path: '/booking-confirmed',
                element: <Confrim></Confrim>
            },
            {
                path: '*',
                element: <Page404></Page404>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooking></MyBooking>
            }
        ]
    }
])