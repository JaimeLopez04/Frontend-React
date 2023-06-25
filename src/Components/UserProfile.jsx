import albumcover from "../assets/albumcover.jpg"

const userProfile = ({ toggle }) => {
  return (
    <div className={`flex gap-5 items-center ${ toggle ? 
    "bg-none transition-all duration-300 delay-200" : 
    "bg-purple bg-opacity-30 rounded-xl p-2"}`}>

        <div className="min-w-[3.5rem] h-[3.5rem]">
            <img src={albumcover} alt="" className="w-full h-full rounded-full object-cover"/>
        </div>
        <div className={toggle ? "opacity-0 delay-200" : ""}>
            <h3 className="text-base text-white">Edward Correa</h3>
            <span className="text-[0.75rem] text-white opacity-50">jhon16edwardcorrea@gmail.com</span>
        </div>
    </div>
  )
}

export default userProfile
