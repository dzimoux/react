import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {movieService} from "../services/movieService";
import {Movie} from "./Movie";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    useEffect(() => {
        movieService.getMoviesPages(query.get('page')).then(({data}) => setMovies(data.results),
        )
    }, [query.get('page')])

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next = () => {
        setQuery(next => {
            next.set('page', (+next.get('page') + 1).toString())
            return next
        })
    }

    return (
        <div>
            <button disabled={query.get('page') === '1'} onClick={prev}>Prev</button>
            <button disabled={query.get('page') >= '500'} onClick={next}>Next</button>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};