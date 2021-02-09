import logo from './hiish.svg';
import profile from './profile.jpg';
import plus from './plus.svg';
import search from './search.svg';

function Navbar() {
  return (
    <div className="bg-pink-50 w-1/6 flex flex-wrap flex-col justify-around shadow-lg">
        <div>
            <img className="mx-auto w-48 rounded-3xl shadow-md border-2 border-red-100" src={profile}/>
        </div>
        <div>
            <img className="mx-auto w-64" src={logo}/>
        </div>
        <div className="flex justify-evenly">
            <div className="mx-auto object-scale-down">
                <img src={plus}/>
            </div>
            <div className="mx-auto object-scale-down">
                <img src={search}/>
            </div>
        </div>
    </div>
  );
}

export default Navbar;