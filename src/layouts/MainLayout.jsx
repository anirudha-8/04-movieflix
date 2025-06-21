import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-gray-900 text-white">
				<Outlet />
			</main>
		</>
	);
};
export default MainLayout;
