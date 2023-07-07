import React from 'react'
import emptyHeart from "../../assets/emptyHeart.png";
import fullHeart from "../../assets/fullHeart.png";
const urlImage = "https://i.pinimg.com/564x/30/3d/83/303d83cb35d5e0ab0d8d6ac28c1890fa.jpg"
import { useState } from "react";


const CardSong = () => {
    return (
        <div className='bg-white/5  backdrop-blur-lg text-center rounded-xl items-center justify-center w-48'>
            <div className='flex items-center justify-center'>
                <img src={urlImage} alt="Imagen" className='rounded-md object-cover w-36 h-32 mt-2' />
            </div>
            <div className='p-4 cursor-default'>
                <h2 className='font-semibold'>Nombre de la cancion</h2>
                <h3 className='text-sm mt-1'> Nombre autor</h3>
                <div className="flex justify-between items-center">
                    <div className='bg-purple3/40 px-2 py-1 rounded-full text-sm ml-1 text-center'>
                        Genero
                    </div>
                    <button className="" >
                        <img
                        className="w-7 h-7"
                        src={emptyHeart}
                        alt="AW"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardSong
