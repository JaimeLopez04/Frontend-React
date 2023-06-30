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
    ruta: "",
    text: "Perfil",
  },
  {
    id: 2,
    icon: <FaHeart />,
    ruta: "",
    text: "Mis favoritos",
  },
  {
    id: 3,
    icon: <IoMdList />,
    ruta: "",
    text: "Mi lista",
  },
  {
    id: 4,
    icon: <IoIosAddCircle />,
    ruta: "",
    text: "Agregar",
  },
  {
    id: 5,
    icon: <IoIosSettings />,
    ruta: "",
    text: "Ajustes",
  },
  {
    id: 6,
    icon: <FiLogOut />,
    ruta: "/",
    text: "Logout",
  },
];