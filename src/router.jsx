import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/hompage/index";
import Clubs from "./pages/Club/Clubs";
import News from "./pages/news/index";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/Clubs",
                element: <Clubs />
            },
                        {
                path: "/news",
                element: <News />
            },
        ]
    },
])

export default router;