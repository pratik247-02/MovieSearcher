import React from 'react';
import '../css/MovieCard.css';
import {useMovieContext} from '../Context/MovieContext';


function MovieCard({ movie }) {
    // console.log(movie)
  const { isFav, addToFavs, removeFromFavs  } = useMovieContext();
  const fav = isFav(movie.id);

  function ClickFav(e) {
    e.preventDefault();
    const fav = isFav(movie.id);
    // console.log(fav)
    if(fav) {removeFromFavs(movie.id)}
    else {addToFavs(movie)}
    // console.log(fav)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-pic" />
        <div className="movie-overlay">
          <button className={`button-fav ${fav ? "active" : ""}`} onClick={ClickFav}>❤️</button>
        </div>
      </div>     
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <h4>{movie.release_date?.split("-")[0]}</h4>
        <p>{movie.overview}</p>
        <p>{movie.vote_average}/10</p>
      </div>
    </div>
  );
}

export default MovieCard;
