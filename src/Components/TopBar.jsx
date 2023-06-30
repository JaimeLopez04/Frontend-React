import React from 'react'
import SearchBar from './SearchBar'

function TopBar(props) {
    
    return (
        <div className='flex justify-between bg-white/10 items-center rounded-xl border border-solid border-white border-opacity-10 p-1'>
            <h1 className="p-2 pl-6 pt-1 font-bold text-4xl text-white whitespace-pre opacity-100">
                {props.titulo}
            </h1>
            <SearchBar/>
        </div>
    )
}

export default TopBar
