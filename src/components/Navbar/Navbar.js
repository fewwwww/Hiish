function Navbar(props) {
  return (
    <div className="bg-pink-50 flex flex-wrap flex-col justify-around shadow-xl fixed h-full" style={{width: "20%", top: 0, left: 0}}>
        <div>
            <img className="mx-auto w-48 rounded-3xl shadow-md border-2 border-red-100" src={props.profile}/>
        </div>
        <div>
            <img className="mx-auto w-64" src={props.logo}/>
        </div>
        <div className="flex justify-evenly">
            <div className="mx-auto object-scale-down">
                <img src={props.plus}/>
            </div>
            <div className="mx-auto object-scale-down">
                <img src={props.search}/>
            </div>
        </div>
    </div>
  );
}

export default Navbar;