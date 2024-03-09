import React, {useEffect, useState} from 'react';
import {movieService} from "../../services/movieService";
import {useParams, useSearchParams} from "react-router-dom";
import {GenreDetailMovies} from "./GenreDetailMovies";
import './GenreDetailMovies.css'
import {number} from "joi";

const GenreDetails = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});

    const {id} = useParams();

    useEffect(() => {
        movieService.getChoosedGenre(id, query.get('page')).then(({data}) => setMovies(data.results),
        )
    }, [query.get('page'), id])


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


        <div className="movie-grid">
            <button onClick={prev}>PREV</button>
            <button onClick={next}>NEXT</button>
            {movies && movies.map((genreMovies, id) => (
                <GenreDetailMovies key={id} genreMovies={genreMovies}/>
            ))}
        </div>
    );
};

export {GenreDetails};