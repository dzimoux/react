import React, {useEffect, useState} from 'react';
import {postService} from "../services/postService";
import {Episode} from "../components/Episode";
import {useSearchParams} from "react-router-dom";
import './episodes_main.css'

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})

    useEffect(() => {
        postService.episodes.getAllEpisode(query.get('page')).then(({data}) => setEpisodes(data.results), setPrevNext());

    }, [])
    console.log(episodes)

    return (
        <div id={'episodes_main'}>
            {episodes.map((oneEp) => <Episode key={oneEp.id} oneEp={oneEp}/>)}
        </div>
    );
};

export {EpisodesPage};