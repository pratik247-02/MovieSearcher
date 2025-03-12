import React from 'react';

function ClickFav() {
  alert('Added to favorites!');
}

function MovieCard({ title, year, genre, rating, poster }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster || "https://via.placeholder.com/150"} alt="movie-pic" />
        <div className="movie-overlay">
          <button className="button-fav" onClick={ClickFav}>❤️</button>
        </div>
      </div>     
      <div className="movie-info">
        <h3>{title}</h3>
        <h4>{year}</h4>
        <p>{genre}</p>
        <p>{rating}/10</p>
      </div>
    </div>
  );
}

export default MovieCard;
