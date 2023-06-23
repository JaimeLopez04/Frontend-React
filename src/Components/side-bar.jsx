import UserProfile from "./userProfile";
import SideBarData from "./SideBarData";


const Sidebar = () => {
    return(
        <div className={` sidebar-container`}>
            <UserProfile/>
            <SideBarData/>
        </div>
    )
};

export default Sidebar;

