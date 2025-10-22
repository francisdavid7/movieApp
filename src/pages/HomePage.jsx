import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../services/config";
import "../css/Home.css";

const HomePage = () => {
  const [searchQuery, setSearhQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearhQuery("");
  };

  return (
    <div className="home">
      <title>Home | Movie App</title>
      <form onSubmit={handleSubmit} className="search-form">
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

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
