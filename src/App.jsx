import Registro from "./auth/Registro";
import Login from "./auth/Login";


import {BrowserRouter, Route, Routes} from 'react-router-dom';
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
