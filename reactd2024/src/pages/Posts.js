import React, {useEffect, useState} from 'react';
import {Post} from "./Post";
import {useLocation} from "react-router-dom";
import {PostService} from "../services/PostService";

const Posts = () => {
    const {state: {ID}} = useLocation();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        PostService.getPostById(ID).then(({data}) => setPosts(data))
    }, [ID])

    return (
        <div>

            {posts.map(post => <Post key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};