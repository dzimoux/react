import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {postService} from "../services/postService";
import {Post} from "../components/posts/Post";


const PostDetailsPage = () => {
    const [allPost, setAllPost] = useState([]);
    const {userId} = useParams();


    useEffect(() => {
        postService.getAllbyUserID(userId).then(({data}) => setAllPost(data))
    }, [userId])
    return (
        <div>
            <h2>Знову привіт, це повні пости</h2>
            {allPost.map(post => <Post key={post.id} post={post}/>)}
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};