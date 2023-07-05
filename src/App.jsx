import React from "react";
import Registro from "./auth/Registro";
import Login from "./auth/Login";


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile"

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/register" element={<Registro/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}

export default App
