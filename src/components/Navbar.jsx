import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-gray-900 text-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
				<div className="text-2xl font-bold tracking-wide">
					🎬 Movie<span className="text-orange-500">Flix</span>
				</div>
				<ul className="flex space-x-8 text-lg">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "text-orange-400 border-b-2 border-orange-400 pb-1"
									: "hover:text-orange-300 transition duration-300"
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/search"
							className={({ isActive }) =>
								isActive
									? "text-orange-400 border-b-2 border-orange-400 pb-1"
									: "hover:text-orange-300 transition duration-300"
							}
						>
							Search
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/watchlist"
							className={({ isActive }) =>
								isActive
									? "text-orange-400 border-b-2 border-orange-400 pb-1"
									: "hover:text-orange-300 transition duration-300"
							}
						>
							WatchList
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
