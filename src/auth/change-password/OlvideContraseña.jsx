import BeatLabLogotipo from "../../assets/BeatLabLogotipo.webp"
import BeatLabLogo from "../../assets/BeatLabLogo.webp"

function OlvideContraseña() {
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
                                    className='w-full border-b border-gray-700 rounded-md p-2 mt-1 bg-transparent'
                                    placeholder="Ingresa tu correo"
                                    name='email'
                                    type="email"
                                />
                            </div>
                            
                        </form>
                        <div className='mt-6 flex flex-col gap-y-4'>
                            <button 
                                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05]  ease-in-out transform py-2 bg-violet-500 rounded-xl text-white font-bold text-lg'
                                type='submit'
                                form='form-login'>
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
