import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const Movie = ({movie}) => {
    const {id, original_title, poster_path} = movie;
    const navigate = useNavigate();

    return (
        <div onClick={() => {
            navigate(id.toString())
        }}>
            {movie.poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            )}
            <div>{original_title}</div>
        </div>
    );
};

export {Movie};