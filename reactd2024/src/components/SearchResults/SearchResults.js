import React from 'react';
import {PreparedResult} from "../PreparedResult/PreparedResult";
import './SearchResults.css'
import {SearchResult} from "../SearchResult/SearchResult";
import '../SearchBar/SearchBar.css'


const SearchResults = ({searchMovie}) => {
    const {results} = searchMovie;


    console.log(results)

    return (
        <div className="searched-movie-container">
            <div className={'searched-movie-name'}>
                {results && results.map(result => (
                    <SearchResult key={result.id} result={result}/>

                    // <div className={'searched-movie-name'} key={result.id}>{result.name}</div>
                ))}
            </div>
        </div>
    );
};

export {SearchResults};