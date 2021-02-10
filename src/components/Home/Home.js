import './Home.css';
import Navbar from "../Navbar/Navbar";
import ContentList from "../ContentList/ContentList";

function Home() {
  return (
    <div className="flex w-screen h-screen">
        <Navbar />
        <ContentList />
        <div className="bg-pink-50 flex flex-wrap flex-col justify-around shadow-lg" style={{width: "10%"}}>2</div>
    </div>
  );
}

export default Home;