import { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill, BsMusicNoteList } from 'react-icons/bs'
import { apiUrl } from '../../api/apiurl';
import axios from 'axios';


const MyFavorites = (props) => {

    const [arraySongs, setArraySongs] = useState([]);

    const sendEmail = props.email

    useEffect(() => {
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
            // Agregar una propiedad "isFavorite" a cada canción
            const songsWithFavorite = arraySongs.map(song => ({
              ...song,
              isFavorite: false
            }));
            setArraySongs(songsWithFavorite);
        })
        .catch(function (error) {
            console.log(error, 'error');
        });
    },[]);

    const changeHeart = (songId) => {
        setArraySongs(prevSongs => {
          return prevSongs.map(song => {
            if (song.id === songId) {
              return {
                ...song,
                isFavorite: !song.isFavorite
              };
            }
            return song;
          });
        });
    }

    const saveFavorites = () => {
        // Filtrar las canciones marcadas como favoritas
        const favoriteSongs = arraySongs.filter(song => song.isFavorite);
        // Hacer la solicitud POST al servidor con los favoritos
        axios.post(apiUrl + 'songs/saveFavorites', {
            user: sendEmail,
            favoriteSongs: favoriteSongs
        })
        .then(function (response) {
            // Manejar la respuesta del servidor si es necesario
            console.log(response);
        })
        .catch(function (error) {
            // Manejar el error si ocurre
            console.log(error);
        });
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
                        <button>
                            <p>
                                {song.title} 
                            </p>
                        </button>
                        <i className='ml-auto justify-between items-center flex'>
                            <button onClick={() => changeHeart(song.id)}>
                                { song.isFavorite ? <BsHeart className='ml-4'/> : <BsHeartFill className='ml-4'/>}
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
