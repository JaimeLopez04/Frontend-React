import React, { useState } from "react"
import Sidebar from "../Components/side-bar"
import GroupCardsSong from "../Components/cards-music/GroupCardsSong"
import Player3 from "../Components/player/Player3"
import TopBar from "../Components/TopBar"
import MyList from "../Components/mi-lista/MyList"
import SettingsCards from "../Components/SettingsCards"
import SidebarData from "../Components/SideBarData"
import userProfile from "../Components/userProfile"

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
        configuracion: SettingsCards
        // Agrega más páginas según tus necesidades
    };
    const [currentPage, setCurrentPage] = useState(null);

    const PageComponent = pageComponents[currentPage];

    return (
        <>
            <div className="flex h-screen"> 
                <div className="w-1/4 mt-3 mr-4">
                    <Sidebar setCurrentPage={setCurrentPage}/>
                        {/* <div id="navegacion" className="bg-white bg-opacity-10 h-[98%] w-[20rem] max-md:w-[6.5rem] rounded-2xl ml-6 p-4 border transition-all duration-500 border-solid border-white border-opacity-10 relative">
                            <SidebarData setCurrentPage={setCurrentPage}/>
                        </div> */}
                </div>
                
                <div className="flex-1 flex flex-col m-3"> 
                    <div className="h-16">
                        <TopBar titulo={titulo()}/>
                    </div>
                    <div className="flex-1 overflow-x-hidden overflow-y-scroll"> 
                        {/* <GroupCardsSong/> */}
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
