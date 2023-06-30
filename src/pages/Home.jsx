import Sidebar from "../Components/side-bar"
import SearchBar from "../Components/SearchBar"
import GroupCardsSong from "../Components/cards-music/GroupCardsSong"
import Player3 from "../Components/player/Player3"

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
                </div>
                
                <div className="flex-1 flex flex-col m-3"> {/* Agregamos el margen de 6 al contenedor de la columna de tres filas */}
                    <div className="h-16">
                        <SearchBar/>
                    </div>
                    <div className="flex-1 overflow-x-hidden overflow-y-scroll"> {/* Eliminamos la clase overflow-y-auto para evitar el desplazamiento */}
                    {/* Aquí puedes poner el contenido que deseas hacer desplazable */}
                    {/* Si el contenido es demasiado grande, se creará un área desplazable */}
                        <GroupCardsSong/>
                    </div>
                    <div className="h-24">
                        <Player3/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
