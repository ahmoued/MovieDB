import { useState } from "react";
import MovieCard from "../components/MovieCard";
import '../css/Home.css'
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "john wick", release_date: "2024" },
    { id: 2, title: "Batman", release_date: "2018" },
    { id: 3, title: "The Matrix", release_date: "2000" },
    { id: 4, title: "Terminator", release_date: "1999" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}
export default Home;
