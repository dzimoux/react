import React, {useEffect, useState} from 'react';
import {movieService} from "../../services/movieService";
import {SearchResultDetails} from "./SearchResultDetails";
import '../SearchBar/SearchBar.css'

const SearchResult = ({result}) => {

    const [movie, setMovie] = useState({});
    const {id, name} = result;


    useEffect(() => {
        movieService.getMoviesPagesbyId(id).then(({data}) => setMovie(data)).catch(error => console.error(error))
    }, [id])


    return (
        <div>

            {movie.original_title === name && (<SearchResultDetails key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchResult};