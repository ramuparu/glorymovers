import { useState } from "react"

import { SignInAuthUserWithEmailAndPassword,signInWithGooglePopup } from "../../utils/firebase.utils"

import FormInput from "../form-input/form-input.component"

import Button from "../button/button.component"



import './sign-in-form.styles.scss'
import { useNavigate } from "react-router-dom"

const defaultFormFields = {
    
    email : '',
    password : ''
    
}


const SignIn = ()=>{

    const [formFields,setFormFields] = useState(defaultFormFields)

    const {email,password} = formFields

    const navigate = useNavigate()

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async ()=>{
        await signInWithGooglePopup()
        navigate('/')
    }

    const handleSubmit = async(event)=>{
        event.preventDefault()
        try{
             await SignInAuthUserWithEmailAndPassword(email,password)
             resetFormFields()
             console.log('hi iam navigate')
             navigate('/')

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

    const handleChange = (event)=>{
        const {name,value} = event.target

        setFormFields({...formFields,[name]:value})
    }

    return(
        <div className="sign-up-container">
        <h2>Already have an account?</h2>
           <span>Sign up with your email and password</span>
           <form onSubmit={handleSubmit}>
              
              

              <FormInput type='email' required value={email} name='email' onChange={handleChange} label='Email' />

              <FormInput type='password' required value={password} name='password' onChange={handleChange} label='Password' />

             
              <div className="buttons-container">
                 
                   <Button type='submit'>Submit</Button>

                   <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
                 
              </div>
              

           </form>
        </div>
    )
}

export default SignIn