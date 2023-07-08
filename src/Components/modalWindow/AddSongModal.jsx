import { useState } from "react";
import close from "../../assets/close.png"
import DropdownGenres from "../DropdownGenres";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { apiUrl } from "../../api/apiurl";

import axios from 'axios';


const AddSongModal = ({visible, onClose, email}) => {

    const MySwal = withReactContent(Swal)

    
    const [titulo,setTitulo] = useState('');
    const [artista,setArtista] = useState('');
    const [genero, setGenero] = useState('')
    const [audio,setAudio] = useState('');
    const [imagen,setImagen] = useState('');

    const handleGeneroSeleccionado = (genero) => {
        setGenero(genero);
      };
    
    const handleAudioChange = (e) => {
        const file = e.target.files[0];
        setAudio(file);
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImagen(file);
    };

    const handleOnClose = (e) => {
        if(e.target.id === 'container') onClose()
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData();        

        if(titulo.length === 0){
            MySwal.fire({
                icon: 'error',
                title: 'Debes ingresar un titulo',
                background:"#E8E5F1",
                color: "#000" 
            })

        } else {

            let url = apiUrl + 'songs/upload'

            formData.append('title', titulo);
            formData.append('artist', artista);
            formData.append('gender', genero);
            formData.append('fileSong', audio);
            formData.append('fileImage', imagen);

            axios.post(url, formData, {
                headers:{ 'Content-Type' : 'multipart/form-data'},
                params:{ user: email }
            })
            .then(function (response) {
                if (response.data.Upload === "Successfull"){
                    MySwal.fire({
                        icon: 'success',
                        title: 'Canción registrado con exito',
                        showConfirmButton: false,
                        timer: 1600
                    })
                }else {
                    MySwal.fire({
                        icon: 'error',
                        title: 'Esta canción no puede ser agregada intentalo nuevamente luego',
                        background:"#E8E5F1",
                        color: "#000" 
                    })
                    
                }
            })
            .catch(function (error) {
                console.log("Error", error);
            });
        }
    }

    if (!visible) return null;

    return (
        <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-20 z-50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-purple2 bg-opacity-40 p-3 rounded-lg flex flex-col justify-center items-center">
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
                        className="pl-3 m-2 w-96 ml-2 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 bg-transparent text-white focus:outline-none focus:outline-purple2 focus:outline-1"
                        placeholder="Título de la canción"
                        name='title'
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)}
                        >
                        </input>
                        <input
                        className="pl-3 m-2 w-96 ml-2 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 bg-transparent text-white focus:outline-none focus:outline-purple2 focus:outline-1"
                        placeholder="Artista"
                        name='artist'
                        value={artista} 
                        onChange={(e) => setArtista(e.target.value)}>
                        </input>
                        <DropdownGenres onGeneroSeleccionado={handleGeneroSeleccionado}/>
                        {/* SUBIR AUDIO */}
                        <div className="flex flex-col rounded-md bg-purple2 bg-opacity-10 mt-3">
                            <h2 className="px-3 py-2 font-bold text-base">Subir Audio</h2>
                            <input type="file" id="archivo" accept="audio/*"
                            className="m-2 w-96 ml-2 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 bg-transparent  focus:outline-none focus:outline-purple2 focus:outline-1"
                            placeholder=""
                            name='audio'
                            onChange={ handleAudioChange }>                        
                            </input>
                        </div>
                        {/* SUBIR IMAGÉN CANCIÓN */}
                        <div className="flex flex-col rounded-md bg-purple2 bg-opacity-10 mt-3">
                            <h2 className="px-3 py-2 font-bold text-base">Subir Imagén</h2>
                            <input type="file" id="archivo" accept="image/*"
                            className="m-2 w-96 ml-2 h-11 border-b border-purple2 border-opacity-40 rounded-md p-2 mt-1 bg-transparent  focus:outline-none focus:outline-purple2 focus:outline-1"
                            placeholder=""
                            name="image"
                            onChange={ handleImageChange }>                        
                            </input>
                        </div>



                    </div>
                </div>
                <div className="">
                    <button className="col-span-1 bg-transparent hover:bg-purple2 border border-purple2 px-6 py-2 rounded-md"
                    onClick={handleSubmit}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddSongModal 
