// import settingsOption from "../assets/settingsOption.jpg"
import setti from "../assets/setti.jpg"

const SettingsCards = () => {
  return (
    <div>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:h-24 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-purple dark:hover:bg-opacity-10">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-24 md:w-24 md:rounded-none md:rounded-l-lg" src={setti} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-3">
                    Configuración
                </h5>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 ml-3">
                    Descripción breve
                </p>
                {/* <button className="bg-purple bg-opacity-40 w-40 h-9 m-auto font-bold rounded-full hover:bg-purple">
                    Botón
                </button> */}
            </div>
        </a>
    </div>
  )
}

export default SettingsCards
