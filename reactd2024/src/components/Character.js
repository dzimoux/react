import React, {useEffect, useState} from 'react';
import {CharacterInfo} from "./CharacterInfo";


const Character = ({character}) => {
    const {charactersInt} = character
    const {characters} = charactersInt

    return (
        <div>
            {characters && characters.map(oneChar => <CharacterInfo key={oneChar.id} oneChar={oneChar}/>)}
        </div>
    );
};

export {Character};