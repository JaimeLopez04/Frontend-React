import Player from "@madzadev/audio-player";


const tracks = [ //ARREGLO DE CANCIONES
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      tags: ["house"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    },
  ];

const Player1 = () => {
  return (
    <div className="">
        <Player className="text-base"
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlaylist={true}
            autoPlayNextTrack={true}
        />
    </div>
    
  )
}

export default Player1