import { Link } from "react-router-dom";

const MovieCard = ({ id, title, poster_path, vote_average, release_date }) => {
	const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

	return (
		<Link
			to={`/movie/${id}`}
			className="bg-[#1f2937] text-white rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
		>
			<img
				src={poster_path ? `${imageBaseUrl}${poster_path}` : "/no-image.jpg"}
				alt={title}
				className="w-full h-72 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-lg font-semibold truncate">{title}</h3>
				<div className="text-sm text-gray-300 mt-1">
					⭐ {vote_average} • {release_date?.split("-")[0]}
				</div>
			</div>
		</Link>
	);
};

export default MovieCard;
