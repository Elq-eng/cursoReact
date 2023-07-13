import { useContext } from "react"
import { UserContext } from "./context/userContext"

export const HomePage = () => {

  const  { user } = useContext( UserContext )

  return (
    <>
      HomePAge
      <hr />
      <code>
        {
          JSON.stringify(user)
        }
      </code>
    </>
  )
}
