import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setEditProfile } from "../../redux/reducers/profileSlice"
import TextInput from "../TextInput/Textinput"
import Button from "../Button/Button"

export default function EditButton() {
    const token = useSelector(state => state.userAuth.token)
    const profile = useSelector((state) => state.profile)
    const [isEditing, setIsEditing] = useState(false)
    const [newUserName, setNewUserName] = useState(profile.userName)

    const dispatch = useDispatch()

    const editUserName = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ userName: newUserName })
            })
            if (!response) {
                throw new Error("Échec de la mise à jour du nom d'utilisateur")
            }
            dispatch(setEditProfile(newUserName))
            setIsEditing(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <TextInput
                        label="Username "
                        id="username"
                        type="text"
                        autoComplete="username"
                        onChange={(e) => setNewUserName(e.target.value)}
                        value={newUserName} />
                    <br />
                    <Button
                        className="edit-button"
                        onClick={editUserName}>
                        Save
                    </Button>
                </div>
            ) : (
                <Button
                    className="edit-button"
                    onClick={() => setIsEditing(true)}>
                    Edit UserName
                </Button>
            )}
        </div>
    )
}