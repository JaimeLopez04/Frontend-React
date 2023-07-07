import Registro from "./auth/Registro";
import Login from "./auth/Login";


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import OlvideContraseña from "./auth/change-password/OlvideContraseña"
import EnterCode from "./auth/change-password/EnterCode"
import ChangePassword from "./auth/change-password/ChangePassword"

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Login/> } />
                    <Route path="/register" element={ <Registro/> } />
                    <Route path="/home" element={ <Home/> } />
                    <Route path="/sendEmail" element={ <OlvideContraseña/> } />
                    <Route path="/sendToken" element={ <EnterCode /> } />
                    <Route path="/recoveryPassword" element={ <ChangePassword/> } />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}

export default App
