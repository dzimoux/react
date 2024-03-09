import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import './Movie.css';

const Movie = ({movie}) => {
    const {id, original_title, poster_path} = movie;
    const navigate = useNavigate();
    const getNavigate = () => {
        navigate(`/movie/${id}`)
    }

    return (
        <div className="movie-card" onClick={getNavigate}>
            {poster_path && (
                <img
                    className="movie-card-image"
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={original_title}
                />
            )}
            <div className="movie-card-title">{original_title}</div>
        </div>
    );
};

export {Movie};