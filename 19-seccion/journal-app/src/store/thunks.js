import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../firebases/providers"
import { checkinCredentials, login, logout } from "./auth/authSlice"

export const checkingAuthentication  = ( email, password ) => {
  return async( dispatch ) => {
    dispatch( checkinCredentials() )
  }
}


export const startGoogleSignIn = () =>{
  return async( dispatch )=>{
    dispatch( checkinCredentials())

    const result  = await singInWithGoogle()
    console.log({result})

    if ( !result.ok) dispatch( logout(result.errorMessage) )
    dispatch( login(result) )
  }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) =>{


  return async( dispatch ) =>{
    dispatch( checkinCredentials())

    const { ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({ email, password, displayName})

    if( !ok ) return dispatch( logout({errorMessage}))

    dispatch( login({ uid, displayName, email, photoURL}))


    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkinCredentials() );
        console.log(email, password)
        const result = await loginWithEmailPassword( email, password );
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}


export const startLogout = () =>{
  return async( dispatch )=>{
    await logoutFirebase()
    dispatch( logout())
  }
}