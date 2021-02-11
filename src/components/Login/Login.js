import Navbar from "../Navbar/Navbar";
import Btmbar from "../Btmbar/Btmbar";
import defaultprofile from '../../static/defaultprofile.svg';
import logo from "../../static/hiish.svg";
import React from "react";

function Login(props) {
    const changeRoute = () => {
        props.onRouteChange('home')
    }
    return (
    <div className="flex w-screen h-screen">
        <Navbar profile={defaultprofile}/>
        <div className="flex flex-col items-center" style={{width: "70%", marginLeft: '20%'}}>
            <img className="py-6" src={logo} />
            <div className="flex flex-col">
                <p className="px-6 my-6">Login</p>
                <p className="px-6 mb-6">Welcome to Hiish!(a fake wechat on browser) Hi!(ish)</p>
                <input className="border-2 p-3 m-3 w-full my-3" placeholder='type anything, not specifically the word anything' type="text"/>
                <input className="border-2 p-3 m-3 w-full my-3" placeholder='just set "password" as the password' type="password" />
            </div>
            <button onClick={changeRoute} className="border-2 p-5 m-5" type="button">submit</button>
        </div>
        <Btmbar />
    </div>
  );
}

export default Login;