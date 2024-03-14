import React, {useEffect, useState} from 'react';
import {CharacterDetails} from "./CharacterDetails";
import axios from "axios";
import {useDispatch} from "react-redux";

const CharacterInfo = ({oneChar}) => {
    const [oneCharacter, setOneCharacter] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(oneChar)
            .then(({data}) => setOneCharacter(data))
            .catch(error => console.error(error));
    }, [oneChar]);

    return (
        <div>
            <CharacterDetails charDetails={oneCharacter}/>
        </div>
    );
};

export {CharacterInfo};