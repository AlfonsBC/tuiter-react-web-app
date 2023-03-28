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
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "ncomments": 0,
    "nretuits": 0,
    "nlikes": 0,
}

const tuitsSlice = createSlice({
name: 'tuits',
initialState: tuits,
reducers: {
    deleteTuit(state, action) {
        const index = state
        .findIndex(tuit =>
        tuit._id === action.payload);
        state.splice(index, 1);
        },

    createTuit(state, action) {
    state.unshift({
    ...action.payload,
    ...templateTuit,
    _id: (new Date()).getTime(),
    // add createTuit reducer function which appends
    // the new tuit in the payload at the beginning of the
    // array of tuits contained in the state. Also copy
    // all fields from templateTuit and initialize
    // the unique identifier with a timestamp})
    })
    }
}
});
export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;