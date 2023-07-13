import { useContext } from "react"
import { UserContext } from "./context/userContext"

export const LoginPage = () => {

  const  { user,setUser } = useContext( UserContext )

  return (
    <>
      LoginPage

      <pre>
        {
          JSON.stringify(user)
        }
      </pre>

      <button className="btn btn-primary"
        onClick={ ()=> setUser({ id:123, name:'Juan', email:'juan@google.com '})}
      >
        Establecer usuario
      </button>
    
    </>
  )
}
