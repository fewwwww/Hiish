function Navbar(props) {
    const changeToSearch = () => {
            props.onRouteChange('search')
    }

    const changeToNewfriend = () => {
            props.onRouteChange('newfriend')
    }

    const changeToHome = () => {
            props.onRouteChange('home')
    }

    if (props.route === 'search'){
    return (
            <div className="bg-pink-50 flex flex-wrap flex-col justify-around shadow-xl fixed h-full" style={{width: "20%", top: 0, left: 0}}>
                <div>
                    <img className="mx-auto w-48 rounded-3xl shadow-md border-2 border-red-100" src={props.profile}/>
                </div>
                <div onClick={changeToHome} className="cursor-pointer">
                    <img className="animate-pulse mx-auto w-64" src={props.logo}/>
                </div>
                <div className="flex justify-evenly">
                    <div onClick={changeToNewfriend} className="cursor-pointer mx-auto object-scale-down">
                        <img src={props.plus}/>
                    </div>
                </div>
            </div>
    );}
    if (props.route === 'newfriend'){
    return (
            <div className="bg-pink-50 flex flex-wrap flex-col justify-around shadow-xl fixed h-full" style={{width: "20%", top: 0, left: 0}}>
                <div>
                    <img className="mx-auto w-48 rounded-3xl shadow-md border-2 border-red-100" src={props.profile}/>
                </div>
                <div onClick={changeToHome} className="cursor-pointer">
                    <img className="animate-pulse mx-auto w-64" src={props.logo}/>
                </div>
                <div className="flex justify-evenly">
                    <div onClick={changeToSearch} className="cursor-pointer mx-auto object-scale-down">
                        <img src={props.search}/>
                    </div>
                </div>
            </div>
    );}
    else {
    return (
            <div className="bg-pink-50 flex flex-wrap flex-col justify-around shadow-xl fixed h-full" style={{width: "20%", top: 0, left: 0}}>
                <div>
                    <img className="mx-auto w-48 rounded-3xl shadow-md border-2 border-red-100" src={props.profile}/>
                </div>
                <div onClick={changeToHome} className="cursor-pointer">
                    <img className="mx-auto w-64" src={props.logo}/>
                </div>
                <div className="flex justify-evenly">
                    <div onClick={changeToNewfriend} className="cursor-pointer mx-auto object-scale-down">
                        <img src={props.plus}/>
                    </div>
                    <div onClick={changeToSearch} className="cursor-pointer mx-auto object-scale-down">
                        <img src={props.search}/>
                    </div>
                </div>
            </div>
    );
    }

}

export default Navbar;