import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


// todo: cuando se usa el componente de useCallback es para modificar solo una parte de contenido, dentro del componente debe usa React.memo 


export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    () => {
      setCounter( (value) => value + 1)
    },
    [],
  )
  
  
  return (
    <>
      <h1> useCallback hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ increment } />
    </>
  )
}
