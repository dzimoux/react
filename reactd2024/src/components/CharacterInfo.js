import React, {useEffect, useState} from 'react';

import {CharacterDetails} from "./CharacterDetails";
import {postService} from "../services/postService";

const CharacterInfo = ({oneChar}) => {
    const {id} = oneChar;
    const [charDetails, setCharDetails] = useState([]);


    useEffect(() => {
        postService.characters.getCharacterbyId(id).then(({data}) => setCharDetails(data))
    }, [])


    return (
        <div>
            <CharacterDetails charDetails={charDetails}/>
        </div>
    );
};

export {CharacterInfo};