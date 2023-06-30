import Sidebar from "../Components/side-bar"
import SearchBar from "../Components/SearchBar"
import MiLista from "../Components/mi-lista/MiLista"
import GroupCardsSong from "../Components/cards-music/GroupCardsSong"
import Player3 from "../Components/Player3"

function Home() {
    const fecha = new Date()
    const hora = fecha.toLocaleTimeString('es-CO')
    console.log(hora);

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
            <div className="flex overflow-hidden">
                <aside className="h-screen flex items-center justify-center fixed top-0 left-0 z-10">
                    <Sidebar/>
                </aside>
            </div>
            <div className="flex flex-col w-full overflow-hidden relative">
                <nav className="h-[4.5rem] flex justify-between fixed top-3 ml-[22rem] mr-2 inset-x-0 z-10 bg-white/10 items-center rounded-xl border border-solid border-white border-opacity-10 ">
                    <h1 className="p-2 pl-6 pt-1 font-bold text-4xl text-white whitespace-pre opacity-100">
                        {titulo()}
                    </h1>
                    <SearchBar/>
                </nav>
                <div className="flex">
                    <main className="flex-auto min-h-screen p-4 overflow-hidden pt-24 pl-96  mb-20">
                        {/* <GroupCardsSong/> */}

                        <MiLista/>
                    </main>
                    <footer>
                        <div className="bottom-3 inset-x-0 justify-center z-10  h-28 flex fixed  items-center ml-[22rem] mr-2">
                            <Player3/>
                            {/* hola */}
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Home
