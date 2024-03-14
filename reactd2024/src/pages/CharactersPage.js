import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../services/postService";
import {Character} from "../components/Character";
import {useDispatch, useSelector} from "react-redux";
import {RickAndMortyActions} from "../store/RickAndMortySlice";
import {getCharByEpisode} from "../store/RickAndMortySlice";

const CharactersPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const charactersInt = useSelector(state => state.episodes)

    useEffect(() => {
        dispatch(RickAndMortyActions.getCharByEpisode(id))
    }, [id])

    return (
        <div>
            <Character character={charactersInt}/>
        </div>
    );
};

export {CharactersPage};