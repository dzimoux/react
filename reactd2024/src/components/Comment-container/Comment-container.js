import React, {useEffect, useState} from 'react';
import {postService} from "../../services/Post-service";
import {Comments} from "../Comments/Comments";
import {CommentForm} from "../Comment-Form";

const CommentContainer = () => {
    const [comments, setComment]= useState([]);

    useEffect(()=>{
        postService.getAll.then(({data})=> setComment(data))
    },[])


    return (
        <div>
            <CommentForm setComment={setComment}/>
            <br/>
            <Comments comments={comments}/>

        </div>
    );
};

export { CommentContainer};