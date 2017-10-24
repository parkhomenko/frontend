import React from "react";
import PostRow from "./PostRow";

const PostList = ({posts}) => {
    return (
        <ul className="posts-content">
            {posts.map((post, index) =>
                <PostRow key={index} post={post}/>
            )}
        </ul>
    );
};

export default PostList;
