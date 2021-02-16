import back from "../ContentList/back.png";
import profile from "../../static/defaultprofile.svg";
import profile1 from "../../static/profile.jpg";
import profile2 from "./profile2.JPG"
import React from "react";
import like from "./like.png"
import comment from "./comment.png"
import feed from "./feed.png"
import feed1 from "./feed1.JPG"

function FeedList(props) {
    const changeToHome = () => {
        props.onRouteChange('home')
    }
    return (
        <div className="flex flex-col items-center" style={{width: "70%", marginLeft: '20%', marginRight: '10%'}}>
                <div onClick={changeToHome} className="flex flex-row border-2 border-indigo-50 justify-between h-16 w-full bg-indigo-100 shadow-2xl">
                    <img className="p-2" src={back}></img>
                    <div className="font-mono font-semibold text-lg text-center flex justify-center items-center">
                        <div>朋友圈</div>
                    </div>
                    <div></div>
                </div>

                <div className="w-full" style={{height: '80rem'}}>
                    <div className="bg-gray-100 w-full flex flex-row items-start justify-between px-10 py-10" style={{height: '50rem'}}>
                        <div className="flex flex-row items-start">
                            <div className="flex flex-col px-3">
                                <img className="p-5 h-52 rounded-full" src={profile2} />
                                <div className="flex flex-col items-center py-10">
                                    <div className="flex flex-col items-center py-5">
                                        <img src={like} />
                                        <div>64832个朋友赞了</div>
                                    </div>
                                    <div className="flex flex-col items-center py-5">
                                        <img src={comment} />
                                        <div>8098个朋友评论了</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg p-5 rounded-b-3xl rounded-r-3xl my-5">
                                <div className="p-5 font-black text-lg"> ✉️ 邀请秋田小姐共进午餐。</div>
                                <img className="p-5" src={feed1} style={{height: '35rem'}}/>
                            </div>
                        </div>
                        <div className="my-5 mx-auto">
                            <div className="font-medium py-3">王思聪：真·不怪刘阳</div>
                            <div className="font-medium py-3">网友A：🍵🍵🍵</div>
                            <div className="font-medium py-3">网友C：官方的回答了她的废话</div>
                            <div className="font-medium py-3">网友D：这样的女孩子谁不喜欢</div>
                        </div>
                    </div>
                </div>

                <div className="w-full" style={{height: '80rem'}}>
                    <div className="bg-gray-100 w-full flex flex-row items-start justify-between px-10 py-10" style={{height: '50rem'}}>
                        <div className="flex flex-row items-start">
                            <div className="flex flex-col px-3">
                                <img className="p-5 h-52 rounded-full" src={profile} />
                                <div className="flex flex-col items-center py-10">
                                    <div className="flex flex-col items-center py-5">
                                        <img src={like} />
                                        <div>18个朋友赞了</div>
                                    </div>
                                    <div className="flex flex-col items-center py-5">
                                        <img src={comment} />
                                        <div>2个朋友评论了</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg p-5 rounded-b-3xl rounded-r-3xl my-5">
                                <div className="p-5 font-black text-lg">我的新头像牛吗</div>
                                <img className="p-5" src={profile} style={{height: '35rem'}}/>
                            </div>
                        </div>
                        <div className="my-5 mx-auto">
                            <div className="font-medium py-3">abc：太美丽啦</div>
                            <div className="font-medium py-3">这是名字：是挺像的</div>
                        </div>
                    </div>
                </div>

                <div className="w-full" style={{height: '80rem'}}>
                    <div className="bg-gray-100 w-full flex flex-row items-start justify-between px-10 py-10" style={{height: '50rem'}}>
                        <div className="flex flex-row items-start">
                            <div className="flex flex-col px-3">
                                <img className="p-5 h-52 rounded-full" src={profile1} />
                                <div className="flex flex-col items-center py-10">
                                    <div className="flex flex-col items-center py-5">
                                        <img src={like} />
                                        <div>0个朋友赞了</div>
                                    </div>
                                    <div className="flex flex-col items-center py-5">
                                        <img src={comment} />
                                        <div>4个朋友评论了</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg p-5 rounded-b-3xl rounded-r-3xl my-5">
                                <div className="p-5 font-black text-lg">新做的前端小项目</div>
                                <img className="p-5" src={feed} style={{height: '35rem'}}/>
                            </div>
                        </div>
                        <div className="my-5 mx-auto">
                            <div className="font-medium py-3">同学A：好</div>
                            <div className="font-medium py-3">同学B：厉害</div>
                            <div className="font-medium py-3">同学C：可以借钱吗</div>
                            <div className="font-medium py-3">同学D：哦</div>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default FeedList;