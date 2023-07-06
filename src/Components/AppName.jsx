import BeatLabLogo from "../assets/BeatLabLogo.webp"
import RacoonSoftLogo from "../assets/RacoonSoftLogo.webp"

const AppName = () => {
  return (
    <div className= "rounded-xl p-2 flex flex-col items-center  mb-2 justify-center">
            
            <div className="flex flex-row items-center">
                <div className="min-w-[2.5rem] h-[2.5rem]">
                    <img src={BeatLabLogo} alt="" className="w-full h-full rounded-full object-cover"/>
                </div>
                    <h3 className="text-xl text-white font-bold ml-2">BeatLab</h3>
            </div>
            <div className="flex flex-row items-center">
                <span className="text-xs text-white opacity-50">Developed By RaccoonSoft</span>            
                {/* <span className="text-xs text-white opacity-50 ml-2">XD</span> */}
                <img src={RacoonSoftLogo} alt="" className=" ml-1 w-5 h-5" />
            </div>
        </div>
  )
}

export default AppName
