import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './profile.css';

const ProfileInfo = () => {
    const profile = useSelector(state => state.profile);
    return (
        <>
            <div className="row">
                <div className="col-1 mt-2">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-11">
                <div className="fw-bold">
                    <h5> {profile.firstName} {profile.lastName}</h5>
                </div>
                <div className="wd-tweet-count">{profile.tuits} Tuits</div>
                </div>
            </div>
            <div className="mt-2">
                <img src={profile.bannerPicture} className="wd-cover-image" alt=""></img>
            </div>
            <div>
                <img src={profile.profilePicture} className="wd-profile-image rounded-circle ms-3" alt=""></img>
                <div className="float-end mt-2">
                    <Link to="/tuiter/edit-profile">
                        <button className="btn btn-outline-secondary rounded-pill">Edit Profile</button>
                    </Link>
                </div>
            </div>
            <div className="wd-profile-details ms-3">
                <div className="fw-bold">
                <h5> {profile.firstName} {profile.lastName} </h5>
                </div>
                <div className="text-secondary wd-count-details">@{profile.handle}</div>
                <div className="mt-2">{profile.bio}</div>
                <div>
                    <ul className="wd-count-details nav mt-2 text-secondary">
                        <li className="nav-item me-3">
                        <i className="bi bi-geo-alt"></i>
                        <span> {profile.location} </span>
                        </li>
                        <li className="nav-item me-3">
                        <i className="bi bi-balloon"></i>
                        <span> Born {profile.dateOfBirth} </span>
                        </li>
                        <li className="nav-item">
                        <i className="bi bi-calendar3"></i>
                        <span> Joined {profile.dateJoined} </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="nav mt-2 text-dark">
                        <li className="nav-item me-3">
                    <span className="wd-count-details fw-bold">{profile.followingCount} </span>
                    <span className="wd-count-details">Following</span>
                        </li>
                        <li className="nav-item me-3">
                    <span className="wd-count-details fw-bold">{profile.followersCount} </span>
                    <span className="wd-count-details">Followers</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default ProfileInfo;