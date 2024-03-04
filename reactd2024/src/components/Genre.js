import React from 'react';
import {useNavigate} from "react-router-dom";
import './Genre.css'

const Genre = ({genre}) => {
    const {id, name} = genre;
    const navigator = useNavigate();
    return (
        <div className="genre-item" onClick={() => navigator(`/genre/${id}`)}>
            <p>{name}</p>
        </div>
    );
};

export {Genre};