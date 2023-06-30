import React from 'react'
import { FaPlus } from 'react-icons/fa'

const MiLista = () => {
    return (
        <div className='cursor-pointer mt-4 w-full'>
            <div className="flex justify-between items-center">
                <p className='text-lg'>
                    Mi Lista
                </p>
                <i>
                    <FaPlus/>
                </i>
            </div>
            <div className="">

            </div>
        </div>
    )
}

export default MiLista
