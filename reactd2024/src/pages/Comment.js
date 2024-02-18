import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, name, email, body} = comment;
    const navigate = useNavigate()
    return (
        <div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button onClick={() => navigate('posts', {state: {ID: postId}})}>Get posts of current comment</button>
        </div>
    );
};

export {Comment};