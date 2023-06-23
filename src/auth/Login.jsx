import React from 'react'
import ImgLogin from "../assets/ImgLogin.svg"
import Form from '../Components/Form'

function Login() {
    return (
        <div className='flex w-full h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-black'>
            <div className='w-full flex items-center justify-center lg:w-1/2' >
                <Form/>
            </div>
            <div className='hidden relative w-1/2 h-full lg:flex'>
                <img className=' h-full w-full' src={ImgLogin} alt='hello' />
            </div>
        </div>
    )
}


export default Login