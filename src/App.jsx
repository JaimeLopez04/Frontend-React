import React from "react"
import Sidebar from "./Components/side-bar"
// import SearchBar from "./Components/SearchBar"
// import MusicPlayer from "./Components/MusicPlayer" EL FEO ******************
//************** Estilos del music player *****************
// import Player1 from "./Components/Player1";
import "@madzadev/audio-player/dist/index.css";
import TittleSettings from "./Components/TittleSettings"
import SearchBar from "./Components/SearchBar"
import Login from "./auth/Login"
import Registro from "./auth/Registro";
import SettingsCards from "./Components/SettingsCards";
import GenresCards from "./Components/GenresCards";
import Settings from "./pages/Settings";
// import Route
import Player1 from "./Components/Player1";
import Player2 from "./Components/Player2";
import Player3 from "./Components/Player3";


function App() {
    const [user, setUser] = React.useState(null);
    const [auth, setAuthState] = React.useState(null);

    return (
        <>
          <div className="bg-black flex flex-wrap " >

            {/* <Login/> */}

            {/* <Settings/> */}

            <Player3/>


            {/* Barra Lateral */}
            {/* <div className=" h-screen bg-back object-cover flex items-center">
              <Sidebar/>
            </div> */}

            {/* <MusicPlayer/> */}

            {/* <Player1/> */}

            {/* <div className="w-auto flex flex-row ml-5">
              <TittleSettings/>
              <SearchBar/>
            </div> */}


           {/* <div className="">
              <SettingsCards/>
              <GenresCards/>
           </div> */}
  

            {/* <Registro/> */}

          </div>
        </>
    )


  // React.useEffect(() => {
  //   const unSubscribeAuth = onAuthStateChanged(auth,
  //     async authenticatedUser => {
  //       if(authenticatedUser) {
  //         setUser(authenticatedUser.email)
  //         setAuthState('home');
  //       } else {
  //         setUser(null);
  //         setAuthState('login')
  //       }
  //     })

  //     return unSubscribeAuth;
  // }, [user])

  // if(authState === null) return <div className='font-bold text-center text-5xl'>cargando...</div>
  // if(authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser}/>
  // if(authState === 'register') return <Registro setAuthState={setAuthState} setUser={setUser}/> 
  // if(user) return <Home user={user} setAuthState={setAuthState} setUser={setUser}/>
    
}

export default App
