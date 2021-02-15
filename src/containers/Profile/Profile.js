import Navbar from "../../components/Navbar/Navbar";
import Btmbar from "../../components/Btmbar/Btmbar";
import logo from '../../static/hiish.svg';
import profile from '../../static/profile.jpg';
import plus from '../../static/plus.svg';
import search from '../../static/search.svg';
import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile'

function Profile(props) {
    return (
        <div className="flex w-screen h-screen">
            <Navbar onRouteChange={props.onRouteChange} route={props.route} logo={logo} plus={plus} search={search}/>
            <UserProfile profile={profile}/>
            <Btmbar onRouteChange={props.onRouteChange} route={props.route}/>
        </div>
    );
}

export default Profile;