import React, {useEffect, useState} from 'react';
import {postService} from "../services/postService";
import {Episode} from "../components/Episode";
import {useSearchParams} from "react-router-dom";
import './episodes_main.css'
import {useDispatch, useSelector} from "react-redux";
import {RickAndMortyActions} from "../store/RickAndMortySlice";


const EpisodesPage = () => {
    // const [query, setQuery] = useSearchParams({page: '1'});
    // const [prevNext, setPrevNext] = useState({prev: null, next: null})

    const dispatch = useDispatch();
    const episodesInt = useSelector(state => state.episodes.episodesInt)
    const loading = useSelector(state => state.episodes.loading)


    useEffect(() => {
        dispatch(RickAndMortyActions.getAllEpisodes())
    }, [])
    console.log(episodesInt)

    return (
        <div id={'episodes_main'}>
            {loading ? <p>Loading...</p> : episodesInt.map((oneEp) => <Episode key={oneEp.id} oneEp={oneEp}/>)}
        </div>
    );
};

export {EpisodesPage};