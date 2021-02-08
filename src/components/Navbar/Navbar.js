import logo from './hiish.svg';
import profile from './profile.jpg';
import plus from './plus.svg';
import search from './search.svg';

function Navbar() {
  return (
    <div className="bg-pink-50 w-1/6 flex flex-wrap flex-col justify-around">
        <div>
            <img className="mx-auto rounded-3xl shadow-md object-scale-down" src={profile}/>
        </div>
        <div>
            <img className="mx-auto" src={logo}/>
        </div>
        <div>
            <div className="flex justify-evenly">
                <img className="w-auto" src={plus}/>
                <img className="w-auto" src={search}/>
              </div>
        </div>
    </div>
  );
}

export default Navbar;