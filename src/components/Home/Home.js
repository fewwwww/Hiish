import './Home.css';
import Navbar from "../Navbar/Navbar";
import ContentList from "../ContentList/ContentList";
import Btmbar from "../Btmbar/Btmbar";
import logo from '../../static/hiish.svg';
import profile from '../../static/profile.jpg';
import plus from '../../static/plus.svg';
import search from '../../static/search.svg';

function Home() {
  return (
    <div className="flex w-screen h-screen">
        <Navbar logo={logo} profile={profile} plus={plus} search={search}/>
        <ContentList />
        <Btmbar />
    </div>
  );
}

export default Home;