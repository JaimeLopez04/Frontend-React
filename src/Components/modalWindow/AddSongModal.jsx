import close from "../../assets/close.png"
import DropdownGenres from "../DropdownGenres";

const AddSongModal = ({visible, onClose}) => {
    const handleOnClose = (e) => {
        if(e.target.id === 'container') onClose()
    };

    if (!visible) return null;

  return (
    <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-20 z-50 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-purple2 bg-opacity-20 p-3 rounded-lg flex flex-col justify-center items-center">
            <div className="p-2">
            <div className="flex flex-row">
                    <h2 className="mb-5 text-2xl font-bold">
                        Agregar Canción
                    </h2>
                    <button className="ml-auto mb-auto" onClick={onClose}>
                        <img className="w-6 h-6" src={close} alt="" />
                    </button>
                </div>
                <div className="flex flex-col">
                    <input
                    className="m-2 w-96 ml-2 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 bg-transparent text-white focus:outline-none focus:outline-purple2 focus:outline-1"
                    placeholder="Título de la canción">
                    </input>
                    <input
                    className=" m-2 w-96 ml-2 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 bg-transparent text-white focus:outline-none focus:outline-purple2 focus:outline-1"
                    placeholder="Artista">
                    </input>
                    {/* <input
                    className="m-2 w-96 ml-2 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 bg-transparent text-white focus:outline-none focus:outline-purple2 focus:outline-1"
                    placeholder="Género">
                    </input> */}
                    <DropdownGenres/>
                    <input type="file" id="archivo" accept="audio/*"
                    className="m-2 w-96 ml-2 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 bg-transparent  focus:outline-none focus:outline-purple2 focus:outline-1"
                    placeholder="">                        
                    </input>
                </div>
            </div>
            <div className="">
                <button className="col-span-1 bg-transparent hover:bg-purple2 border border-purple2 px-6 py-2 rounded-md">
                    Guardar
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddSongModal 
