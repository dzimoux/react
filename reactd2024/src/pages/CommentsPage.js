import React, {useEffect, useState} from 'react';
import {PostService} from "../services/PostService";
import {Comment} from "./Comment";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        PostService.getComments().then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
            <Outlet/>
        </div>
    );
};

export {CommentsPage};