import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import AddSongModal from '../modalWindow/AddSongModal'

const MiLista = () => {
    const [showMyModal, setShowMyModal] = useState(false);
    const handleOnClose = () => setShowMyModal(false);

    return (
        <div className='mt-4 w-full'>
            <div className="flex justify-between items-center">
                <p className='text-lg'>
                    Mi Lista
                </p>
                <button onClick={() => setShowMyModal(true)}>
                    <FaPlus/>
                </button>
            </div>
            <div className="">

            </div>

            <AddSongModal onClose={handleOnClose} visible={showMyModal}/>

        </div>
    )
}

export default MiLista
