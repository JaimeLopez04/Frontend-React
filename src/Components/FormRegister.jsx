import { useState } from "react";
import Logo from "../assets/BeatLabLogo.webp";

import { apiUrl } from "../api/apiurl";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FormRegistro = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [nameUser,setNameUser] = useState('');
    const [lastNameUser,setLastNameUser] = useState('');
    const [phone,setPhone] = useState('');
    
    const navigate = useNavigate();

    const MySwal = withReactContent(Swal)

    const registerUser = (e) => {
        e.preventDefault();

        if(email.length === 0){
            MySwal.fire({
                icon: 'error',
                title: 'El campo de correo no puede estar vacio',
                background:"#E8E5F1",
                color: "#000" 
            })
        }
        else if(password.length === 0){
            MySwal.fire({
                icon: 'error',
                title: 'El campo de contraseña no puede estar vacio',
                background:"#E8E5F1",
                color: "#000" 
            })
        } else {
            let url = apiUrl + 'register'
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post(url, {
                nameUser: nameUser,
                lastNameUser: lastNameUser,
                email: email,
                password: password,
                phone: phone
            })
            .then(function (response) {
                if (response.data.Register === "Register Successful"){
                    navigate("/")
                    MySwal.fire({
                        position: 'top-end',
                        icon: 'success',
                        width: 200,
                        heightAuto: true,
                        title: 'Usuario registrado con exito',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }else {
                    navigate("/register")
                    MySwal.fire({
                        icon: 'error',
                        title: 'Este usuario ya se encuentra registrado',
                        background:"#E8E5F1",
                        color: "#000" 
                    })
                    
                }
            })
            .catch(function (error) {
                console.log("Error", error);
            });
        }
    };

    return (
        <div className="bg-black/20 backdrop-blur-lg px-10  py-8 rounded-2xl">
            <div className="flex items-center justify-center">
                <img className="w-16" src={Logo} alt="Logo" />
                <h1 className="text-5xl font-semibold text-center">Bienvenido</h1>
            </div>
            <p className="font-medium text-lg mt-4 text-center">Registrate</p>
            <div className="mt-6">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <label className="text-lg font-medium">Nombre</label>
                        <input
                        className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                        placeholder="Ingresa tu nombre"
                        type="text"
                        value={nameUser} 
                        onChange={(e) => setNameUser(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col px-4">
                        <label className="text-lg font-medium">Apellidos</label>
                        <input
                        className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                        placeholder="Ingresa tu apellido"
                        type="text"
                        value={lastNameUser} 
                        onChange={(e) => setLastNameUser(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <label className="text-lg font-medium">Email</label>
                        <input
                            className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                            placeholder="Ingresa tu email"
                            type="email"
                            value={email} 
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col px-4">
                        <label className="text-lg font-medium">Teléfono</label>
                        <input
                            className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                            placeholder="Ingresa tu numero de teléfono"
                            type="phone"
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col">
                        <label className="text-lg font-medium">Contraseña</label>
                        <input
                        className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        name="password"
                        />
                    </div>
                    <div className="flex flex-col px-4">
                        <label className="text-lg font-medium">
                        Confirma la contraseña
                        </label>
                        <input
                        className="w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent"
                        placeholder="Confirma tu contraseña"
                        type="password"
                        value={password}
                        name="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-y-4">
                    <button 
                        className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05]  ease-in-out transform py-2 bg-violet-500 rounded-xl text-white font-bold text-lg"
                        onClick={registerUser}
                        >
                        Registrarse
                    </button>
                </div>
                <div className="mt-4 flex justify-center items-center">
                    <p className="font-medium text-base">¿Ya tienes una cuenta?</p>
                    <button className="ml-2 font-medium text-base text-violet-500">
                        <a href="/">Ingresa aquí!</a>  
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormRegistro;
