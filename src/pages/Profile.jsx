import Sidebar from "../Components/side-bar"
import SearchBar from "../Components/SearchBar"
// import SettingsCards from "../Components/SettingsCards"
import Player3 from "../Components/Player3"
import TittleProfile from "../Components/tittleProfile"
import ChangeName from "../Components/ChangeName"
import ChangePhoto from "../Components/ChangePhoto"

const Profile = () => {
  return (
    <div className="flex flex-wrap">

    <div className="h-screen bg-back object-cover flex items-center">
        <Sidebar/>
    </div>



    {/* TITULO - BARRA DE BUSQUEDA */}
    <div className="fixed"> 
        <div className="grid grid-cols-2 gap-56 ml-96">
            <div className="col-span-1">
                <TittleProfile/>
            </div>
            <div className="col-span-1">
                <SearchBar/>
            </div>
        </div>
    </div>


    {/* CARDS AJUSTES */}
    <div className=""> 
        <div className="grid grid-cols-1 gap-5 ml-10 mt-28 mb-64">
            <div className="col-span-1">
                <ChangePhoto/>
            </div>
            <div className="col-span-1">
                <ChangeName/>
            </div>
            
            
        </div>

        <div className="ml-10 mt-64">
            <Player3/>
        </div>


    </div>


    {/* MUSIC PLAYER */}
    {/* <div className="ml-56 mt-28">
        <Player3/>
    </div> */}


    </div>
    

    

            
  )
}

export default Profile
