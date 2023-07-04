import Sidebar from "../Components/side-bar"
import GroupCardsSong from "../Components/cards-music/GroupCardsSong"
import Player3 from "../Components/player/Player3"
import TopBar from "../Components/TopBar"
import MyList from "../Components/mi-lista/MyList"

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

    return (
        <>
            <div className="flex h-screen"> 
                <div className="w-1/4 mt-3 mr-4"> 
                    <Sidebar/>
                </div>
                
                <div className="flex-1 flex flex-col m-3"> 
                    <div className="h-16">
                        <TopBar titulo={titulo()}/>
                    </div>
                    <div className="flex-1 overflow-x-hidden overflow-y-scroll">
                        {/* <GroupCardsSong/> */}
                        <MyList title="Mi lista"/>
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
