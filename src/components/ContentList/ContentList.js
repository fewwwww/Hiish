import profile from '../Navbar/profile.jpg';
import './ContentList.css';
import pic from './profile1.jpg'
import plus from '../Navbar/plus.svg';

function ContentList() {
    return (
        <div className="p-2" style={{width: "70%"}}>
            <div className="friendRequest flex flex-row h-1/6 py-2">
                <div className="left h-full">
                    <text className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl">1</text>
                    <img className="w-auto h-full rounded-2xl" src={plus}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-between">
                    <div className="top flex flex-row justify-between">
                        <div className="text-xl font-semibold">好友请求</div>
                        <div>07:00</div>
                    </div>
                    <div className="btm">有新的好友请求了</div>
                </div>
            </div>
            <div className="friendMessage flex flex-row h-1/6 py-2">
                <div className="left h-full">
                    <text className="notification bg-red-400 w-auto px-2 flex justify-center rounded-xl">1111</text>
                    <img className="w-auto h-full rounded-2xl" src={pic}/>
                </div>
                <div className="right w-4/5 flex flex-col justify-between">
                    <div className="top flex flex-row justify-between">
                        <div className="text-xl font-semibold">Zack</div>
                        <div>10:10</div>
                    </div>
                    <div className="btm">你好，我真的h-40h-40h-40h-40h-40h-40h-40h-40h-40很想吃饭你好，我真的很想吃饭你好，h-full w-30h-full w-30h-full w-30h-full w-30h-full w-30我真的很想吃饭你好，我真的很想吃饭你好，我真的很想吃饭你好，我真的很想吃饭你好，我真的很想吃饭你好，我真的很想吃饭你好，我真的很想吃饭你好，我真的很想吃饭你好，我真的很想吃饭你好，我真的很想吃饭你好，我真的很想吃饭你好，我真的很想吃饭</div>
                </div>
            </div>
        </div>
    );
}

export default ContentList;