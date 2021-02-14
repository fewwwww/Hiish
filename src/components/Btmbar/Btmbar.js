import chat from '../../static/chat.svg';
import contact from '../../static/contact.svg';
import feed from '../../static/feed.svg';
import './Btmbar.css'

function Btmbar(props) {
    const changeToContact = () => {
        props.onRouteChange('contact')
    }

    const changeToFeed = () => {
        props.onRouteChange('feed')
    }

    const changeToHome = () => {
        props.onRouteChange('home')
    }

    if (props.route==='feed'){
        return (
        <div className="bg-green-50 flex flex-wrap flex-col justify-around shadow-xl fixed h-full" style={{width: "10%", top: 0, right:0}}>
            <div onClick={changeToHome} className="chat cursor-pointer animate-pulse h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300">
                <img className="mx-auto w-16" src={chat}/>
            </div>
            <div onClick={changeToContact} className="contact cursor-pointer animate-pulse h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300">
                <img className="mx-auto w-16" src={contact}/>
            </div>
            <div className="feed cursor-pointer h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300 bg-yellow-50">
                <img className="mx-auto w-16" src={feed}/>
            </div>
        </div>
      );}
    if (props.route==='contact'){
        return (
        <div className="bg-green-50 flex flex-wrap flex-col justify-around shadow-xl fixed h-full" style={{width: "10%", top: 0, right:0}}>
            <div onClick={changeToHome} className="chat cursor-pointer animate-pulse h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300">
                <img className="mx-auto w-16" src={chat}/>
            </div>
            <div className="contact cursor-pointer h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300 bg-yellow-50">
                <img className="mx-auto w-16" src={contact}/>
            </div>
            <div onClick={changeToFeed} className="feed cursor-pointer animate-pulse h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300">
                <img className="mx-auto w-16" src={feed}/>
            </div>
        </div>
      );}
    if (props.route==='home'){
        return (
        <div className="bg-green-50 flex flex-wrap flex-col justify-around shadow-xl fixed h-full" style={{width: "10%", top: 0, right:0}}>
            <div className="chat cursor-pointer h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300 bg-yellow-50">
                <img className="mx-auto w-16" src={chat}/>
            </div>
            <div onClick={changeToContact} className="contact cursor-pointer animate-pulse h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300">
                <img className="mx-auto w-16" src={contact}/>
            </div>
            <div onClick={changeToFeed} className="feed cursor-pointer animate-pulse h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300">
                <img className="mx-auto w-16" src={feed}/>
            </div>
        </div>
      );}
    return (
        <div className="bg-green-50 flex flex-wrap flex-col justify-around shadow-xl fixed h-full" style={{width: "10%", top: 0, right:0}}>
            <div onClick={changeToHome} className="chat cursor-pointer h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300">
                <img className="mx-auto w-16" src={chat}/>
            </div>
            <div onClick={changeToContact} className="contact cursor-pointer h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300">
                <img className="mx-auto w-16" src={contact}/>
            </div>
            <div onClick={changeToFeed} className="feed cursor-pointer h-1/3 flex align-start shadow-inner hover:bg-yellow-50 delay-75 duration-300">
                <img className="mx-auto w-16" src={feed}/>
            </div>
        </div>
      );
}

export default Btmbar;