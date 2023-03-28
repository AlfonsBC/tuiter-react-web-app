import {createSlice} from "@reduxjs/toolkit";
import homeTuitsArray from "./posts-home.json"

const currentUser = {
    "userName": "Vsauce Science",
    "handle": "@sauce_science",
    "avatarIcon": "sause.png"
}

const templateTuit = {
    ...currentUser,
    "topic": "Science",
    "time": "2h",
    "ncomments": 0,
    "nretuits": 0,
    "nlikes": 0,
    "liked": false
}

const homeTuitsSlice = createSlice({
    name: 'home-tuits',
    initialState: homeTuitsArray,
    reducers: {
        likeToggle(state, action) {
            const post = state.findIndex((post) => post._id === action.payload._id)
            if (state[post].liked) {
                state[post].liked = false;
                state[post].nlikes -= 1;
            }
            else {
                state[post].liked = true;
                state[post].nlikes += 1;
            }
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1)
        }
    }
});

export const {likeToggle,createTuit, deleteTuit} = homeTuitsSlice.actions
export default homeTuitsSlice.reducer;