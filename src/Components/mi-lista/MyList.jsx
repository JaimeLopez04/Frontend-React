import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsPen, BsTrash } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import AddSongModal from '../modalWindow/AddSongModal';
import DeleteSongModal from '../modalWindow/DeleteSongModal';
import EditSongModal from '../modalWindow/EditSongModal';
import axios from 'axios';
import { apiUrl } from '../../api/apiurl';

function MyList(props){
    //Ventana Modal Editar Canción
    const [showMyModal2, setShowMyModal2] = useState(false);
    const handleOnClose2 = () => setShowMyModal2(false);

    //Ventana Modal Eliminar Canción
    const [showMyModal1, setShowMyModal1] = useState(false);
    const handleOnClose1 = () => setShowMyModal1(false);

    const [showMyModal, setShowMyModal] = useState(false);
    const handleOnClose = () => setShowMyModal(false);

    const [arraySongs, setArraySongs] = useState([]);
    const sendEmail = props.email

    useEffect(() => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        let url = apiUrl + 'songs';
        axios.get(url, {
            params:{
                user: sendEmail
            },
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(function (response) {
            const arraySongs = response.data.SongsAll;
            setArraySongs(arraySongs);
        })
        .catch(function (error) {
            console.log(error, 'error');
        });
    },[]);

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
                {arraySongs.map((song) => {
                    return(
                    <div key={song.id} className="relative flex justify-between items-center mt-1 hover:bg-purple hover:bg-opacity-20 rounded-lg transition-all duration-300 p-3">
                        <i className='text-lg mr-4'>
                            <BsMusicNoteList />
                        </i>
                        <p>
                            {song.title}
                        </p>
                        <i className='ml-auto justify-between items-center flex'>
                            <button onClick={() => setShowMyModal2(true)}>
                                <BsPen  className='' />
                            </button>
                            <button onClick={() => setShowMyModal1(true)}>
                                <BsTrash className='ml-4'/>
                            </button>
                        </i>
                    </div>
                    )
                })}
            </div>
            <AddSongModal onClose={handleOnClose} visible={showMyModal} email={props.email} />
            <DeleteSongModal onClose={handleOnClose1} visible={showMyModal1} email={props.email} />
            <EditSongModal onClose={handleOnClose2} visible={showMyModal2} email={props.email} />
        </div>
    )
}

export default MyList