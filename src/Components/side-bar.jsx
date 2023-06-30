import UserProfile from "./userProfile";
import SideBarData from "./SideBarData";


const Sidebar = () => {
    return(
        <div id="navegacion" className="bg-white bg-opacity-10 h-[96%] w-[20rem] rounded-2xl ml-6 p-4 border 
        transition-all duration-500 border-solid border-white border-opacity-10 relative">
            <UserProfile/>
            <SideBarData/>
        </div>
    )
};

export default Sidebar;

