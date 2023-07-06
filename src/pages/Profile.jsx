import ChangeName from "../Components/ChangeName"
import ChangePhoto from "../Components/ChangePhoto"

const Profile = () => {
    return (
            <div className="grid grid-cols-1 gap-5">
                <ChangePhoto/>
                <ChangeName/>
            </div>
                
    )
}

export default Profile
