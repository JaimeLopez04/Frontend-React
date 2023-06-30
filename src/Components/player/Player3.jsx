import rosa from "../../assets/rosa.mp3"
import Player from "./Player.css"
import backwards3 from "../../assets/backwards3.png"
import forwards3 from "../../assets/forwards3.png"
import emptyHeart from "../../assets/emptyHeart.png"
import fullHeart from "../../assets/fullHeart.png" 
import wave2 from "../../assets/wave2.gif"

import { useState, useRef, useEffect } from 'react';

// desde aquí cambios

const Player3 = () => {

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  //ARREGLO DE CANCIONES -> modificado para conservar el atributo favorite (botón corazón)
  const [songs, setSongs] = useState([
    {
      tittle: "Chords of life",
      artist: "Madza",
      genre: "idk",
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      favorite: false,
    },
    {
      tittle: "Late night drive",
      artist: "Madza",
      genre: "idk",
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      favorite: false,
    },
    {
      tittle: "Suspenso mexican",
      artist: "Virgen de guadalupe",
      genre: "Noveleishon",
      url: rosa,
      favorite: false,
    },
  ]) ;

  

  const audioRef = useRef(null);

  // Para pasar a la siguiente canción cuando la actual termina
  useEffect(() => {
    const currentAudioRef = audioRef.current;
    const handleSongEnd = () => {
      handlePlayNext();
    };

    currentAudioRef.addEventListener('ended', handleSongEnd);

    return () => {
      currentAudioRef.removeEventListener('ended', handleSongEnd);
    };
  },);
  
// Para pasar las canciones
  const handlePlayNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    audioRef.current.addEventListener('canplaythrough', handleAudioPlay);
    audioRef.current.load();
  };

  const handlePlayPrevious = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    audioRef.current.addEventListener('canplaythrough', handleAudioPlay);
    audioRef.current.load();
  };

  const handleAudioPlay = () => {
    audioRef.current.removeEventListener('canplaythrough', handleAudioPlay);
    audioRef.current.play();
  };

  // Para que cambie el icono de favorite song ********* aquí no tenía en cuenta el atributo favorite
  // const [currentImage, setCurrentImage] = useState(emptyHeart);

  // const handleClick = () => {
  //   setCurrentImage(currentImage === emptyHeart ? fullHeart : emptyHeart);
  // };


//nuevos cambiios ********** teniendo en cuenta el atributo favorite
  // const [currentSong, setCurrentSong] = useState(false);
  const handleToggleFavorite = () => {
    setSongs((prevSongs) => {
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
  

  return (
    <div className="w-full ml-2 mr-2">
        <div  className="flex flex-row items-center w-100% bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-black shadow-md shadow-purple2 ">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-24 md:w-24 md:rounded-none md:rounded-l-lg mr-3" 
              src={wave2} 
              alt="music image" />
              <div className="flex flex-col w-auto">
                <h2 className="text-base font-bold text-white">{songs[currentSongIndex].tittle}</h2>
                <p className="text-xs">{songs[currentSongIndex].artist}</p>
                <p className="text-xs">{songs[currentSongIndex].genre}</p>
              </div>
            <button className="ml-auto" onClick={handlePlayPrevious}>
                  <img className="mr-1 top-0 left-0 w-8 h-8 object-cover rounded-tr-xl" src={backwards3} alt="AW" />
            </button>

            <div className="flex flex-col justify-between p-3 leading-normal">
              <audio 
              // className={Player} 
                  className="w-80"
                  src={songs[currentSongIndex].url} type="audio/mp3" 
                  controls ref={audioRef}> 
              </audio>            
            </div>
            <button className="" onClick={handlePlayNext}>
                <img className="mr-3 top-0 left-8 w-8 h-8 object-cover rounded-tr-xl" src={forwards3} alt="AW" />
            </button>
            <button className="" onClick={handleToggleFavorite}>
                <img className="mr-3 top-0 left-8 w-8 h-8 object-cover rounded-tr-xl" src={songs[currentSongIndex].favorite ? fullHeart : emptyHeart} alt="AW" />
            </button>
        </div>
    </div>
  )
}

export default Player3