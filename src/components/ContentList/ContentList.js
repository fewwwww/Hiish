import friendRequest from '../static/friendRequest.svg'
import './ContentList.css';
import Datas from './Datas'
import React, { useState, useEffect } from 'react';

function ContentList() {

    const loadFriends = () => {
        const friends = Datas()
        const friendsList = friends.map(friend =>
            <div className="friendMessage flex flex-row h-1/6 py-2.5 border-b border-gray-100">
                <div className="left h-full flex justify-end rounded-2xl">
                    <text
                        className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl">{friend.notification}</text>
                    <img className="px-2 absolute" src={window.location.origin + friend.imgurl}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-around">
                    <div className="top flex flex-row justify-between">
                        <div className="text-3xl font-semibold">{friend.name}</div>
                        <div>10:10</div>
                    </div>
                    <div className="btm text-lg">{friend.message}</div>
                </div>
            </div>)
        return friendsList
    }
    return (
        <div style={{width: "70%", marginLeft: '20%'}}>
            <div className="friendRequest flex flex-row h-1/6 py-2.5 border-b border-gray-100">
                <div className="left h-full flex justify-end rounded-2xl">
                    <text className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl">1</text>
                    <img className="w-auto h-full rounded-2xl px-2" src={friendRequest}/>
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