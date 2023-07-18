import { useState } from 'react'


export const useFormOwn = (initialState = {}) => {
  
  const [inputValue, setInputValue] = useState(initialState);

  const onInputValue = ({target}) => {
    const { name, value } = target
    setInputValue({
      ...inputValue,
      [ name ]: value 
    })
  }

  const onResetValue = () =>{
    setInputValue( initialState )
  }
  
  
  return {
    ...inputValue,
    onInputValue,
    onResetValue
  }
}
