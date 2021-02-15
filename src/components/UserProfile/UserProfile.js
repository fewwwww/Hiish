import './UserProfile.css'
import React from "react";

function UserProfile(props) {
    return(
        <div style={{width: "70%", marginLeft: '20%', marginRight:'10%'}}>
            <div className="h-full w-full">
                <div className="bg">
                <div className="inside flex flex-col items-center">
                        <img src={props.profile} className="w-1/2 rounded-3xl shadow-xl" />
                        <div className="pt-5 pb-15 font-mono text-4xl font-semibold">msfew</div>
                        <div className="px-5 py-10 my-auto bg-indigo-50 rounded-3xl text-lg font-mono font-light w-3/4 flex flex-row justify-between">
                            <div className="description">这是我的签名，我的签名。</div>
                            <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-red-200 delay-75 px-5 py-1 bg-red-100 rounded-3xl shadow-md" type="button">edit</button>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;