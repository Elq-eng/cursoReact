import { useContext } from "react"
import { UserContext } from "./context/userContext"

export const HomePage = () => {

  const  { user } = useContext( UserContext )

  return (
    <>
      HomePAge
      <hr />
      <code aria-label="user">
        {
          JSON.stringify(user)
        }
      </code>
    </>
  )
}
