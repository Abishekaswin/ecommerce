import React from "react";
import Home from "./Page/Home";
import Category from "./Page/Category";
import Products from "./Page/Products";
import {
  createBrowserRouter,
  RouterProvider,
 Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./app.scss"


const Layout = ()=>{
return (

<div className="app"           > 
   
   <Navbar/>
   <Outlet/>
   
   <Footer/>
   
   </div>
)
   

}




const router =createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[{
            path:'/',
            element:<Home/>
             },
             {
                path:'/products/:id',
                element:<Products/>
             },
             {
                path:'/product/:id',
                element: < Category />
             }
            
        ]
    }
    ]
)

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
