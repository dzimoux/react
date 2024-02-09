import React from 'react';
import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import axios from "axios";
import {axioService} from "../../services/axioService";
import {urls} from "../../constants/urls";
import PostDetails from "../Post-details/Post-details";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(()=>{
      axioService(urls.posts.base).then(value => value.data).then(value => setPosts(value))
    },[])
    const getCurrentPost = (post)=>{
       setPostDetails(post);
    }

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            <br/>

            {postDetails != null && <PostDetails postDetails={postDetails}/>}
        </div>

    );
};

export {Posts};