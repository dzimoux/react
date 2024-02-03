import React from 'react';

const Characterrickmorti = (props) => {
    return (
        <div>
<h1>{props.name}</h1>
            <h2>{props.status}</h2>
            <p>{props.species}</p>
            <h2>{props.gender}</h2>
            <img src={props.image} alt={props.name}/>
        </div>
    );
};

export {Characterrickmorti};