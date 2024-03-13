import React, {useEffect, useState} from 'react';
import {CharacterInfo} from "./CharacterInfo";


const Character = ({character}) => {
    const {characters} = character

    return (
        <div>
            {console.log(character.characters)}

            {characters && characters.map(oneChar => <CharacterInfo key={oneChar.id} oneChar={oneChar}/>)}

        </div>
    );
};

export {Character};