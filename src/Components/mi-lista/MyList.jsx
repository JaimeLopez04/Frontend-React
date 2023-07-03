import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
// import {ListSong} from './ListSong'

const MyList = () => {
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
            <div className="relative flex justify-between items-center">
                <i className='text-lg mr-4'>
                    <BsMusicNoteList/>
                </i>
                <p>
                    Name playlist
                </p>
                <i className='ml-auto'>
                    <BsTrash/>
                </i>
            </div>
        </div>
    )
}

export default MyList
