import React, {useEffect, useState} from 'react';
import {CharacterInfo} from "./CharacterInfo";


const Character = ({character}) => {
    const allcharacters = character.characters;


    return (
        <div>
            {allcharacters.map(oneChar => <CharacterInfo oneChar={oneChar}/>)}
        </div>
    );
};

export {Character};