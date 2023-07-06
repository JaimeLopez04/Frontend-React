import close from "../../assets/close.png"

const DeleteSongModal = ({visible, onClose}) => {
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
                        Eliminar Canción
                    </h2>
                    <button className="ml-auto mb-auto" onClick={onClose}>
                        <img className="w-6 h-6" src={close} alt="" />
                    </button>
                </div>
                <div className="w-96 flex justify-center mb-4">
                    <h2>¿Desea eliminar esta canción?</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-7">
                <button className="col-span-1 bg-transparent hover:bg-red-800 border border-red-900 px-6 py-2 rounded-md">
                    Eliminar
                </button>
                <button onClick={onClose} className="col-span-1 bg-transparent hover:bg-purple2 border border-purple2 px-6 py-2 rounded-md">
                    Cancelar
                </button>
            </div>
        </div>
    </div>
  )
}

export default DeleteSongModal
