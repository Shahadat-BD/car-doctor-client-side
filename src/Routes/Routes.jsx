import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import NotFound from "../NotFound/NotFound";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";


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
                element :<ServiceDetails></ServiceDetails>,
                loader :({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
            
        ]
    }    
]);

export default router;