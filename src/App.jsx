import React from "react"
import Sidebar from "./Components/side-bar"
import SearchBar from "./Components/SearchBar"
import Login from "./auth/Login"
import Registro from "./auth/Registro";
import CardSong from "./Components/CardSong";


function App() {

    return (
        <>
            {/* <Login/> */}
            <div className="bg-black flex flex-row" >

            {/* Barra Lateral */}
                  <div className="w-full h-screen bg-back object-cover flex items-center">
                  <Sidebar/>
            </div>

            <div className="left-[5rm]">
                    <SearchBar/>
            </div>



             <Registro/>
        </>
    )
}

export default App
