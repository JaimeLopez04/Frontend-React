import ChangeName from "../Components/ChangeName"
import ChangePhoto from "../Components/ChangePhoto"

const Profile = () => {
    return (
            <div className="grid grid-cols-1 gap-5">
                <div className="col-span-1">
                    <ChangePhoto/>
                </div>
                <div className="col-span-1">
                    <ChangeName/>
                </div>                
            </div>
                
    )
}

export default Profile
