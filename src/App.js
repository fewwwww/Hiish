import './App.css';
import Home from './containers/Home/Home.js';
import Login from "./containers/Login/Login.js";
import Search from "./containers/Search/Search";
import './tailwind.output.css';
import React, { useState } from 'react';
import NewFriend from "./containers/NewFriend/NewFriend";
import Contact from "./containers/Contact/Contact";
import Feed from "./containers/Feed/Feed";
import Profile from "./containers/Profile/Profile"

function App() {
    const [route, setRoute] = useState('login')
    const onRouteChange = (route) => {
        setRoute(route)
        console.log(route)
    }


    if (route === 'login'){
    return (
        <div>
            <Login onRouteChange={onRouteChange} route={route}/>
        </div>
    )}
    if (route === 'home'){
    return (
        <div>
            <Home onRouteChange={onRouteChange} route={route}/>
        </div>
    )}
    if (route === 'search'){
    return (
        <div>
            <Search onRouteChange={onRouteChange} route={route}/>
        </div>
    )}
    if (route === 'newfriend'){
    return (
        <div>
            <NewFriend onRouteChange={onRouteChange} route={route}/>
        </div>
    )}
    if (route === 'contact'){
    return (
        <div>
            <Contact onRouteChange={onRouteChange} route={route}/>
        </div>
    )}
    if (route === 'feed'){
    return (
        <div>
            <Feed onRouteChange={onRouteChange} route={route}/>
        </div>
    )}
    if (route === 'profile'){
    return (
        <div>
            <Profile onRouteChange={onRouteChange} route={route}/>
        </div>
    )}
}

export default App;
