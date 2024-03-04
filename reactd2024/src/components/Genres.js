import React, {useEffect, useState} from 'react';
import {movieService} from "../services/movieService";
import {Genre} from "./Genre";

const Genres = () => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        movieService.getGenreList().then(({data}) => setGenres(data.genres))
    }, [])
    return (
        <div>
            {console.log(genres)}
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};