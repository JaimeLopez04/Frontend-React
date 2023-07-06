import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
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
                <button onClick={() => setShowMyModal(true)}>
                    <FaPlus />
                </button>
            </div>
            <div className='cursor-pointer mt-4 w-full '>
                {ListSong.map((list) => {
                    return(
                    <div className="relative flex justify-between items-center mt-1 hover:bg-purple hover:bg-opacity-20 rounded-lg transition-all duration-300 p-3" key={list.id}>
                        <i className='text-lg mr-4'>
                            <BsMusicNoteList />
                        </i>
                        <p>
                            {list.name}
                        </p>
                        <i className='ml-auto'>
                            <BsTrash />
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