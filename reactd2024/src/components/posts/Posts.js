import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


const Posts = ({post}) => {
    const {userId, title} = post;
    const navigator = useNavigate();
    return (
        <div>
            <div>title: {title}</div>
            <button onClick={() => navigator(userId.toString())}>See all post</button>
        </div>
    );
};

export {Posts};