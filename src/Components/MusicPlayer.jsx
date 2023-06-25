import rosa from "../assets/rosa.mp3"

const MusicPlayer = () => {
  return (
    <div>
        <audio controls className="mt-20 w-96" >
            <source src={rosa} type="audio/mpeg"/>
            Navegador no compatible con el audio

        </audio>
    </div>
  )
}

export default MusicPlayer
