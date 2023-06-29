// import settingsOption from "../assets/settingsOption.jpg"
import noProfile from "../assets/noProfile.jpg"
import edit from "../assets/edit.jpg"

const ChangeName = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:h-24 md:flex-row md:max-w-3xl  dark:border-gray-700 dark:bg-transparent  ">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-24 md:w-24 md:rounded-none md:rounded-l-lg" src={noProfile} alt="" />
            <div className="flex flex-col  justify-between leading-normal">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-9">
                    Nombre
                </h5>
                <p className="mb-3 w-52 text-base font-bold text-gray-700 dark:text-gray-400 ml-9">
                    Edward Correa 
                </p>
                {/* <button className="bg-purple bg-opacity-40 w-40 h-9 m-auto font-bold rounded-full hover:bg-purple">
                    Botón
                </button> */}
            </div>
            <div className="flex flex-row">
            <input 
              className='w-72 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 ml-16 bg-transparent
              text-white focus:outline-none focus:outline-purple2 focus:outline-1'
              placeholder="Editar nombre"
            />
            <button>
                <img src={edit} className="mr-3 top-0 left-8 w-11 h-11 object-cover ml-4 rounded-md"/>
            </button>
            </div>
        </div>
    </div>
  )
}

export default ChangeName
