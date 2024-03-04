import React, {useEffect, useState} from 'react';

import {movieService} from "../services/movieService";
import {useParams} from "react-router-dom";
import {MovieDetail} from "./MovieDetail";

const MovieDetails = () => {
    const {movie_id} = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    useEffect(() => {
        movieService.getMoviesPagesbyId(movie_id).then(({data}) => setMovieDetails(data));
    }, [movie_id])


    return (
        <div>
            <MovieDetail movieDetails={movieDetails}/>
        </div>
    );
};

export {MovieDetails};