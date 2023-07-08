import axios from "axios";
import { apiUrl } from "../../api/apiurl";
import close from "../../assets/close.png"
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useState } from "react";

const ChangeNameModal = ({visible, onClose, email}) => {

    const MySwal = withReactContent(Swal)

    const [name, setName] = useState('')


    const handleOnClose = (e) => {
        if(e.target.id === 'container') onClose()
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if(name.length === 0){
            MySwal.fire({
                icon: 'error',
                title: 'El nombre no puede estar vacio',
                background:"#E8E5F1",
                color: "#000" 
            })

        } else {

            let url = apiUrl + 'updateName'

            const body = {'name' : name}

            axios.patch(url, body, {
                headers:{ 'Content-Type' : 'application/json'},
                params:{ user: email }
            })
            .then(function (response) {
                if (response.data.updateName === "updateName Successful"){
                    MySwal.fire({
                        icon: 'success',
                        title: 'Su nombre ha sido actualizado satisfactoriamente',
                        showConfirmButton: false,
                        timer: 1600
                    })
                    if (!visible) return null;
                }else {
                    MySwal.fire({
                        icon: 'error',
                        title: 'El nombre no pudo ser actualizado intentalo nuevamente luego',
                        background:"#E8E5F1",
                        color: "#000" 
                    })
                    
                }
            })
            .catch(function (error) {
                console.log(email );
                console.log("Error", error);
            });
        }
    }

    if (!visible) return null;

  return (
    <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-20 z-50 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-purple2 bg-opacity-20 p-3 rounded-lg flex flex-col justify-center items-center">
            <div className="p-2">
            <div className="flex flex-row">
                    <h2 className="mb-5 text-2xl font-bold">
                        Cambiar nombre
                    </h2>
                    <button className="ml-auto mb-auto" onClick={onClose}>
                        <img className="w-6 h-6" src={close} alt="" />
                    </button>
                </div>
                <div className="flex flex-col">
                    <input id="archivo"
                    className="m-2 w-96 ml-2 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 bg-transparent  focus:outline-none focus:outline-purple2 focus:outline-1"
                    placeholder="Ingrese un nuevo nombre"
                    value={name}
                    onChange={ (e) => setName(e.target.value)}>                        
                    </input>
                </div>
            </div>
            <div className="">
                <button className="col-span-1 bg-transparent hover:bg-purple2 border border-purple2 px-6 py-2 rounded-md"
                onClick={ handleSubmit }>
                    Guardar
                </button>
            </div>
        </div>
    </div>
  )
}

export default ChangeNameModal
