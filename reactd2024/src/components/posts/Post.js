import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {userId, id, title, body} = post;
    const navigate = useNavigate();

    return (
        <div>
            <div>userid- {userId}</div>
            <div>id- {id}</div>
            <div>title- {title}</div>
            <div>body- {body}</div>
            <button onClick={() => {
                navigate(userId.toString())
            }}>See comments
            </button>
        </div>
    );
};

export {Post};