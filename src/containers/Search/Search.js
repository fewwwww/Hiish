import Navbar from "../../components/Navbar/Navbar";
import Btmbar from "../../components/Btmbar/Btmbar";
import logo from '../../static/hiish.svg';
import profile from '../../static/profile.jpg';
import plus from '../../static/plus.svg';
import search from '../../static/search.svg';

function Search(props) {
    const changeRoute = () => {
        props.onRouteChange('search')
        console.log(111)
    }

    return (
        <div className="flex w-screen h-screen">
            <Navbar changeRoute={changeRoute} searchActivated={1} logo={logo} profile={profile} plus={plus} search={search}/>
            <div></div>
            <Btmbar />
        </div>
    );
}

export default Search;