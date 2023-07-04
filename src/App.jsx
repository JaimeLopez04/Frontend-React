import React, { useState } from "react"
// import Route
import Registro from "./auth/Registro";
import Login from "./auth/Login";

import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./pages/Home";
import MyList from "./Components/mi-lista/MyList";
import GroupCardSong from "./Components/cards-music/GroupCardsSong"

function App() {

    return (
        <>
            <BrowserRouter>
                <Route>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Registro />} />
                    <Route path="/home" element={<Home />}>
                        <Route index element={<GroupCardSong/>}/>
                    </Route>
                    <Route path="/my-list" element={<MyList/>}/>
                </Route>
            </BrowserRouter>
        </>
        
    )
}

export default App
