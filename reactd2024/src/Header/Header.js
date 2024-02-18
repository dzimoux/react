import React from 'react';
import {Link} from "react-router-dom";
import css from './header-style.css';

const Header = () => {
    return (
        <div>
            <Link to={'./todos'} className={'headerDiv'}>Todos</Link>;
            <Link to={'./albums'} className={'headerDiv'}>Albums</Link>
            <Link to={'./comments'} className={'headerDiv'}>Comments</Link>
        </div>
    );
};

export {Header};