import SignUp from "../../components/sign-up-form/sign-up-form.component"
import SignIn from "../../components/sign-in-form/sign-in-form.component"

import './authentication.styles.scss'

const Autentication = ()=>{
     
    return(
    <div className="authentication-container">
        <h1>sign in page</h1>
         <SignIn />
        <SignUp />
    </div>
)
}

export default Autentication