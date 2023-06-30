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
    icon: <BsHouseFill size={24}/>,
    url: "/home",
    text: "Inicio",
  },
  {
    id: 2,
    icon: <FaHeadphones size={24}/>,
    url: "/",
    text: "Mis canciones",
  },
  {
    id: 3,
    icon: <FaHeart size={24}/>,
    url: "/",
    text: "Mis favoritos",
  },
  {
    id: 4,
    icon: <BsMusicNoteBeamed size={24} />,
    url: "/",
    text: "Géneros",
  },
  {
    id: 5,
    icon: <IoIosAddCircle size={24}/>,
    url: "/",
    text: "Agregar",
  },
  {
    id: 6,
    icon: <IoIosSettings size={24}/>,
    url: "/",
    text: "Configuración",
  },
  {
    id: 7,
    icon: <FaUser size={24}/>,
    url: "/",
    text: "Perfil",
  },
  {
    id: 8,
    icon: <FiLogOut size={24}/>,
    url: "/",
    text: "Salir",
  },
];






