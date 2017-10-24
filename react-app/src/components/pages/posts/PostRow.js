import React from "react";

const PostRow = ({post}) => {
    return (
        <li>
            <p>
                <b>{post.title}</b>
                <span className="post-date">{post.pdate}</span>
            </p>
            {post.content}
        </li>
    );
};

export default PostRow;
