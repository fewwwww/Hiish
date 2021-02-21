import friendRequest from '../../static/friendRequest.svg'
import './ContentList.css';
import Datas from './Datas'
import React, { useState } from 'react';
import time from '../../functions/time'
import back from './back.png'
// import profile from '../../static/defaultprofile.svg'
// import profile1 from '../../static/profile.jpg'
import audio from './audio.png'
import emoji from './emoji.png'
import more from './more.png'
import profile from '../img/profile.jpg'
import profile1 from '../img/profile1.jpg'
import profile2 from '../img/profile2.JPG'
import profile3 from '../img/profile3.JPG'
import profile4 from '../img/profile4.JPG'
import profile5 from '../img/profile5.JPG'

function ContentList() {
    const [route, setRoute] = useState('content')
    const onRouteChange = (route) => {
        setRoute(route)
        console.log(route)
    }

    const loadRequests = () => {
        onRouteChange('request')
    }

    const loadContents = () => {
        onRouteChange('content')
    }

    const loadChat = () => {
        onRouteChange('chat')
    }

    const changeTime = (t) => {
        return time(t)
    }

    if (route === 'request') {
        return (
            <div className="flex flex-col items-center" style={{width: "70%", marginLeft: '20%', marginRight: '10%'}}>
                <div onClick={loadContents} className="cursor-pointer flex flex-row justify-between h-16 w-full bg-indigo-50 shadow-md">
                    <img className="p-2" src={back}></img>
                    <div className="font-mono font-semibold text-lg text-center flex justify-center items-center">
                        <div>Friend Requests</div>
                    </div>
                    <div></div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="h-72 w-full relative my-2">
                        <div className="flex flex-col w-4/5 mx-auto">
                            <div className="flex flex-row justify-around items-end h-40 w-full">
                                <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-red-200 delay-75 bg-red-100 px-5 py-4 rounded-full shadow-sm" type="button">ignore</button>
                                <div className="h-2/3 flex flex-col items-center">
                                    <img className="h-3/4 border-2 rounded-full" src={profile} />
                                    <div className="mx-auto font-mono font-semibold text-lg">这是用户名称</div>
                                </div>
                                <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-green-200 delay-75 bg-green-100 px-5 py-4 rounded-full shadow-sm" type="button">accept</button>
                            </div>
                            <div className="request bg-purple-50 rounded-3xl p-10 py-20 absolute shadow-md">留言：你好，熟人介绍。</div>
                        </div>
                    </div>
                    <div className="h-72 w-full relative my-2">
                        <div className="flex flex-col w-4/5 mx-auto">
                            <div className="flex flex-row justify-around items-end h-40 w-full">
                                <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-red-200 delay-75 bg-red-100 px-5 py-4 rounded-full shadow-sm" type="button">ignore</button>
                                <div className="h-2/3 flex flex-col items-center">
                                    <img className="h-3/4 border-2 rounded-full" src={profile1} />
                                    <div className="mx-auto font-mono font-semibold text-lg">幼儿园同学</div>
                                </div>
                                <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-green-200 delay-75 bg-green-100 px-5 py-4 rounded-full shadow-sm" type="button">accept</button>
                            </div>
                            <div className="request bg-purple-50 rounded-3xl p-10 py-20 absolute shadow-md">留言：好兄弟，好久不见，借我点钱。</div>
                        </div>
                    </div>
                    <div className="h-72 w-full relative my-2">
                        <div className="flex flex-col w-4/5 mx-auto">
                            <div className="flex flex-row justify-around items-end h-40 w-full">
                                <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-red-200 delay-75 bg-red-100 px-5 py-4 rounded-full shadow-sm" type="button">ignore</button>
                                <div className="h-2/3 flex flex-col items-center">
                                    <img className="h-3/4 border-2 rounded-full" src={profile} />
                                    <div className="mx-auto font-mono font-semibold text-lg">张一二三四</div>
                                </div>
                                <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-green-200 delay-75 bg-green-100 px-5 py-4 rounded-full shadow-sm" type="button">accept</button>
                            </div>
                            <div className="request bg-purple-50 rounded-3xl p-10 py-20 absolute shadow-md">留言：你好，久仰大名，希望有机会合作。</div>
                        </div>
                    </div>
                    <div className="h-72 w-full relative my-2">
                        <div className="flex flex-col w-4/5 mx-auto">
                            <div className="flex flex-row justify-around items-end h-40 w-full">
                                <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-red-200 delay-75 bg-red-100 px-5 py-4 rounded-full shadow-sm" type="button">ignore</button>
                                <div className="h-2/3 flex flex-col items-center">
                                    <img className="h-3/4 border-2 rounded-full" src={profile1} />
                                    <div className="mx-auto font-mono font-semibold text-lg">儿子和女儿</div>
                                </div>
                                <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-green-200 delay-75 bg-green-100 px-5 py-4 rounded-full shadow-sm" type="button">accept</button>
                            </div>
                            <div className="request bg-purple-50 rounded-3xl p-10 py-20 absolute shadow-md">留言：爹。</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (route === 'chat') {
        return (
            <div className="flex flex-col items-center" style={{width: "70%", marginLeft: '20%', marginRight: '10%'}}>
                <div onClick={loadContents} className="cursor-pointer flex flex-row justify-between h-16 w-full bg-indigo-50 shadow-md">
                    <img className="p-2" src={back}></img>
                    <div className="font-mono font-semibold text-lg text-center flex justify-center items-center">
                        <div>这是聊天对象的名字</div>
                    </div>
                    <div></div>
                </div>
                <div className="w-full">
                    <div className="bg-gray-100 w-full h-40 flex flex-row items-center px-2">
                        <img className="p-5 h-32" src={profile} />
                        <div className="bg-white shadow-sm p-5 rounded-b-full rounded-r-full">你好。我是你的小学同学XXX，好久不见。</div>
                    </div>
                    <div className="bg-gray-100 w-full h-40 flex flex-row items-center px-2">
                        <img className="p-5 h-32 rounded-3xl" src={profile} />
                        <div className="bg-white shadow-sm p-5 rounded-b-full rounded-r-full">你最近在忙什么呢？</div>
                    </div>
                    <div className="bg-gray-100 w-full h-40 flex flex-row justify-end items-center px-2">
                        <div className="bg-red-100 shadow-sm p-5 rounded-l-full rounded-b-full">我啊，我学前端...</div>
                        <img className="p-5 h-32 rounded-3xl" src={profile1} />
                    </div>
                    <div className="bg-gray-100 w-full h-40 flex flex-row justify-end items-center px-2">
                        <div className="bg-red-100 shadow-sm p-5 rounded-l-full rounded-b-full">你呢</div>
                        <img className="p-5 h-32 rounded-3xl" src={profile1} />
                    </div>
                    <div className="bg-gray-100 w-full h-40 flex flex-row items-center px-2">
                        <img className="p-5 h-32 rounded-3xl" src={profile} />
                        <div className="bg-white shadow-sm p-5 rounded-b-full rounded-r-full">好兄弟，看在小学同学的份上，借我50</div>
                    </div>
                    <div className="bg-gray-100 w-full h-40 flex flex-row items-center px-2">
                        <img className="p-5 h-32 rounded-3xl" src={profile} />
                        <div className="bg-white shadow-sm p-5 rounded-b-full rounded-r-full">你学计算机啊，掉头发的</div>
                    </div>
                    <div className="bg-gray-100 w-full h-40 flex flex-row items-center px-2">
                        <img className="p-5 h-32 rounded-3xl" src={profile} />
                        <div className="bg-white shadow-sm p-5 rounded-b-full rounded-r-full">好兄弟，看在小学同学的份上，借我50</div>
                    </div>
                    <div className="bg-gray-100 w-full h-40 flex flex-row items-center px-2">
                        <img className="p-5 h-32 rounded-3xl" src={profile} />
                        <div className="bg-white shadow-sm p-5 rounded-b-full rounded-r-full">好兄弟，看在小学同学的份上，借我50</div>
                    </div>
                    <div className="h-40"></div>
                </div>
                <div className="fixed h-1/6 shadow-inner bg-indigo-50 flex flex-row items-center justify-evenly" style={{width: "70%", bottom:'0px'}}>
                    <img className="px-5" src={audio} />
                    <input type="text" className="rounded-xl px-5 h-1/4 w-2/3" />
                    <img className='px-5' src={emoji} />
                    <img className='px-5' src={more} />
                </div>
            </div>
        )
    }

    // const loadFriends = () => {
    //     const friends = Datas()
    //     const friendsList = friends.map(friend =>
    //         <div onClick={loadChat} key={friend.id} className="friendMessage cursor-pointer flex flex-row h-40 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300">
    //             <div className="left h-full w-1/12 flex justify-end">
    //                 <p
    //                     className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl text-white font-semibold">{friend.notification}</p>
    //                 <img className="profile rounded-2xl invisible 2xl:visible" src={window.location.origin + friend.imgurl}/>
    //             </div>
    //             <div className="right w-4/5 flex flex-col justify-around">
    //                 <div className="top flex flex-row justify-between">
    //                     <div className="text-3xl font-semibold">{friend.name}</div>
    //                     <div>{changeTime(friend.time)}</div>
    //                 </div>
    //                 <div className="btm text-lg">{friend.message}</div>
    //             </div>
    //         </div>)
    //     return friendsList
    // }

    return (
        <div style={{width: "70%", marginLeft: '20%'}}>
            <div onClick={loadRequests} className="friendRequest cursor-pointer flex flex-row h-40 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300">
                <div className="left h-full w-1/12 flex justify-end">
                    <p className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl text-white font-semibold">1</p>
                    <img className="profile rounded-2xl invisible 2xl:visible" src={friendRequest}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-around">
                    <div className="top flex flex-row justify-between">
                        <div className="text-3xl font-semibold">好友请求</div>
                        <div>07:00</div>
                    </div>
                    <div className="btm text-lg">有新的好友请求了</div>
                </div>
            </div>
            {/*{loadFriends()}*/}
            <div onClick={loadChat} className="friendMessage cursor-pointer flex flex-row h-40 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300">
                <div className="left h-full w-1/12 flex justify-end">
                    <p
                        className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl text-white font-semibold">2</p>
                    <img className="profile rounded-2xl invisible 2xl:visible" src={profile2}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-around">
                    <div className="top flex flex-row justify-between">
                        <div className="text-3xl font-semibold">集团领导X</div>
                        <div>{changeTime(new Date())}</div>
                    </div>
                    <div className="btm text-lg">明天去财务结一下这个月的工资</div>
                </div>
            </div>
            <div onClick={loadChat} className="friendMessage cursor-pointer flex flex-row h-40 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300">
                <div className="left h-full w-1/12 flex justify-end">
                    <p
                        className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl text-white font-semibold">5</p>
                    <img className="profile rounded-2xl invisible 2xl:visible" src={profile3}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-around">
                    <div className="top flex flex-row justify-between">
                        <div className="text-3xl font-semibold">小学同学X</div>
                        <div>{changeTime(new Date())}</div>
                    </div>
                    <div className="btm text-lg">好兄弟，借我50。</div>
                </div>
            </div>
            <div onClick={loadChat} className="friendMessage cursor-pointer flex flex-row h-40 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300">
                <div className="left h-full w-1/12 flex justify-end">
                    <p
                        className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl text-white font-semibold">1</p>
                    <img className="profile rounded-2xl invisible 2xl:visible" src={profile5}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-around">
                    <div className="top flex flex-row justify-between">
                        <div className="text-3xl font-semibold">快递小哥</div>
                        <div>{changeTime(new Date())}</div>
                    </div>
                    <div className="btm text-lg">你好，你有一个快递到了，请问你现在在家吗，方便来楼下拿一下吗？？？？？？？？？？？？？？？</div>
                </div>
            </div>
            <div onClick={loadChat} className="friendMessage cursor-pointer flex flex-row h-40 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300">
                <div className="left h-full w-1/12 flex justify-end">
                    <p
                        className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl text-white font-semibold">{99}</p>
                    <img className="profile rounded-2xl invisible 2xl:visible" src={profile4}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-around">
                    <div className="top flex flex-row justify-between">
                        <div className="text-3xl font-semibold">人肉表情包发送机器</div>
                        <div>{changeTime(new Date())}</div>
                    </div>
                    <div className="btm text-lg">[动画表情]</div>
                </div>
            </div>
            <div onClick={loadChat} className="friendMessage cursor-pointer flex flex-row h-40 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300">
                <div className="left h-full w-1/12 flex justify-end">
                    <p
                        className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl text-white font-semibold">{1}</p>
                    <img className="profile rounded-2xl invisible 2xl:visible" src={profile}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-around">
                    <div className="top flex flex-row justify-between">
                        <div className="text-3xl font-semibold">数学老师</div>
                        <div>{changeTime(new Date())}</div>
                    </div>
                    <div className="btm text-lg">666+666=666</div>
                </div>
            </div>
            <div onClick={loadChat} className="friendMessage cursor-pointer flex flex-row h-40 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300">
                <div className="left h-full w-1/12 flex justify-end">
                    <p
                        className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl text-white font-semibold">{1}</p>
                    <img className="profile rounded-2xl invisible 2xl:visible" src={profile1}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-around">
                    <div className="top flex flex-row justify-between">
                        <div className="text-3xl font-semibold">初中同学</div>
                        <div>{changeTime(new Date())}</div>
                    </div>
                    <div className="btm text-lg">听说有人借钱。</div>
                </div>
            </div>

        </div>
    );
}

export default ContentList;