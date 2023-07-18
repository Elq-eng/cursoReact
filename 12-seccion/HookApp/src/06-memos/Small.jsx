import { memo } from "react"



export const Small = memo (({value}) => {

  console.log('estamos aqui')
  return (
    <small> {value }</small>
  )
})
