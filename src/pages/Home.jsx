import React, { useState } from "react"
import Sidebar from "../Components/side-bar"
import GroupCardsSong from "../Components/cards-music/GroupCardsSong"
import Player3 from "../Components/player/Player3"
import TopBar from "../Components/TopBar"
import MyList from "../Components/mi-lista/MyList"
import SettingsCards from "../Components/SettingsCards"
import SidebarData from "../Components/SideBarData"
import userProfile from "../Components/userProfile"
import GenresCards from "../Components/GenresCards"
import Profile from "./Profile"
import Settings from "./Settings"

function Home() {
    
    const fecha = new Date()
    const hora = fecha.toLocaleTimeString('es-CO')

    let titulo = () =>{
        if (hora >=  '00:00:00 AM' && hora <= '12:00:00 PM'){
            return 'Buenos días'
        } else if (hora <= '6:30:00 PM'){
            return 'Buenas tardes'
        }else{
            return "Buenas noches"
        }
    }

    const pageComponents = {
        inicio: GroupCardsSong,
        miLista: MyList,
        configuracion: Settings,
        generos: GenresCards,
        perfil: Profile
        // Agrega más páginas según tus necesidades
    };

    const nombres = {
        miLista: "Mis canciones",
        misFavoritos: "Mis faviritos",
        generos:"Generos",
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
                    <Sidebar setCurrentPage={setCurrentPage}/>
                </div>
                
                <div className="flex-1 flex flex-col m-3"> 
                    <div className="h-16">
                        <TopBar titulo={nTitulo ? nTitulo : hTitulo}/>
                    </div>
                    <div className="flex-1 overflow-x-hidden overflow-y-scroll"> 
                            {PageComponent ? <PageComponent /> : <GroupCardsSong/>}
                    </div>
                    <div className="h-[86px]">
                        <Player3/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
