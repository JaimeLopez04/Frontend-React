import axios from "axios";
import { apiUrl } from "../../api/apiurl";
import emptyHeart from "../../assets/emptyHeart.png";
import fullHeart from "../../assets/fullHeart.png";
import { useState } from 'react'


const CardSong = ({title, artist, gender, imageSongURL, favorite, email}) => {

    const [isFavorite, setIsFavorite] = useState(favorite);

    const changeImage = () => {

            let url = apiUrl + 'songs/favorite'
            let sendEmail = email
            let body = { title : title }

            axios.patch(url, body,{
                params: { user : sendEmail },
                Headers: {'Content-Type' : 'application/json'}
            },)
            .then(function(response){
                if (response.data.isFavorite){
                    setIsFavorite(response.data.isFavorite)
                }
                else {
                    setIsFavorite(!isFavorite)
                }
            })
            .catch(function(error){
                console.log('Error', error);
            })

            setIsFavorite(!isFavorite);
    }

    return (
        <div className='bg-white/5  backdrop-blur-lg text-center rounded-xl items-center justify-center w-48'>
            <div className='flex items-center justify-center'>
                <img src={imageSongURL} alt="Imagen" className='rounded-md object-cover w-36 h-32 mt-2' />
            </div>
            <div className='p-4 cursor-default'>
                <h2 className='font-semibold'>{ title }</h2>
                <h3 className='text-sm mt-1'>{ artist }</h3>
                <div className="flex justify-between items-center">
                    <div className='bg-purple3/40 px-2 py-1 rounded-full text-sm ml-1 text-center'>
                        {gender}
                    </div>
                    <button className="" onClick={ changeImage }>
                        <img
                        className="mr-3 top-0 left-8 w-8 h-8 object-cover rounded-tr-xl"
                        src={isFavorite ? fullHeart : emptyHeart}
                        alt="AW"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardSong
