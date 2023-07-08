import { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill, BsMusicNoteList } from 'react-icons/bs'
import { apiUrl } from '../../api/apiurl';
import axios from 'axios';


const MyFavorites = (props) => {

    const [isFavorite, setIsFavorite] = useState('')

    const [arraySongs, setArraySongs] = useState([]);
    const sendEmail = props.email

    useEffect(() => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        let url = apiUrl + 'songs/listFavorite';
        axios.get(url, {
            params:{
                user: sendEmail
            },
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(function (response) {
            const arraySongs = response.data.SongsFavorites;
            setArraySongs(arraySongs);
        })
        .catch(function (error) {
            console.log(error, 'error');
        });
    },[]);


    //TODO implement in only one item
    const changeHeart = () => {
        setIsFavorite(!isFavorite)
    }
    return (
        <div className='p-3'>
            <div className=' mt-4 w-full '>
            {arraySongs.map((song) => {
                    return(
                        <div key={song.id} className="relative flex justify-between items-center mt-1 hover:bg-purple hover:bg-opacity-20 rounded-lg transition-all duration-300 p-3" >
                        <i className='text-lg mr-4'>
                            <BsMusicNoteList />
                        </i>
                        <p>
                            {song.title} 
                        </p>
                        <i className='ml-auto justify-between items-center flex'>
                            <button onClick={changeHeart}>
                                { isFavorite ? <BsHeart className='ml-4'/> : <BsHeartFill className='ml-4'/>}
                            </button>
                        </i>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyFavorites
