
import {initializeApp} from 'firebase/app'
import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider} from 'firebase/auth'

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

  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
      prompt : "select_account"
  })

  export const auth = getAuth()

  export const signInWithGooglePopup =()=> signInWithPopup(auth,provider)

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth)=>{
        const userDocRef = doc(db,'users',userAuth.uid)
        
        console.log(userDocRef)
        const userSnapshot = await getDoc(userDocRef)

        console.log(userSnapshot)
        console.log(userSnapshot.exists())

        if(!userSnapshot.exists()){
            const {displayName,email} = userAuth 
            const createdAt = new Date()

            try{
                await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt
                })
            }catch(err){
                console.log('error creating the user')
            }
        } 
        return userDocRef
  }
