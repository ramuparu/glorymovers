
import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase.utils"

const Signin = ()=>{
    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return(
        <div>
        sign in page
        <button onClick={logGoogleUser}>
          Signin With Google popup
        </button>
        </div>
    )
}

export default Signin