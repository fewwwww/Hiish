import './App.css';
import Home from './containers/Home/Home.js';
import Login from "./containers/Login/Login.js";
import Search from "./containers/Search/Search";
import './tailwind.output.css';
import React, { useState } from 'react';

function App() {
    const [route, setRoute] = useState('login')
    const onRouteChange = (route) => {
        setRoute(route)
        console.log(route)
    }


    if (route === 'login'){
    return (
        <div>
            <Login onRouteChange={onRouteChange}/>
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
}

export default App;
