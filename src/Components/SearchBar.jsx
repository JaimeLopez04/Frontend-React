import { FaSearch } from 'react-icons/fa';


const SearchBar = () => {
  return (
      <div className=''>
        <div className='flex flex-row items-center px-5 mt-2'>
          <FaSearch className="text-purple2 text-2xl font-bold mr-3"/>
            <input 
              className='w-96 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 bg-transparent
              text-white focus:outline-none focus:outline-purple2 focus:outline-1'
              placeholder=" Artistas, canciones o podcasts"
            />
         </div>
      </div>
  )
}

export default SearchBar

