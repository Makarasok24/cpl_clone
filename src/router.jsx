import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/hompage/index";
import Clubs from "./pages/Club/Clubs";
import ClubDetail from "./pages/Club/ClubDetail";
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
                path: "/Clubs/ClubDetail",
                element: <ClubDetail />
            },
            

        ]
    },
])

export default router;