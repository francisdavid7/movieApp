import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/config";
import "../css/Home.css";

const HomePage = () => {
  const [searchQuery, setSearhQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Error Loading Movies!");
      } finally {
        setIsloading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsloading(true);

    try {
      const searchedMovies = await searchMovies(searchQuery);
      setMovies(searchedMovies);
    } catch (err) {
      console.log(err);
      setError("An error occurred while searching for movies.");
    } finally {
      setIsloading(false);
    }

    // setSearhQuery("");
  };

  return (
    <div className="home">
      <title>Home | Movie App</title>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearhQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error">{error}</div>}
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
