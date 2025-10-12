import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/hompage/index";
import Clubs from "./pages/Club/Clubs";
import News from "./pages/news/index";
import ClubDetail from "./pages/Club/ClubDetail";
import PlayerDetail from "./pages/Club/PlayeDetail";

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
                path: "/clubs",
                element: <Clubs />
            },
                        {
                path: "/news",
                element: <News />
            },
            {
                path: "/clubs/clubDetail",
                element: <ClubDetail />
            },
            {
                path: "/clubs/players/:PlayerId",
                element: <PlayerDetail />
            }

        ]
    },
])

export default router;