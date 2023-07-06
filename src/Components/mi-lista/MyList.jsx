import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsPen, BsPenFill, BsTrash } from 'react-icons/bs'
import {ListSong} from './ListSong'
import { useState } from 'react';
import AddSongModal from '../modalWindow/AddSongModal';

function MyList(props){

    const [showMyModal, setShowMyModal] = useState(false);
    const handleOnClose = () => setShowMyModal(false);
    return (
        <div className='p-3'>
            <div className="flex justify-between items-center">
                <p className='text-lg'>
                    {props.title}
                </p>
                <button className='bg-fuchsia-950/80 p-1 flex justify-between items-center relative rounded-md' onClick={() => setShowMyModal(true)}>
                    <h1 className='ml-2 mr-3 justify-center text-center items-center'>Agregar nueva canción</h1>
                    <FaPlus />
                </button>
            </div>
            <div className=' mt-4 w-full '>
                {ListSong.map((list) => {
                    return(
                    <div className="relative flex justify-between items-center mt-1 hover:bg-purple hover:bg-opacity-20 rounded-lg transition-all duration-300 p-3" key={list.id}>
                        <i className='text-lg mr-4'>
                            <BsMusicNoteList />
                        </i>
                        <p>
                            {list.name}
                        </p>
                        <i className='ml-auto justify-between items-center flex'>
                            <BsPen className='cursor-pointer'/>
                            <BsTrash className='ml-4 cursor-pointer'/>
                        </i>
                    </div>
                    )
                })}
            </div>
            <AddSongModal onClose={handleOnClose} visible={showMyModal}/>
        </div>
    )
}

export default MyList