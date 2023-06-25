import Sidebar from "./Components/side-bar"
// import SearchBar from "./Components/SearchBar"
// import MusicPlayer from "./Components/MusicPlayer" EL FEO ******************
//************** Estilos del music player *****************
// import Player1 from "./Components/Player1";
// import "@madzadev/audio-player/dist/index.css";
import TittleSettings from "./Components/TittleSettings"


function App() {

  return (
    <>
    <div className="bg-black flex flex-row" >

      {/* Barra Lateral */}
      <div className="w-full h-screen bg-back object-cover flex items-center">
        <Sidebar/>
      </div>

      {/* Barra de busqueda */}
      {/* <SearchBar/> */}


      {/* <div>
        <MusicPlayer/>
      </div> */}

      {/* <Player1/> */}

      <TittleSettings/>




    </div>
    </>
  )
}

export default App
