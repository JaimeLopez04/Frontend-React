import SearchBar from './SearchBar'

function TopBar(props) {
    
    return (
        <div className='flex justify-between items-center rounded-xl p-1 border-b border-purple2 border-opacity-40'>
            <h1 className="p-2 pl-6 pt-1 font-bold text-4xl text-white whitespace-pre opacity-100">
                {props.titulo}
            </h1>
            <SearchBar/>
        </div>
    )
}

export default TopBar
