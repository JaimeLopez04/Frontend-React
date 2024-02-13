import { FiLogOut } from "react-icons/fi";
import { FaHeart } from "react-icons/fa"
import { IoIosSettings } from 'react-icons/io'
import { FaHeadphones } from 'react-icons/fa';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BsHouseFill } from 'react-icons/bs';


export const datas = [
  {
    id: 1,
    icon: <BsHouseFill/>,
    text: "Inicio",
    navItem: "inicio",
  },
  {
    id: 2,
    icon: <FaHeadphones/>,
    text: "Mis canciones",
    navItem: "miLista",
  },
  {
    id: 3,
    icon: <FaHeart/>,
    text: "Mis favoritos",
    navItem: "misFavoritos",
  },
  {
    id: 4,
    icon: <BsMusicNoteBeamed/>,
    text: "Géneros",
    navItem: "generos",
  },
  {
    id: 5,
    icon: <IoIosSettings/>,
    text: "Configuración",
    navItem: "configuracion",
  },
  {
    id: 6,
    icon: <FaUser />,
    text: "Perfil",
    navItem: "perfil",
  },
  {
    id: 7,
    icon: <FiLogOut />,
    ruta: "/",
    text: "Salir",
    navItem: "salir",
  },
];






