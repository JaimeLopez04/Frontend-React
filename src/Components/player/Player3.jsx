import "./Player.css";
import backwards3 from "../../assets/backwards3.png";
import forwards3 from "../../assets/forwards3.png";
import emptyHeart from "../../assets/emptyHeart.png";
import fullHeart from "../../assets/fullHeart.png";
import BeatLabLogo from "../../assets/BeatLabLogo.webp"

import { useState, useRef, useEffect } from "react";
import { apiUrl } from "../../api/apiurl";
import axios from "axios";

// desde aquí cambios

const Player3 = (currentSong, isFavorite, setIsFavorite, email) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  //ARREGLO DE CANCIONES -> modificado para conservar el atributo favorite (botón corazón)
  const [song, setSong] = useState(currentSong);

  const audioRef = useRef(null);

  // Para pasar a la siguiente canción cuando la actual termina
  useEffect(() => {
    const currentAudioRef = audioRef.current;
    const handleSongEnd = () => {
      handlePlayNext();
    };

    currentAudioRef.addEventListener("ended", handleSongEnd);

    return () => {
      currentAudioRef.removeEventListener("ended", handleSongEnd);
    };
  });

  // Para pasar las canciones
  const handlePlayNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % currentSong.length);
    audioRef.current.addEventListener("canplaythrough", handleAudioPlay);
    audioRef.current.load();
  };

  const handlePlayPrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + currentSong.length) % currentSong.length
    );
    audioRef.current.addEventListener("canplaythrough", handleAudioPlay);
    audioRef.current.load();
  };

  const handleAudioPlay = () => {
    audioRef.current.removeEventListener("canplaythrough", handleAudioPlay);
    audioRef.current.play();
  };

  //nuevos cambiios ********** teniendo en cuenta el atributo favorite
  const handleToggleFavorite = () => {

        let url = apiUrl + 'songs/favorite'
        let sendEmail = email
        let body = { title : currentSong.title }

        axios.patch(url, body,{
            params: { user : sendEmail },
            Headers: {'Content-Type' : 'application/json'}
        },)
        .then(function(response){
            if (response.data.isFavorite){
                setIsFavorite(response.data.isFavorite)
            }
            else {
                setIsFavorite(!isFavorite)
            }
        })
        .catch(function(error){
            console.log('Error', error);
        })
    setIsFavorite(isFavorite)

    setSong((prevSongs) => {
      return prevSongs.map((song, index) => {
        if (index === currentSongIndex) {
          return {
            ...song,
            favorite: !song.favorite,
          };
        }
        return song;
      });
    });
  };

  useEffect(() => {
    setSong(currentSong)
  },[currentSong])

  return (
    <div className="flex flex-row items-centerborder border border-solid border-white border-opacity-10  rounded-lg bg-white/10 shadow-md shadow-purple2 m-1 ">
      <img
        className="object-cover w-24 rounded-t-lg h-24  md:h-20 md:w-20 md:rounded-none md:rounded-l-lg mr-3"
        src={song.currentSong.imageSongURL ? song.currentSong.imageSongURL : BeatLabLogo}
        alt={song.currentSong.title}
      />
      <div className="flex flex-col w-auto py-2">
        <h2 className="text-base font-bold text-white">
          {song.currentSong.title}
        </h2>
        <p className="text-xs">{song.currentSong.artist}</p>
        <p className="text-xs">{song.currentSong.gender}</p>
      </div>
      <button className="ml-auto" onClick={handlePlayPrevious}>
        <img
          className="mr-1 top-0 left-0 w-8 h-8 object-cover rounded-tr-xl"
          src={backwards3}
          alt="AW"
        />
      </button>

      <div className="flex flex-col justify-between p-3 leading-normal">
        <audio
          className=""
          src={song.currentSong.songURL}
          type="audio/mp3"
          controls
          ref={audioRef}
          autoPlay
        ></audio>
      </div>
      <button className="" onClick={handlePlayNext}>
        <img
          className="mr-3 top-0 left-8 w-8 h-8 object-cover rounded-tr-xl"
          src={forwards3}
          alt="AW"
        />
      </button>
      <button className="" onClick={handleToggleFavorite}>
        <img
          className="mr-3 top-0 left-8 w-8 h-8 object-cover rounded-tr-xl"
          src={song.currentSong.favorite ? fullHeart : emptyHeart}
          alt="AW"
        />
      </button>
    </div>
  );
};    

export default Player3;
