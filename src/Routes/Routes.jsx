import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import NotFound from "../NotFound/NotFound";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement : <NotFound></NotFound>,
        children: [
            {
              path: '/',
              element: <Home></Home>
            }, 
            {
                path: '/services/:id',
                element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader :({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
            
        ]
    }    
]);

export default router;