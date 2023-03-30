import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './editprofile.css';
import {updateProfile} from "../reducers/profile-reducer";


const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    const [person, setperson] = useState(profile);
    const bioChange =(event) =>{
        const bioValue =event.target.value;
        const newPerson ={
            ...person,
            bio: bioValue
        };
        setperson(newPerson)
    }
    const nameChange=(event) =>{
        const firstName = event.target.value.split()[0]
        const lastName = event.target.value.split()[1]
        const newPerson ={
            ...person,
            firstName: firstName,
            lastName: lastName,
        };
        setperson(newPerson)
    }
    const locationChange=(event) =>{
        const location = event.target.value
        const newPerson ={
            ...person,
            location: location,
        };
        setperson(newPerson)
    }
    const webChange=(event) =>{
        const website = event.target.value
        const newPerson ={
            ...person,
            website: website,
        };
        setperson(newPerson)
    }
    const dispatch = useDispatch();
    const updatePersonHandler = () => {
        dispatch(updateProfile(person))
    }
    return(<>
                <div>
                <div className="d-flex">
                    <Link to="/tuiter/profile">
                        <i className= "bi bi-x me-2" style={{fontSize: "1.5em"}}></i>
                    </Link>
                    <div className="w-100" style={{fontSize:"22px"}}><b>Edit Profile</b> </div>
                    <Link  className="float-right" to="/tuiter/profile">
                        <botton className="  btn btn-sm btn-dark
                               rounded-pill  me-3 m-2"
                                onClick={() => updatePersonHandler()}>
                            Save </botton>
                    </Link>
                </div>
            </div>
            <div>
                <div className="profile-image-container">
                    <img src={`${profile.bannerPicture}`} width={250} alt="Profile avatar" className="edit-profile-banner"></img>
                    <img src={`${profile.profilePicture}`} alt="Profile banner" className="edit-profile-avarter"></img>

                </div>
                <br/>
                <br/>
                <br/>

                <div className="border-1">
                    <label for = "name-input" style={{position:"relative",top:"25px",left:"14px"}}>Name:</label>
                    <textarea id="name-input" placeholder={profile.firstName +" " + profile.lastName}
                              className="form-control pt-4" rows="1" onChange={nameChange}>
                    </textarea>
                </div>
                <div className="border-1">
                    <label htmlFor="bio-input" style={{position: "relative", top: "25px", left: "14px"}}>Bio:</label>
                    <textarea id="bio-input" placeholder={profile.bio}
                              className="form-control pt-4" rows="3" onChange={bioChange}>
                    </textarea>
                </div>
                <div className="border-1">
                    <label htmlFor="location-input" style={{position: "relative", top: "25px", left: "14px"}}>Location:</label>
                    <textarea id="location-input" placeholder={profile.location}
                              className="form-control pt-4" rows="1" onChange={locationChange}>
                    </textarea>
                </div>
                <div className="border-1">
                    <label htmlFor="web-input" style={{position: "relative", top: "25px", left: "14px"}}>Website:</label>
                    <textarea id="web-input" placeholder={profile.website}
                              className="form-control pt-4" rows="1" onChange={webChange}>
                    </textarea>
                </div>   
                </div>
        </>
    )
}
export default EditProfileComponent;