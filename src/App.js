import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestMenu from "./components/RestMenu";


const About = lazy(()=>import("./components/About"));

const AppLayout= ()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[{
            path:"/",
            element:<Body/>
        },{
            path:"/about",
            element:<Suspense fallback={<h2>lazy loading.......</h2>}><About/></Suspense> 
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurant/:resId",
            element:<RestMenu/>
        }
    
    ],
        errorElement:<Error/>
    },
    
])


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);