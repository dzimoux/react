import React, {useEffect, useState} from 'react';
import {movieService} from "../services/movieService";
import {useParams, useSearchParams} from "react-router-dom";
import {GenreDetailMovies} from "./GenreDetailMovies";
import './GenreDetailMovies.css'

const GenreDetails = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        movieService.getMoviesPages(query.get('page')).then(({data}) => setMovies(data.results),
        )
    }, [query.get('page')])

    const {id} = useParams();


    return (
        <div className="movie-grid">
            {movies && movies.map((genreMovies, index) => (
                <GenreDetailMovies key={index} genreMovies={genreMovies}/>
            ))}
        </div>
    );
};

export {GenreDetails};