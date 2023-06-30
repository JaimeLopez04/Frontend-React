import Sidebar from "../Components/side-bar"
import SearchBar from "../Components/SearchBar"
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
            <div className="flex h-screen"> {/* Agregamos un fondo gris claro al cuerpo del documento */}
                <div className="w-1/4 mt-4 mr-4"> {/* Agregamos el margen de 6 al contenedor de navegación */}
                    {/* Aquí puedes poner tu contenido de navegación */}
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
                        <div className="bottom-3 inset-x-0 justify-center z-10 text-xl h-28 flex fixed bg-black/80 items-center ml-[22rem] mr-2">
                            <Player3/>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default Home
