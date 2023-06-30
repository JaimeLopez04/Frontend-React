import { FiLogOut, FiUser } from "react-icons/fi";
import { FaHeart } from "react-icons/fa"
import { IoIosAddCircle, IoMdList } from "react-icons/io"
import { IoIosSettings } from 'react-icons/io'
import { FaHeadphones } from 'react-icons/fa';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BsHouseFill } from 'react-icons/bs';

export const datas = [
  {
    id: 1,
    icon: <BsHouseFill/>,
    ruta: "",
    text: "Inicio",
  },
  {
    id: 2,
    icon: <FaHeadphones/>,
    ruta: "",
    text: "Mis canciones",
  },
  {
    id: 3,
    icon: <FaHeart/>,
    ruta: "",
    text: "Mis favoritos",
  },
  {
    id: 4,
    icon: <BsMusicNoteBeamed/>,
    ruta: "",
    text: "Géneros",
  },
  {
    id: 5,
    icon: <IoIosAddCircle/>,
    ruta: "",
    text: "Agregar",
  },
  {
    id: 6,
    icon: <IoIosSettings/>,
    ruta: "",
    text: "Configuración",
  },
  {
    id: 7,
    icon: <FaUser />,
    ruta: "",
    text: "Perfil",
  },
  {
    id: 8,
    icon: <FiLogOut />,
    ruta: "/",
    text: "Salir",
  },
];






