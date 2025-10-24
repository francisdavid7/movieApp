const API_KEY = "7dd63e6c6dad3bc61ca1056ec4ee63a5";
const BASE_URL = `https://api.themoviedb.org/3`;

export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await res.json();
  return data.results;
};
