import albumcover from "../assets/albumcover.jpg"
import rosa from "../assets/rosa.mp3"
import backwards from "../assets/backwards.png"
import forwards from "../assets/forwards.png"

// import user from "../assets/user.jpg"

const Player2 = () => {
  return (
    <div>
        <div className="w-350 bg-white rounded-xl shadow-xl shadow-purple2 ">
            <div className="relative w-auto h-80 flex items-end justify-center ">
                <img className="absolute top-0 left-0 w-full object-cover h-full  rounded-tl-xl rounded-tr-xl" src={albumcover} alt="AW" />

                <div className="grid grid-cols-2 gap-40 mb-2">
                  <img className="relative top-0 left-0 w-10 h-10 object-cover  rounded-tl-xl rounded-tr-xl" src={backwards} alt="AW" />
                  <img className="relative top-0 left-0 w-10 h-10 object-cover  rounded-tl-xl rounded-tr-xl" src={forwards} alt="AW" />
                </div>

            </div> 
            <audio className="w-100%"
            src={rosa} type="audio/mp3" controls>
            </audio>
        </div>
      
    </div>
  )
}

export default Player2

// absolute top-0 left-0 w-100% h-100% object-cover