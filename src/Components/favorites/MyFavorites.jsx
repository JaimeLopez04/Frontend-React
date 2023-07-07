import React, { useState } from 'react'
import { BsHeart, BsHeartFill, BsMusicNoteList } from 'react-icons/bs'


const MyFavorites = (props) => {

    const [isFavorite, setIsFavorite] = useState('')

    const changeHeart = () => {
        setIsFavorite(!isFavorite)
    }
    return (
        <div className='p-3'>
            <div className=' mt-4 w-full '>
                {/* {ListSong.map((list) => {
                    return( */}
                    <div className="relative flex justify-between items-center mt-1 hover:bg-purple hover:bg-opacity-20 rounded-lg transition-all duration-300 p-3" >
                        <i className='text-lg mr-4'>
                            <BsMusicNoteList />
                        </i>
                        <p>
                            Nombre 
                        </p>
                        <i className='ml-auto justify-between items-center flex'>
                            <button onClick={changeHeart}>
                                { isFavorite ? <BsHeart className='ml-4'/> : <BsHeartFill className='ml-4'/>}
                            </button>
                        </i>
                    </div>
                    {/* ) */}
                {/* })} */}
            </div>
        </div>
    )
}

export default MyFavorites
