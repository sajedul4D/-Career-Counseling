import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error";
import Home from "../Home";
import Course from "../Page/Course";
import Details from "../Page/Details";
import Register from "../Page/Register";
import Login from "../Page/Login";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import Profile from "../Page/Profile";
import Contact from "../Page/Contact";


 const router= createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                
             loader: async()=>{
                const servies=await fetch('../category.json')
                const course=await servies.json()
                return course
             }
                    },
                    ,{
                     path:'/course',
                     element:<Course></Course>,
                     loader:()=>fetch("../category.json")
                    },{
                     path:'/details/:id',
                     element:<PrivetRouter><Details></Details></PrivetRouter>,
                     loader:async({params})=>{
                        const data= await fetch('../category.json')
                        const details=await data.json()
                        const singrldata=details.find(d=>d.id == params.id)
                        return singrldata
                     }
                    },
                    {
                     path:'/register',
                     element:<Register></Register>
                    },
                    {
                     path:"/login",
                     element:<Login></Login>
                    },{
                     path:'/profile',
                     element:<Profile></Profile>
                    }
                    ,{
                     path:'/contact',
                     element:<Contact></Contact>
                    }
                   
        ]
    },
    
    
 ])
 export default router;