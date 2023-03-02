import React from "react";
import postsArray from './postshome.json'
import PostListItem from "./post-home-item";

const PostList = () => {
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostListItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};

export default PostList;