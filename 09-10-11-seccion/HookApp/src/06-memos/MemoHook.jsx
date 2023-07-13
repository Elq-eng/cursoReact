import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"


// TODO: existen dos tipos de memo uno que esta dado por react y sirve para envolver todo un componente cuando es muy grande y otro que es el useMemo sirve paara memorizar una function y solo se actualice si y solo si cuando la dependencia se actualice

const heavyStuff = ( iterationNumber = 100 ) =>{

  for (let i = 0; i < iterationNumber ; i++) {
    console.log('Ahi vamos...')
  }

  return `${ iterationNumber } iteraciones realizadas` 
}

export const MemoHook = () => {
  
  
  const { counter, increment } = useCounter()
  const [ show, setShow] = useState(true);
  
  const memorizeValue = useMemo(() => heavyStuff(counter), [counter])
  
  
  return (
    <>
      <h1>Counter <small> { counter } </small></h1>
      <hr />


      <h4>{ memorizeValue }</h4>


      <button
      
        className="btn btn-primary"
        onClick={ () => increment() }
      >
        +1
      </button>

      <button className="btn btn-outline-primary" 
      
        onClick={ () => setShow(!show) }
      >
        Show/Hide { JSON.stringify(show)}
      </button>


    
    </>
  )
}
