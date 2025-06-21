import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import WatchList from "./pages/WatchList";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/search", element: <Search /> },
			{ path: "/movie/:id", element: <MovieDetails /> },
			{ path: "/watchlist", element: <WatchList /> },
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
