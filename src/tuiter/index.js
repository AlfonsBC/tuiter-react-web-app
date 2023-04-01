import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfileComponent from "./edit-profile";
import "./index.css";
import {Route, Routes} from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import homeTuitsReducer from "./tuits/home-tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
const store = configureStore(
{reducer: {who: whoReducer, 
           homeTuits: homeTuitsReducer, 
           profile: profileReducer,
           tuitsData: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
    <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>
            <Routes>
                <Route path="" element={<ExploreComponent/>}/>
                <Route path="home" element={<HomeComponent/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
                <Route path="profile" element={<ProfileComponent/>}/>
                <Route path="edit-profile" element={<EditProfileComponent/>}/>
            </Routes>
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
        </div>
    </div>
    </Provider>
    );
}

export default Tuiter;