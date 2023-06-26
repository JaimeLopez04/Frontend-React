import albumcover from "../assets/albumcover.jpg"

const GenresCards = () => {
  return (
    <div>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:h-32 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-purple dark:bg-opacity-60
        dark:hover:bg-purple dark:hover:bg-opacity-30">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-32 md:w-32 md:rounded-none md:rounded-l-lg" src={albumcover} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-3">
                    Rock
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ml-3">
                    Género musical / Género Musical
                </p>
            </div>
        </a>
      
    </div>
  )
}

export default GenresCards
