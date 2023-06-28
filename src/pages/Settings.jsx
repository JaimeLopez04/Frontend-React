import Sidebar from "../Components/side-bar"
import TittleSettings from "../Components/TittleSettings"
import SearchBar from "../Components/SearchBar"
import SettingsCards from "../Components/SettingsCards"
import Player2 from "../Components/Player2"

const Settings = () => {
  return (
    <div className="flex flex-wrap">

    <div className="h-screen bg-back object-cover flex items-center">
        <Sidebar/>
    </div>

    {/* Contenido pagina */}
    {/* <div className="flex flex-wrap">
        <div className="right-96 relative">
            <TittleSettings className="absolute"/>
        </div>

        <div className="left-96 relative">
           <SearchBar className="absolute"/>
        </div>
    </div> */}

    {/* TITULO - BARRA DE BUSQUEDA */}
    <div className="fixed"> 
        <div className="grid grid-cols-2 gap-56 ml-96">
            <div className="col-span-1">
                <TittleSettings/>
            </div>
            <div className="col-span-1">
                <SearchBar/>
            </div>
        </div>
    </div>


    {/* CARDS AJUSTES */}
    <div className=""> 
        <div className="grid grid-cols-2 gap-8 ml-10 mt-28">
            <div className="col-span-1">
                <SettingsCards/>
            </div>
            <div className="col-span-1">
                <SettingsCards/>
            </div>
            <div className="col-span-1">
                <SettingsCards/>
            </div>
            <div className="col-span-1">
                <SettingsCards/>
            </div>
            <div className="col-span-1">
                <SettingsCards/>
            </div>
            <div className="col-span-1">
                <SettingsCards/>
            </div>
        </div>
    </div>


    {/* MUSIC PLAYER */}
    <div className="ml-56 mt-28">
        <Player2/>
    </div>


   
    
   

    


    

    </div>
    

    

            
  )
}

export default Settings
