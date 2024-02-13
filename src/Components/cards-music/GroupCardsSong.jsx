import CardSong from './CardSong'

import { apiUrl } from '../../api/apiurl';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsChevronDoubleLeft } from 'react-icons/bs';

const GroupCardsSong = ({email, onGoBack, fromGenresCards, setCurrentSong}) => {

    const handleGoBack = () => {
        onGoBack();
    };
    
    const [arraySongs, setArraySongs] = useState([]);
    const sendEmail = email


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

    const handleSongClick = (song) => {
        setCurrentSong(song)
    }

    return (
        <>
            {fromGenresCards && (
                <button className='bg-fuchsia-950/80 p-1 flex justify-between items-center relative rounded-md' onClick={handleGoBack}>
                    <BsChevronDoubleLeft className='mr-2'/>
                    Volver
                </button>
            )}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-3">
                {!arraySongs ? ( 
                    <h1>No hay canciones disponibles</h1>
                ) : (
                    arraySongs.map((song) => (
                        <button key={song.id} onClick={ () => handleSongClick(song) }>
                            <CardSong key={song.id} title={song.title}  handleSongClick={handleSongClick} artist={song.artist} gender={song.gender} imageSongURL={song.imageSongURL} favorite={song.favorite} email={email} />
                        </button>
                    ))
                )}
            </div>
        </>
    )
}

export default GroupCardsSong
