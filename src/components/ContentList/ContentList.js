import friendRequest from '../../static/friendRequest.svg'
import './ContentList.css';
import Datas from './Datas'
import React, { useState, useEffect } from 'react';
import time from '../../functions/time'

function ContentList() {
    const changeTime = (t) => {
        return time(t)
    }
    const loadFriends = () => {
        const friends = Datas()
        const friendsList = friends.map(friend =>
            <div key={friend.id} className="friendMessage flex flex-row h-1/6 py-6 border-b border-gray-100">
                <div className="left h-full w-1/12 flex justify-end">
                    <p
                        className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl text-white font-semibold">{friend.notification}</p>
                    <img className="profile rounded-2xl invisible xl:visible" src={window.location.origin + friend.imgurl}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-around">
                    <div className="top flex flex-row justify-between">
                        <div className="text-3xl font-semibold">{friend.name}</div>
                        <div>{changeTime(friend.time)}</div>
                    </div>
                    <div className="btm text-lg">{friend.message}</div>
                </div>
            </div>)
        return friendsList
    }
    return (
        <div style={{width: "70%", marginLeft: '20%'}}>
            <div className="friendRequest flex flex-row h-1/6 py-6 border-b border-gray-100">
                <div className="left h-full w-1/12 flex justify-end">
                    <p className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl text-white font-semibold">1</p>
                    <img className="profile rounded-2xl invisible xl:visible" src={friendRequest}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-around">
                    <div className="top flex flex-row justify-between">
                        <div className="text-3xl font-semibold">好友请求</div>
                        <div>07:00</div>
                    </div>
                    <div className="btm text-lg">有新的好友请求了</div>
                </div>
            </div>
            {loadFriends()}
        </div>
    );
}

export default ContentList;