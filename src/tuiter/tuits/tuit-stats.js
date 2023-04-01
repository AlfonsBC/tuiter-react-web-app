import React from "react";
import {useDispatch} from "react-redux";
import {likeToggle} from "./home-tuits-reducer";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    return (
        <ul className="nav mt-2 nav-fill text-secondary">
            <li className="nav-item">
                <i className="bi bi-chat fa-sm me-2"></i>{post.ncomments}
            </li>
            <li className="nav-item">
                <i className="bi bi-repeat fa-sm me-2"></i>{post.nretuits}
            </li>
            <li className="nav-item">
                {!post.liked &&
                <i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    nlikes: post.nlikes + 1,
                    liked: true
                }))} className="bi bi-heart fa-sm me-2"></i>
                }
                {post.liked &&
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...post,
                            nlikes: post.nlikes - 1,
                            liked: false
                        }))} className="bi bi-heart-fill fa-sm me-2" style={{'color': 'red'}}></i>}
                {post.nlikes}
            </li>

            <li className="nav-item">
                    {!post.unliked &&
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...post,
                            nunlikes: post.nunlikes + 1,
                            unliked: true
                        }))} className="bi bi-hand-thumbs-down fa-sm me-2"></i>}
                    {post.unliked &&
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...post,
                            nunlikes: post.nunlikes - 1,
                            unliked: false
                        }))} className="bi bi-hand-thumbs-down-fill fa-sm me-2" style={{'color': 'blue'}}></i>}
                    {post.nunlikes}
                </li>
            


            <li className="nav-item">
                <i className="bi bi-share fa-sm me-2"></i>
            </li>
        </ul>
    )
}

export default TuitStats;