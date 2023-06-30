import React from 'react'
import CardSong from './CardSong'

const GroupCardsSong = () => {
    return (
        <div className=" grid grid-cols-2 gap-2 lg:grid-cols-4">
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
