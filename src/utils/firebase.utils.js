
import {initializeApp} from 'firebase/app'
import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCEyP2aN6810RWXi2obOkOj-AM8SqsirEY",
    authDomain: "glorymovers-601d4.firebaseapp.com",
    projectId: "glorymovers-601d4",
    storageBucket: "glorymovers-601d4.appspot.com",
    messagingSenderId: "204775802888",
    appId: "1:204775802888:web:6e121eb78c6a21e467a9bd"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const googleProvider = new GoogleAuthProvider()

  googleProvider.setCustomParameters({
      prompt : "select_account"
  })

  export const auth = getAuth()

  export const signInWithGooglePopup =()=> signInWithPopup(auth,googleProvider)

  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth,additionalParams={})=>{
      if(!userAuth) return;
        const userDocRef = doc(db,'users',userAuth.uid)
        
        
        const userSnapshot = await getDoc(userDocRef)

        

        if(!userSnapshot.exists()){
            const {displayName,email} = userAuth 
            const createdAt = new Date()

            try{
                await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt,
                    ...additionalParams
                })
            }catch(err){
                console.log('error creating the user')
            }
        } 
        return userDocRef
  }

export const createAuthUserWithEmailAndPassword =async (email,password)=>{
     if(!email || !password) return;
     
     return await createUserWithEmailAndPassword(auth,email,password)
}  

export const SignInAuthUserWithEmailAndPassword =async (email,password)=>{
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth,email,password)
} 
