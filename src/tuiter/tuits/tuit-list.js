import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
    const postsArray = useSelector(state => state.homeTuits)

    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <TuitItem
                        key={post._id} post={post}/>)
            }
        </ul>

    );
};

export default TuitsList;