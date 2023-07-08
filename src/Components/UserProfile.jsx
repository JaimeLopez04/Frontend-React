const userProfile = ({toggle, email, lastNameUser, nameUser, userPhotoURL}) => {

  console.log(userPhotoURL);
  
  return (
    <div className={`flex gap-5 items-center ${ toggle ? 
    "bg-none transition-all duration-300 delay-200" : 
    "bg-purple bg-opacity-30 rounded-xl p-2"}`}>

        <div className="min-w-[3.5rem] h-[3.5rem]">
            <img src={userPhotoURL} alt="" className="w-full h-full rounded-full object-cover"/>
        </div>
        <div className={toggle ? "opacity-0 delay-200" : ""}>
            <h3 className="text-base text-white max-md:hidden">{nameUser} {lastNameUser}</h3>
            <span className="text-xs text-white opacity-50 max-md:hidden">{email}</span>
        </div>
    </div>
  )
}

export default userProfile
