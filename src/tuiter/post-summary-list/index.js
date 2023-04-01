import React from "react";
//import postsArray from './posts.json'
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map( (post) => (
                    <div>
                    <PostSummaryItem
                    post={post} key={post._id} /> 
                    </div>
                    ))
            }
        </ul>
    );
};

export default PostSummaryList;