import './Home.css';
import logo from '../Navbar/hiish.svg';
import plus from '../Navbar/plus.svg';
import search from '../Navbar/search.svg';
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div className="flex w-screen h-screen">
        <Navbar/>
        <div className="w-5/6">2</div>
    </div>
  );
}

export default Home;