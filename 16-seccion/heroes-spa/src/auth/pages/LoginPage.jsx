import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {

  const { onLogin } = useContext( AuthContext )
  const navigate = useNavigate()
  
  
  
  const onLoginS = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'
    onLogin( 'Elquin Cascavita' )
    navigate( lastPath ,{ replace: true})
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className=" btn btn-primary"
        onClick={ onLoginS }
      >
        Login
      </button>
    </div>
  )
}
