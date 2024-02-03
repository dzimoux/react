import React from 'react';


const Character = ({character}) => {
   const {name,surname,info,photo} = character;
    return (
        <div>
            <h1>{name}</h1> <br/> <h1>{surname}</h1>
            <br/>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Character};

