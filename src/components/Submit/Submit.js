import AddNewPost from "../AddNewPost";
import { auth } from "../../lib/firebase";

const Submit = () => {

    return (
        <AddNewPost user={auth.currentUser} />
    )

}

export default Submit;