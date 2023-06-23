import { FiUser, FiLogOut } from "react-icons/fi";
import { FaHeart } from "react-icons/fa"
import { IoMdList } from "react-icons/io"
import { IoIosAddCircle } from "react-icons/io"
import { IoIosSettings } from 'react-icons/io'
// import { BsFolder} from "react-icons/bs";   //Icono chido de carpeta

export const datas = [
  {
    id: 1,
    icon: <FiUser />,
    text: "Perfil",
  },
  {
    id: 2,
    icon: <FaHeart />,
    text: "Mis favoritos",
  },
  {
    id: 3,
    icon: <IoMdList />,
    text: "Mi lista",
  },
  {
    id: 4,
    icon: <IoIosAddCircle />,
    text: "Agregar",
  },
  {
    id: 5,
    icon: <IoIosSettings />,
    text: "Ajustes",
  },
  {
    id: 6,
    icon: <FiLogOut />,
    text: "Logout",
  },
];