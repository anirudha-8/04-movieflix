import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const baseURL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
	try {
		const response = await axios.get(`${baseURL}/trending/movie/week`, {
			params: {
				api_key: apiKey,
			},
		});
		return response.data.results;
	} catch (error) {
		console.error("Error fetching trending movies:", error.message);
		throw error;
	}
};
