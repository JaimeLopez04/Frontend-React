import BeatLabLogotipo from "../../assets/BeatLabLogotipo.webp"
import BeatLabLogo from "../../assets/BeatLabLogo.webp"
import { apiUrl } from "../../api/apiurl";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const EnterCode = () => {
    const [token, setToken] = useState('')

    const navigate = useNavigate();

    const MySwal = withReactContent(Swal)

    const sentToken = (e) => {

        e.preventDefault()

        if (token.length === 0) {
            MySwal.fire({
                icon: 'error',
                title: 'El campo de correo no puede estar vacio',
                background:"#E8E5F1",
                color: "#000" 
            })
        } else {

            let url = apiUrl + 'confirmToken'
            axios.post(url, {
                Headers: {'Content-Type' : 'application/json'},
                token: token
                }
            ).then(function(response){
                console.log(response);

                if (response.data.correctToken === token) {
                    // navigate('/recoveryPassword')
                    MySwal.fire({
                        icon: 'success',
                        title: 'Token validado con exito',
                        showConfirmButton: false,
                        timer: 1700
                    })
                    } 
                
                else {
                    MySwal.fire({
                        icon: 'error',
                        title: 'El token no coincide con el enviado a su correo',
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
                        <h1 className='text-3xl font-semibold text-center'>Recuperar contraseña</h1>
                    </div>
                    <p className="w-[380px] text-base mt-4 text-center">
                        Ingresa el codigo que te llego al correo ingresado 
                    </p>
                    <div className='mt-6'>
                        <form id='form-login'>
                            <div className='flex flex-col'>
                                <label className='text-lg font-medium'>Codigo</label>
                                <input 
                                    className='w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent'
                                    placeholder="Ingresa codigo de verificación"
                                    name='token'
                                    type="number"
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                />
                            </div>
                            
                        </form>
                        <div className='mt-6 flex flex-col gap-y-4'>
                            <button 
                                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05]  ease-in-out transform py-2 bg-violet-500 rounded-xl text-white font-bold text-lg'
                                type='submit'
                                onClick={sentToken}
                                >
                                    Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden relative w-1/2 h-full lg:flex">
                <img className=" h-full w-full" src={BeatLabLogotipo} alt="hello" />
            </div>
        </div>
    )
}

export default EnterCode
