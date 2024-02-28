import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../services/postService";
import {Character} from "../components/Character";

const CharactersPage = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        postService.episodes.getEpisodebyId(id).then(({data}) => setCharacter(data))
    }, [id])

    return (
        <div>
            <Character character={character}/>
        </div>
    );
};

export {CharactersPage};