import { createBrowserRouter } from "react-router";
import Browse from "./browse";
import Login from "./login";
import { RouterProvider } from "react-router-dom";
import Home from "./home";

const Body = () => {

    const appRouter = new createBrowserRouter(
        [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/browse",
                element: <Browse/>
            }
        ]
    )

    return (<div>
       <RouterProvider router={appRouter} />
    </div>)
}
export default Body;