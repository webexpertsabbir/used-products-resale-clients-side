import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CategorySingel from "../../Pages/CategoryPage/CategorySingel";
import Confrim from "../../Pages/Confrim/Confrim";
import Dashboard from "../../Pages/Dashboard/Dashboard";

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
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`),
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
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
            
        ]
    }
])