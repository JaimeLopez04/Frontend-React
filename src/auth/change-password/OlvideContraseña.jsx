import BeatLabLogotipo from "../../assets/BeatLabLogotipo.webp"
import BeatLabLogo from "../../assets/BeatLabLogo.webp"
import { useState } from "react";
import {useNavigate} from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { apiUrl } from "../../api/apiurl";
import axios from 'axios'

function OlvideContraseña() {

    const [email, setEmail] = useState('')

    const navigate = useNavigate();

    const MySwal = withReactContent(Swal)

    const sendEmail = (e) => {

        e.preventDefault()

        if (email.length === 0) {
            MySwal.fire({
                icon: 'error',
                title: 'El campo de correo no puede estar vacio',
                background:"#E8E5F1",
                color: "#000" 
            })
        } else {

            let url = apiUrl + 'sendRecuperationEmail'
            axios.post(url, {
                Headers: {'Content-Type' : 'application/json'},
                email: email
                }
            ).then(function(response){

                if (response.data.RecuperationEmail === "Email Sent Successfully") {
                    navigate('/sendToken')
                    MySwal.fire({
                        icon: 'success',
                        title: 'Su Token ha sido enviado con exito',
                        showConfirmButton: false,
                        timer: 1700
                    })
                    } 
                
                else {
                    MySwal.fire({
                        icon: 'error',
                        title: 'El correo no coincide con el registrado en el sistema',
                        background:"#E8E5F1",
                        color: "#000" 
                    })
                    }
                }
            ).catch(function(error){

                console.log('Falla', error);
                }
            )
        }
    }
    return (
        <div className="flex w-full h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple via-purple-900 to-black">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className='bg-black/20 backdrop-blur-lg px-16 py-8 rounded-2xl'>
                    <div className=' flex justify-between items-center'>
                        <img className='w-16' src={BeatLabLogo} alt='Logo' />
                        <h1 className='text-3xl font-semibold text-center'>¿Olvidaste tu contraseña?</h1>
                    </div>
                    <p className="w-[410px] text-base mt-4 text-center">Ingresa el correo electronico que se encuentra registrado en Beat Lab para recuperar tu contraseña</p>
                    <div className='mt-6'>
                        <form id='form-login'>
                            <div className='flex flex-col'>
                                <label className='text-lg font-medium'>Email</label>
                                <input 
                                    className='w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent focus:outline-none focus:outline-purple2 focus:outline-1'
                                    placeholder="Ingresa tu correo"
                                    name='email'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            
                        </form>
                        <div className='mt-6 flex flex-col gap-y-4'>
                            <button 
                                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05]  ease-in-out transform py-2 bg-violet-500 rounded-xl text-white font-bold text-lg'
                                type='submit'
                                onClick={sendEmail}>
                                    Enviar codigo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden relative w-1/2 h-full lg:flex">
                <img className=" h-full w-full" src={BeatLabLogotipo} alt="hello" />
            </div>
        </div>
    );
}

export default OlvideContraseña;
