import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Categories from "../../Pages/Category/Categories";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category',
                element: <Categories></Categories>
            },
        ]
    }
]);

export default router;