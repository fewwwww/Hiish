import './Home.css';
import Navbar from "../Navbar/Navbar";
import ContentList from "../ContentList/ContentList";
import Btmbar from "../Btmbar/Btmbar";

function Home() {
  return (
    <div className="flex w-screen h-screen">
        <Navbar />
        <ContentList />
        <Btmbar />
    </div>
  );
}

export default Home;