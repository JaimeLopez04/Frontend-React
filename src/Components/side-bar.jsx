import UserProfile from "./userProfile";
import SideBarData from "./SideBarData";


const Sidebar = () => {
    return(
        <div className={` sidebar-container fixed`}>
            <UserProfile/>
            <SideBarData/>
        </div>
    )
};

export default Sidebar;

