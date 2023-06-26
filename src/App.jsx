import React from "react"
import Login from "./auth/Login"
import Registro from "./auth/Registro";
import CardSong from "./Components/CardSong";

function App() {

    return (
        <>
            {/* <Login/> */}
            {/* <Registro/> */}
            <div className="grid-cols-4 grid ">
                <CardSong/>
                <CardSong/>
                <CardSong/>
                <CardSong/>
                <CardSong/>
            </div>
        </>
    )
}

export default App
