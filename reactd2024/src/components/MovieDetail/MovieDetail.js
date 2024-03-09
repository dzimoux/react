import React from 'react';
import './MovieDetail.css'


const MovieDetail = ({movieDetails}) => {
    if (!movieDetails) {
        return <div>Loading...Please wait</div>;
    }

    const {
        original_title,
        poster_path,
        budget,
        genres,
        overview,
        production_countries,
        release_date,
        runtime,
        spoken_languages,
        vote_average
    } = movieDetails;

    return (
        <div className="movie-details-container">
            <div className="movie-image">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title}/>
            </div>
            <div className="movie-info">

                <h2>{original_title}</h2>
                <p className="movie-overview">{overview}</p>
                <div className="movie-genres">
                    <h3>Genres:</h3>
                    {genres.map(genre => (
                        <span key={genre.id}>{genre.name}</span>
                    ))}
                </div>
                <div className="production-countries">
                    <h3>Production Countries:</h3>
                    {production_countries.map(country => (
                        <div key={country.iso_3166_1}>{country.name}</div>
                    ))}
                </div>
                <div className="release-date"><strong>Release Date:</strong> {release_date}</div>
                <div className="runtime"><strong>Runtime:</strong> {runtime} minutes</div>
                <div className="spoken-languages">
                    <h3>Spoken Languages:</h3>
                    {spoken_languages.map(language => (
                        <div key={language.iso_639_1}>{language.name}</div>
                    ))}
                </div>
                <div className="vote-average"><strong>Vote Average:</strong> {vote_average}</div>
            </div>
        </div>
    );
};

export {MovieDetail};