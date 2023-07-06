import CardSong from './CardSong'

const GroupCardsSong = () => {
    return (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-3">
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
