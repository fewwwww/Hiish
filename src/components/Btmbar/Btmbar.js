import chat from '../../static/chat.svg';
import contact from '../../static/contact.svg';
import feed from '../../static/feed.svg';
import './Btmbar.css'

function Btmbar() {
  return (
    <div className="bg-green-50 flex flex-wrap flex-col justify-around shadow-xl fixed h-full" style={{width: "10%", top: 0, right:0}}>
        <div className="chat h-1/3 flex align-start shadow-inner">
            <img className="mx-auto w-16" src={chat}/>
        </div>
        <div className="contact h-1/3 flex align-start shadow-inner">
            <img className="mx-auto w-16" src={contact}/>
        </div>
        <div className="feed h-1/3 flex align-start shadow-inner">
            <img className="mx-auto w-16" src={feed}/>
        </div>
    </div>
  );
}

export default Btmbar;