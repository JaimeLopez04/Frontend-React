import { useState } from "react"
import Sidebar from "../Components/side-bar"
import GroupCardsSong from "../Components/cards-music/GroupCardsSong"
import Player3 from "../Components/player/Player3"
import TopBar from "../Components/TopBar"
import MyList from "../Components/mi-lista/MyList"
import GenresCards from "../Components/genres/GenresCards"
import Profile from "./Profile"
import Settings from "./Settings"
import { useLocation } from "react-router-dom"
import MyFavorites from "../Components/favorites/MyFavorites"

function Home() {

    const [ currentSong, setCurrentSong] = useState('')

    const [isFavorite, setIsFavorite] = useState('');
    
    const fecha = new Date()
    const hora = fecha.toLocaleTimeString('es-CO')

    const { state } = useLocation();
    const { email, lastNameUser, nameUser , userPhotoURL} = state;

    let titulo = () =>{
        if (hora >=  '12:00:00 a. m.' && hora <= '12:00:00 p. m.'){
            return 'Buenos días'
        } else if (hora <= '6:30:00 p. m.'){
            return 'Buenas tardes'
        }else{
            return "Buenas noches"
        }
    }

    const pageComponents = {
        inicio: GroupCardsSong,
        miLista: MyList,
        misFavoritos: MyFavorites,
        configuracion: Settings,
        generos: GenresCards,
        perfil: Profile
        // Agrega más páginas según tus necesidades
    };

    const nombres = {
        miLista: "Mis canciones",
        misFavoritos: "Mis favoritos",
        generos:"Géneros",
        configuracion: "Configuración",
        perfil: "Perfil"
    }
    const [currentPage, setCurrentPage] = useState(null);

    const PageComponent = pageComponents[currentPage];

    const nTitulo = nombres[currentPage];
    const hTitulo = titulo()

    return (
        <>
            <div className="flex h-screen"> 
                <div className="w-1/4 mt-3 mr-4">
                    <Sidebar setCurrentPage={setCurrentPage} email={email} lastNameUser={lastNameUser} nameUser={nameUser} userPhotoURL={userPhotoURL}/>
                </div>
                
                <div className="flex-1 flex flex-col m-3"> 
                    <div className="h-16">
                        <TopBar titulo={nTitulo ? nTitulo : hTitulo}/>
                    </div>
                    <div className="flex-1 overflow-x-hidden overflow-y-scroll"> 
                        {PageComponent ? <PageComponent setCurrentSong={setCurrentSong} email={email} setIsFavorite={setIsFavorite} isFavorite={isFavorite} userPhotoURL={userPhotoURL} lastNameUser={lastNameUser} nameUser={nameUser}/> : <GroupCardsSong setCurrentSong={setCurrentSong} setIsFavorite={setIsFavorite} isFavorite={isFavorite} email={email}/>}
                    </div>
                    <div className="h-[86px]">
                        <Player3 currentSong={currentSong} isFavorite={isFavorite} setIsFavorite={setIsFavorite} email={email}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
