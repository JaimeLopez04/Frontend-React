// const urlImage = "https://i.pinimg.com/564x/30/3d/83/303d83cb35d5e0ab0d8d6ac28c1890fa.jpg"

const CardSong = ({title, artist, gender, imageSongURL, favorite}) => {
    return (
        <div className='bg-white/10  backdrop-blur-lg text-center rounded-xl items-center justify-center w-48'>
            <div className='flex items-center justify-center'>
                <img src={imageSongURL} alt={title +" "+ artist} className='rounded-md object-cover w-36 h-32 mt-2' />
            </div>
            <div className='p-4 '>
                <h2 className='font-semibold'>{ title }</h2>
                <h3 className='text-xs mt-1'>{ artist }</h3>
                <div className='bg-violet-950/10 px-2 py-1 rounded-full text-xs'>{gender}</div>
            </div>
        </div>
    )
}

export default CardSong
