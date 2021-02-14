import React from "react";
import Datas from "../ContentList/Datas";
import Groups from "../SearchList/Groups";

function SearchList() {
    const friendOrNot = (id) => {
        if (id === 1){
            return true
        }else{
            return false
        }
    }
    const loadSearchFriend = () => {
        const search = Datas()
        const searched = search.map(friend => {
            if (friendOrNot(friend.id)){
                return(
                <div key={friend.id} className="friendMessage cursor-pointer flex flex-row h-1/6 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300 text-xl">
                    <div className="left h-full w-1/12 flex justify-end">
                        <img className="profile rounded-2xl invisible xl:visible" src={window.location.origin + friend.imgurl}/>
                    </div>
                    <div className="right w-4/5 flex flex-row items-center justify-between">
                        <div className="text-3xl font-semibold">{friend.name}</div>
                        <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-red-200 delay-75 bg-indigo-100 px-3 py-2 m-3 rounded-3xl shadow-md" type="button">say hii</button>
                    </div>
                </div>)
            } else {
                return(
                <div key={friend.id} className="friendMessage cursor-pointer flex flex-row h-1/6 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300 text-xl">
                    <div className="left h-full w-1/12 flex justify-end">
                        <img className="profile rounded-2xl invisible xl:visible" src={window.location.origin + friend.imgurl}/>
                    </div>
                    <div className="right w-4/5 flex flex-row items-center justify-between">
                        <div className="text-3xl font-semibold">{friend.name}</div>
                        <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-red-200 delay-75 bg-yellow-100 px-3 py-2 m-3 rounded-3xl shadow-md" type="button">connect</button>
                    </div>
                </div>)
            }
            }
        )
        return searched
    }
    const loadSearchGroup = () => {
        const search = Groups()
        const searched = search.map(group => {
                return(
                <div key={group.id} className="friendMessage cursor-pointer flex flex-row h-1/6 py-6 border-b border-gray-100 hover:bg-indigo-50 delay-75 duration-300 text-xl">
                    <div className="left h-full w-1/12 flex justify-end">
                        <img className="profile rounded-2xl invisible xl:visible" src={window.location.origin + group.imgurl}/>
                    </div>
                    <div className="right w-4/5 flex flex-row items-center justify-between">
                        <div className="text-3xl font-semibold">{group.name}</div>
                        <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-red-200 delay-75 bg-indigo-100 px-3 py-2 m-3 rounded-3xl shadow-md" type="button">say hii</button>
                    </div>
                </div>)
            }
        )
        return searched
    }

    return (
        <div className="flex flex-col items-center" style={{width: "70%", marginLeft: '20%', marginTop: '5%'}}>
            <div className="w-auto">
                <input className="shadow-inner border-2 rounded-2xl border-indigo-100 my-1 py-3 md:w-96" placeholder='         search...        ' type="text"/>
                <button className="transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-red-200 delay-75 bg-red-100 p-3 m-3 rounded-3xl shadow-md" type="button">submit</button>
            </div>
            <div className="p-5 mx-2 w-full font-black font-mono text-4xl">
                People
                {loadSearchFriend()}
            </div>
            <div className="p-5 mx-2 w-full font-black font-mono text-4xl">
                Groups
                {loadSearchGroup()}
            </div>
        </div>
    );
}

export default SearchList;