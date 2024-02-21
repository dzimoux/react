import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/postService";
import {commentService} from "../../services/postService";
import {Comment} from "./Comment";

const Comments = () => {
    const {userId} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getCommentbyPostId(userId).then(({data}) => setComments(data))
    }, [userId])

    return (
        <div>
            <h3>Коментарі:</h3>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};