import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={'./todos'}>Todos</Link>;
            <Link to={'./albums'}>Albums</Link>
            <Link to={'./comments'}>Comments</Link>
        </div>
    );
};

export {Header};