import React from "react";
import "../css/Favs.css";
import { useMovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favorites() {
  const { favs } = useMovieContext();
  // console.log(favs)

  if (favs) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favs.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;