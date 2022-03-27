import { useState } from "react"

import { createUserDocumentFromAuth,SignInAuthUserWithEmailAndPassword,signInWithGooglePopup } from "../../utils/firebase.utils"

import FormInput from "../form-input/form-input.component"

import Button from "../button/button.component"

import './sign-in-form.styles.scss'

const defaultFormFields = {
    
    email : '',
    password : ''
    
}


const SignIn = ()=>{

    const [formFields,setFormFields] = useState(defaultFormFields)

    const [email,password] = formFields

    console.log(formFields)

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const handleChange = (event)=>{
        const {name,value} = event.target

        setFormFields({...formFields,[name]:value})
    }

    const signInWithGoogle = async ()=>{
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef)
    }

    const handleSubmit = async(event)=>{
        event.preventDefault()
        try{
            const response = await SignInAuthUserWithEmailAndPassword(email,password)
             console.log(response)
           
            resetFormFields()

        }catch(err){
            switch(err.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email') 
                    break
                default:
                    console.log(err)        
            }
            
        }
    }

    return(
        <div>
           <h1>Sign up with your email and password</h1>
           <form onSubmit={handleSubmit}>
              
              

              <FormInput type='email' required value={email} name='email' onChange={handleChange} label='Email' />

              <FormInput type='password' required value={password} name='password' onChange={handleChange} label='Password' />

             
              <div className="buttons-container">
                 
                   <Button type='submit'>Submit</Button>

                   <Button type='button' buttonType='google' onClick={signInWithGoogle}>Sign In With Google</Button>
                 
              </div>
              

           </form>
        </div>
    )
}

export default SignIn