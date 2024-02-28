import React from 'react';
import './Episode.css';
import {useNavigate} from "react-router-dom";

const Episode = ({oneEp}) => {
    const {id, name, episode} = oneEp;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/character/${id}`); // Навігація до сторінки персонажа з параметром id
    };
    return (
        <div>
            <div className="episode" onClick={() => handleClick()}>
                <div>id - {id}</div>
                <div>name - {name}</div>
                <div>episode - {episode}</div>
            </div>
        </div>
    );
};

export {Episode};