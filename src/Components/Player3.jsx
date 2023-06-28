import rosa from "../assets/rosa.mp3"
import albumcover from "../assets/albumcover.jpg"
import Player from "../assets/Player.css"
import backwards2 from "../assets/backwards2.png"
import forwards2 from "../assets/forwards2.png"
import backwards3 from "../assets/backwards3.png"
import forwards3 from "../assets/forwards3.png"


const Player3 = () => {
  return (
    <div>
        <div  className="flex flex-row items-center bg-white border border-gray-200 rounded-lg md:h-24 md:flex-row md:max-w-3xl dark:border-gray-700 dark:bg-transparent shadow-lg shadow-purple2 ">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-24 md:w-24 md:rounded-none md:rounded-l-lg mr-3" src={albumcover} alt="" />
            <button className="">
                  <img className="mr-2 top-0 left-0 w-8 h-8 object-cover rounded-tr-xl" src={backwards3} alt="AW" />
            </button>

            <div className="flex flex-col justify-between p-3 leading-normal">
            <audio className={Player}
                src={rosa} type="audio/mp3" controls>
            </audio>            
            </div>
            <button className="">
                <img className="mr-3 top-0 left-8 w-8 h-8 object-cover rounded-tr-xl" src={forwards3} alt="AW" />
            </button>
        </div>
      
    </div>
  )
}

export default Player3
