import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nyt.png",
    };// create an object that represents the currently
    // logged in user which contains profile information
    // such as username, their avatar logo, and handle.
    // Later this will come from users login in

const templateTuit = {
    ...currentUser,
    "topic": "",
    "time": "just now",
    "liked": false,
    "ncomments": 0,
    "nretuits": 0,
    "nlikes": 0,
}

const tuitsSlice = createSlice({
name: 'tuits',
initialState: tuits,
reducers: {
    createTuit(state, action) {
        state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
        })
        },
    
    deleteTuit(state, action) {
        const index = state
        .findIndex(tuit =>
        tuit._id === action.payload);
        state.splice(index, 1);
        }

    
}
});
export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;