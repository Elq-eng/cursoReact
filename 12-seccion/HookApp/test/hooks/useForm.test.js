/* eslint-disable no-undef */
import { act, renderHook } from "@testing-library/react";
import { useFormOwn } from "../../src/hooks/useFormOwn";


describe('Pruebas en el useForm', () => {

  const initialValue = {
    name:'ElquinCascavita',
    edad:'23'
  }
  
  test('should return the values by default', () => { 
    const { result } = renderHook( ()=> useFormOwn(initialValue))
    expect( result.current ).toEqual({
      name: initialValue.name,
      edad: initialValue.edad,
      onInputValue: expect.any( Function ),
      onResetValue: expect.any( Function )
    })
  })

  test('should return the values by default', () => { 

    const { result } = renderHook( ()=> useFormOwn(initialValue))
    const { onInputValue } = result.current
    act(()=>{
      onInputValue({ target :{ name:'name', value:'Juan'}})
    })

    expect( result.current.name ).toEqual('Juan')
    
  })


});
