import photo from "../assets/photo.jpg";
import ChangePhotoModal from "./modalWindow/ChangePhotoModal";
import { useState } from "react";

function ChangePhoto (props){
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:h-24 md:flex-row md:max-w-3xl  dark:border-gray-700 dark:bg-transparent  ">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-24 md:w-24 md:rounded-none md:rounded-l-lg"
          src={props.userPhotoURL}
          alt=""
        />
        <div className="flex flex-col  justify-between leading-normal mr-44">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-9">
            Foto de perfil
          </h5>
          <p className="mb-3 w-52 text-base font-normal text-gray-700 dark:text-gray-400 ml-9">
            Editar foto de perfil
          </p>
        </div>
        <div className="flex flex-row">
          <button className="w-11" onClick={() => setShowMyModal(true)}>
            <img
              src={photo}
              className="mr-3 top-0 left-8 w-11 h-11 object-cover ml-48 rounded-md"
            />
          </button>
        </div>
      </div>

      <ChangePhotoModal onClose={handleOnClose} visible={showMyModal} email={props.email}/>
    </div>
  );
}

export default ChangePhoto;
