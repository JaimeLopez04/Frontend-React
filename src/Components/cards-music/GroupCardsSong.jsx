import CardSong from './CardSong'

import { apiUrl } from '../../api/apiurl';
import axios from 'axios';
import { useEffect, useState } from 'react';

const GroupCardsSong = ({email}) => {
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
    return (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-3">
            {arraySongs.map((song) => ( 
                <CardSong key={song.id} title={song.title} artist={song.artist} gender={song.gender} imageSongURL={song.imageSongURL} favorite={song.favorite}email={email} />
            ))} 
        </div>
    )
}

export default GroupCardsSong
