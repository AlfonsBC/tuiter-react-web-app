import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => 
    {
        const {pathname} = useLocation();
        const paths = pathname.split('/')
        const active = paths[2];
    

    return (
        <div className="list-group">
                <a href="/tuiter" className="list-group-item">Tuiter</a>
                <Link to="/" className="list-group-item">
                    Labs
                </Link>
                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-house-fill"></i></div>
                        <div className="col d-none d-lg-block">Home</div>
                    </div>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' || active === '' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-hash"></i></div>
                        <div className="col d-none d-lg-block">Explore</div>
                    </div>
                </Link>
                <a href= "/" className={`list-group-item ${active === 'notifications' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-bell-fill"></i></div>
                        <div className="col d-none d-lg-block">Notifications</div>
                    </div>
                </a>
                <a href="/" className={`list-group-item ${active === 'messages' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-envelope-fill"></i></div>
                        <div className="col d-none d-lg-block">Messages</div>
                    </div>
                </a>
                <a href="/" className={`list-group-item ${active === 'bookmarks' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-bookmark-fill"></i></div>
                        <div className="col d-none d-lg-block">Bookmarks</div>
                    </div>
                </a>
                <a href="/" className={`list-group-item ${active === 'lists' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-list"></i></div>
                        <div className="col d-none d-lg-block">Lists</div>
                    </div>
                </a>
                <a href="/" className={`list-group-item ${active === 'profile' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-person-fill"></i></div>
                        <div className="col d-none d-lg-block">Profile</div>
                    </div>
                </a>
                <a href="/" className={`list-group-item ${active === 'more' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-three-dots"></i></div>
                        <div className="col d-none d-lg-block">More</div>
                    </div>
                </a>
            </div>
    )
};
export default NavigationSidebar;