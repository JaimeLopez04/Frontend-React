import React from 'react'
import ImgRegister from "../assets/ImgRegister.webp"
import FormRegistro from '../Components/FormRegister'

function Registro() {
    return (
        <div className='flex w-full h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple via-purple-900 to-black'>
            <div className='w-full flex items-center justify-center lg:w-1/2' >            
                <FormRegistro/>
            </div>
            <div className='hidden relative w-1/2 h-full lg:flex'>
                <img className=' h-full w-full right-0	' src={ImgRegister} alt='hello' />
            </div>
        </div>
        
    )
}
export default Registro