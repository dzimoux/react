import React from 'react';
import './Movie.css';
import './GenreDetailMovies.css'

const GenreDetailMovies = ({genreMovies}) => {
    const {poster_path, original_title} = genreMovies;
    return (
        <div className={"movie-card"}>
            <img
                className="movie-card-image"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title}
            />
            <div className="movie-card-title">{original_title}</div>
        </div>
    );
};

export {GenreDetailMovies};