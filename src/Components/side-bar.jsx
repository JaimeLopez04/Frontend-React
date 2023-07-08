import UserProfile from "./userProfile";
import SideBarData from "./SideBarData";
import AppName from "./AppName";


const Sidebar = ({setCurrentPage, email, lastNameUser, nameUser, userPhotoURL}) => {
    return(
        <div id="navegacion" className="bg-white bg-opacity-10 h-[98%] w-[20rem] max-md:w-[6.5rem] rounded-2xl ml-6 p-2 border 
        transition-all duration-500 border-solid border-white border-opacity-10 relative">
            <AppName/>
            <UserProfile email={email} lastNameUser={lastNameUser} nameUser={nameUser} userPhotoURL={userPhotoURL}/>
            <SideBarData setCurrentPage={setCurrentPage}/>
        </div>
    )
};

export default Sidebar;

