import './App.css';
import Home from './components/Home/Home.js';
import Login from "./components/Login/Login.js";
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
    )}else{
    return (
        <div>
            <Home/>
        </div>
    )}
}

export default App;
