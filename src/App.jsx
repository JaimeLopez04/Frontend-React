import React from "react"
import Registro from "./auth/Registro";
import Login from "./auth/Login";

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/register" element={<Registro/>} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
