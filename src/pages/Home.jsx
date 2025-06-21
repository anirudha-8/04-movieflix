const Home = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 py-4 min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-12 bg-gray-900 text-white">
			{/* Text Section */}
			<div className="flex-1 text-center lg:text-left space-y-6">
				<h1 className="text-4xl sm:text-5xl font-bold text-orange-500">
					Welcome to <span className="text-white">MovieFlix</span>
				</h1>
				<p className="text-lg sm:text-xl text-gray-300 max-w-xl">
					Your ultimate source for trending, popular, and must-watch movies.
					Start exploring the cinematic world now!
				</p>
				<button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600 transition">
					Explore Now
				</button>
			</div>

			{/* Image Section */}
			<div className="flex-1">
				<img
					src="https://t4.ftcdn.net/jpg/12/49/96/91/240_F_1249969193_ytco7i8sAdBLPtG1LaLbjhJxaWfDDTvE.jpg"
					alt="movieflix hero"
					className="rounded-lg shadow-lg w-full"
				/>
			</div>
		</section>
	);
};

export default Home;
