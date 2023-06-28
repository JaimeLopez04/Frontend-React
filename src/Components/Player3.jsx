import rosa from "../assets/rosa.mp3"
import albumcover from "../assets/albumcover.jpg"
import Player from "../assets/Player.css"
import backwards3 from "../assets/backwards3.png"
import forwards3 from "../assets/forwards3.png"
import { useState, useRef, useEffect } from 'react';


// desde aquí cambios

const Player3 = () => {

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  //ARREGLO DE CANCIONES
  const songs = [
    {
      tittle: "Rosa de Guadalupe",
      artist: "Me chimba conocerte",
      genre: "Texmex",
      url: rosa,
    },
    {
      tittle: "Chords of life",
      artist: "Madza",
      genre: "idk",
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    },
    {
      tittle: "Late night drive",
      artist: "Madza",
      genre: "idk",
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    },
  ] ;

  

  const audioRef = useRef(null);

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

  

  return (
    <div>
        <div  className="flex flex-row items-center bg-white border border-gray-200 rounded-lg md:h-24 md:flex-row md:max-w-6xl dark:border-gray-700 dark:bg-transparent shadow-lg shadow-purple2 ">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-24 md:w-24 md:rounded-none md:rounded-l-lg mr-3" src={albumcover} alt="" />
              <div className="flex flex-col">
                <h2 className="text-base font-bold text-white">{songs[currentSongIndex].tittle}</h2>
                <p className="text-xs">{songs[currentSongIndex].artist}</p>
                <p className="text-xs">{songs[currentSongIndex].genre}</p>
              </div>
            <button className="ml-3" onClick={handlePlayPrevious}>
                  <img className="mr-2 top-0 left-0 w-8 h-8 object-cover rounded-tr-xl" src={backwards3} alt="AW" />
            </button>

            <div className="flex flex-col justify-between p-3 leading-normal">
            <audio className={Player} autoPlay
                src={songs[currentSongIndex].url} type="audio/mp3" controls ref={audioRef}> 
            </audio>            
            </div>
            <button className="" onClick={handlePlayNext}>
                <img className="mr-3 top-0 left-8 w-8 h-8 object-cover rounded-tr-xl" src={forwards3} alt="AW" />
            </button>
        </div>
      
    </div>
  )
}

export default Player3
