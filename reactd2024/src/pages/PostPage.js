import React, {useEffect, useState} from 'react';

import {postService} from "../services/postService";
import {Outlet, useParams} from "react-router-dom";
import {Posts} from "../components/posts/Posts";


const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        postService.getAllbyUserID(id).then(({data}) => setPosts(data))
    }, [id])

    return (
        <div>
            <h3>Привіт, це пости</h3>
            {posts.map(post => <Posts key={post.id} post={post}/>)}
            <Outlet/>
        </div>
    );
};

export {PostPage};