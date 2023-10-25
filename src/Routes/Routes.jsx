import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "../NotFound/NotFound";


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
            
        ]
    }    
]);

export default router;