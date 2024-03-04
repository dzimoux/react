import React from 'react';
import {PreparedResult} from "./PreparedResult";
import './SearchResults.css'


const SearchResults = ({searchMovie}) => {
    const {results} = searchMovie;


    console.log(results)

    return (
        <div className="searched-movie-container">
            <div>
                {results && results.map(result => (
                    <div className={'searched-movie-name'} key={result.id}>{result.name}</div>
                ))}
            </div>
        </div>
    );
};

export {SearchResults};