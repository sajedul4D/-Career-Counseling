import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error";

 const router= createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>
    }
 ])
 export default router;