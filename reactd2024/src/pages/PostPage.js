import React, {useEffect, useState} from 'react';
import {Post} from "../components/posts/Posts";
import {postService} from "../services/postService";
import {useParams} from "react-router-dom";


const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        postService.getAllbyUserID(id).then(({data}) => setPosts(data))
    }, [id])

    return (
        <div>
            Привіт, це пости
            {posts && <Post/>}
        </div>
    );
};

export {PostPage};