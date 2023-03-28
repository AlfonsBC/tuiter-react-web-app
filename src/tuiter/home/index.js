import React from "react";
import PostList from "../post-list";
import TuitsList from "../tuits/tuit-list"
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <PostList/>
            <WhatsHappening/>
            <TuitsList/>

        </>
    );
};
export default HomeComponent;