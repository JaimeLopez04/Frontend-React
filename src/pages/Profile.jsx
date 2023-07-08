import ChangeName from "../Components/ChangeName"
import ChangePhoto from "../Components/ChangePhoto"

const Profile = (props) => {
    return (
            <div className="grid grid-cols-1 gap-5">
                <ChangePhoto email={props.email} userPhotoURL={props.userPhotoURL}/>
                <ChangeName/>
            </div>
                
    )
}

export default Profile
