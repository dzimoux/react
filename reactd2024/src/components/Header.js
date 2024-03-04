import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/movies" className="header-link">Movies</Link>
            <Link to="/genre/movie/list" className="header-link">Genres</Link>
            <Link to="/search/movie" className="header-link">Search Your Movie</Link>
            {/* Додайте інші кнопки навігації за потреби */}
        </div>
    );
};

export {Header};
