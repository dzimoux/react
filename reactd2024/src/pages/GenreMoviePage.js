import React, {useEffect, useState} from 'react';

import {movieService} from "../services/movieService";
import {useParams} from "react-router-dom";
import {MovieDetail} from "../components/MovieDetail/MovieDetail";
import '../components/SearchBar/SearchBar.css'

const GenreMoviePage = () => {
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    useEffect(() => {
        movieService.getMoviesPagesbyId(id).then(({data}) => setMovieDetails(data));
    }, [id])


    return (
        <MovieDetail movieDetails={movieDetails}/>
    );
};

export {GenreMoviePage};