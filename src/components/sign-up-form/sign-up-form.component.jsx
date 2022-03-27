import { useState } from "react"

import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase.utils"

import FormInput from "../form-input/form-input.component"

import Button from "../button/button.component"

const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const SignUp = ()=>{

    const [formFields,setFormFields] = useState(defaultFormFields)

    const [displayName,email,password,confirmPassword] = formFields

    console.log(formFields)

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const handleChange = (event)=>{
        const {name,value} = event.target

        setFormFields({...formFields,[name]:value})
    }

    const handleSubmit = async(event)=>{
        event.preventDefault()

        if(password!== confirmPassword){
            alert('passwords do not match')
            return;
        }
        try{
            const {user} =await createAuthUserWithEmailAndPassword(email,password)

            await createUserDocumentFromAuth(user,{displayName})
            resetFormFields()

        }catch(err){
            if(err.code==='auth/email-already-in-use'){
                alert('cannot create user email already in use')
            }
            console.log('user creation encountered error',err)
        }
    }

    return(
        <div>
           <h1>Sign up with your email and password</h1>
           <form onSubmit={handleSubmit}>
              
              <FormInput type='text' required value={displayName} name='displayName' onChange={handleChange} label='Display Name' />

              <FormInput type='email' required value={email} name='email' onChange={handleChange} label='Email' />

              <FormInput type='password' required value={password} name='password' onChange={handleChange} label='Password' />

              <FormInput type='password' required value={confirmPassword} name='confirmPassword' onChange={handleChange} label='Confirm Password' />
              
              <Button type='submit' buttonType='inverted'>Submit</Button>

           </form>
        </div>
    )
}

export default SignUp