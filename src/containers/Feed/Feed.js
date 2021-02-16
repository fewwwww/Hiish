import Navbar from "../../components/Navbar/Navbar";
import Btmbar from "../../components/Btmbar/Btmbar";
import logo from '../../static/hiish.svg';
import profile from '../../static/profile.jpg';
import plus from '../../static/plus.svg';
import search from '../../static/search.svg';
import React from 'react';
import FeedList from '../../components/FeedList/FeedList'

function Feed(props) {
    return (
        <div className="flex w-screen h-screen">
            <Navbar onRouteChange={props.onRouteChange} route={props.route} logo={logo} profile={profile} plus={plus} search={search}/>
            <FeedList onRouteChange={props.onRouteChange}/>
            <Btmbar onRouteChange={props.onRouteChange} route={props.route}/>
        </div>
    );
}

export default Feed;