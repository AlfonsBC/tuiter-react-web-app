import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray
    });// create the slice
    // name the reducer
    // initialize the reducer's state
    export default whoSlice.reducer;// export the reducer