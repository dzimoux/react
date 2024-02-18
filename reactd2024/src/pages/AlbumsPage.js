import React, {useEffect, useState} from 'react';
import {PostService} from "../services/PostService";
import {Album} from "./Album";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        PostService.getAlbums().then(({data}) => setAlbums(data))
    }, [])
    return (
        <div>
            {albums.map((album) => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {AlbumsPage};