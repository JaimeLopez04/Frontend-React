import React from 'react'
import CardSong from './CardSong'

const GroupCardsSong = () => {
    return (
        <div className=" grid grid-cols-2 gap-y-2 gap-x-56 lg:grid-cols-4 pr-60">
            <CardSong/>
            <CardSong/>
            <CardSong/>
            <CardSong/>
            <CardSong/>
            <CardSong/>
            <CardSong/>
            <CardSong/>
        </div>
    )
}

export default GroupCardsSong
