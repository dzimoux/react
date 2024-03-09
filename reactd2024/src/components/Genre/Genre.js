import React from 'react';
import {useNavigate} from "react-router-dom";
import './Genre.css'

const Genre = ({genre}) => {
    const {id, name} = genre;
    const navigator = useNavigate();
    const getNavigate = () => {
        navigator(`/genre/${id}`)
    }
    return (
        <div className="genre-item" onClick={getNavigate}>
            <p>{name}</p>
        </div>
    );
};

export {Genre};