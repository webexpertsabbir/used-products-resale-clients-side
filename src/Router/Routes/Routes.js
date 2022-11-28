import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CategorySingel from "../../Pages/CategoryPage/CategorySingel";

import Home from "../../Pages/Home/Home/Home";



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
                path: '/category/:id',
                element: <CategorySingel></CategorySingel>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)    
            }
        ]
    }
])