import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAppAuth } from "./config";


const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async() => {


  try {
    
    const result = await signInWithPopup( FirebaseAppAuth, googleProvider )
    // const credentials = GoogleAuthProvider.credentialFromResult( result )
    const { displayName, email, photoURL, uid} = result.user
    // console.log(user)  
    return {
      ok: true,
      displayName, email, photoURL, uid
    }
  
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage
    }
  }
}


export const registerUserWithEmailPassword = async({ email, password, displayName}) =>{
  try {
    

    const resp = await createUserWithEmailAndPassword(FirebaseAppAuth, email, password)
    const { uid, photoURL }= resp.user
    // actualizar el displayname del usuario
    await updateProfile(FirebaseAppAuth.currentUser,{ displayName })

    return {
      ok:true,
      uid,photoURL, email, displayName
    }

  } catch (error) {
    
    return { ok:false,
    errorMessage : error.message}
  }
}


export const loginWithEmailPassword = async(email,password) => {
  // signInWithEmailAndPassword
      try {
        console.log(email,password)
        const resp = await signInWithEmailAndPassword( FirebaseAppAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}
export const logoutFirebase = async() =>{
  return await FirebaseAppAuth.signOut()
}