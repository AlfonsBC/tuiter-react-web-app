import { createSlice } from "@reduxjs/toolkit";
// import tuits from './tuits.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk,findTuitsThunk } from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

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
initialState, // same as "initialState": initialState
extraReducers: {
    [findTuitsThunk.pending]:
    (state) => {
    state.loading = true
    state.tuits = []
    },
    [findTuitsThunk.fulfilled]:    // we get response and request is fulfilled
    (state, { payload }) => {
    state.loading = false
    state.tuits = payload
    },
    [findTuitsThunk.rejected]:  // if request times out or responds with error
    (state, action) => {
    state.loading = false       // reset loading flag
    state.error = action.error  // report error
    },

    // delete tuit thunk
    [deleteTuitThunk.fulfilled] : 
    (state, {payload}) => {
        state.loading = false
        state.tuits = state.tuits
            .filter(t => t._id !== payload)
    },
    // creating tuit
    [createTuitThunk.fulfilled]:
    (state, { payload }) => {
    state.loading = false
    state.tuits.push(payload)
    },

    // updating tuit
    [updateTuitThunk.fulfilled]:
(state, { payload }) => {
state.loading = false
const tuitNdx = state.tuits
.findIndex((t) => t._id === payload._id)
state.tuits[tuitNdx] = {
...state.tuits[tuitNdx],
...payload
}
}
},
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



        // Not using old reducers anymore
}
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;