import React from 'react';

const PostDetails = ({postDetails}) => {
    const {id,title,body} = postDetails;
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default PostDetails;