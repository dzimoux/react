import React from 'react';
import '../Movie/Movie.css';
import './GenreDetailMovies.css'
import {useNavigate} from "react-router-dom";

const GenreDetailMovies = ({genreMovies}) => {
    const {id, poster_path, original_title} = genreMovies;
    const navigate = useNavigate();
    const getNavigate = () => {
        navigate(`/genre/movies/${id}`)
    }

    return (
        <div className={"movie-card"} onClick={getNavigate}>
            <img
                className="movie-card-image"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title}
            />
            <div className="movie-card-title">{original_title}
            </div>
        </div>
    );
};

export {GenreDetailMovies};