import './App.css';
import Home from './containers/Home/Home.js';
import Login from "./containers/Login/Login.js";
import Search from "./containers/Search/Search";
import './tailwind.output.css';
import React, { useState, useEffect } from 'react';

function App() {
    const [route, setRoute] = useState('login')
    const onRouteChange = (route) => {
        setRoute(route)
    }

    if (route === 'login'){
    return (
        <div>
            <Login onRouteChange={onRouteChange}/>
        </div>
    )}else if (route === 'search'){
    return (
        <div>
            <Search onRouteChange={onRouteChange}/>
        </div>
    )} else if (route === 'home'){
    return (
        <div>
            <Home />
        </div>
    )}
}

export default App;
