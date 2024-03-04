import React, {useEffect, useState} from 'react';
import {movieService} from "../services/movieService";
import {SearchResults} from "./SearchResults";
import './SearchBar.css'

const SearchBar = () => {
    const [searchInfo, setSearchInfo] = useState('');
    const [searchMovie, setSearchedMovie] = useState([]);


    const handleSearch = (e) => {
        e.preventDefault();

        setSearchInfo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Ваша логіка пошуку тут
        console.log("Пошук:", searchInfo);
        movieService.getSearchedMovies(searchInfo)
            .then(({data}) => setSearchedMovie(data))
            .catch(error => console.error('Помилка отримання фільмів:', error));

        setSearchInfo('')
    }


    console.log(searchMovie)

    return (
        <div className="search-bar">
            <div className="input_search_bar">
                <form onSubmit={handleSubmit}>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Your movie"
                        value={searchInfo}
                        onChange={handleSearch}
                    />
                    <button className="search-button" type="submit">Search</button>
                </form>
            </div>
            <SearchResults searchMovie={searchMovie}/>
        </div>
    );
};

export {SearchBar};

