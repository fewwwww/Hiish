import './Home.css';
import Navbar from "../../components/Navbar/Navbar";
import ContentList from "../../components/ContentList/ContentList";
import Btmbar from "../../components/Btmbar/Btmbar";
import logo from '../../static/hiish.svg';
import profile from '../../static/profile.jpg';
import plus from '../../static/plus.svg';
import search from '../../static/search.svg';

function Home(props) {
  return (
    <div className="flex w-screen h-screen">
        <Navbar onRouteChange={props.onRouteChange} route={props.route} logo={logo} profile={profile} plus={plus} search={search}/>
        <ContentList />
        <Btmbar />
    </div>
  );
}

export default Home;