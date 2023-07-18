/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";

import { useFetch } from '../../src/hooks/useFetch'
import { useCounter } from "../../src/hooks/useCounter";


// simular el mock
jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')



describe('pruebas en multiples custom hooks', () => {


  const mockIncrement = jest.fn()

  useCounter.mockReturnValue({
    counter:1,
    increment: mockIncrement
  })

  beforeEach( ()=>{
    jest.clearAllMocks()
  })
  
  
  test('should de mostrar el component', () => { 


    useFetch.mockReturnValue({
      data: null,
      isLoading:true,
      hasError: null
    })


    render( <MultipleCustomHook/>)

    expect( screen.getByText('Loading...'))
    expect( screen.getByText('Breaking bad'))


    const nextButton = screen.getByRole('button',{ name:'Next quote'})

    expect( nextButton.disabled ).toBeTruthy()

   })

   test('should  show an Quote', () => { 


    useFetch.mockReturnValue({
      data: [{author:'Fernando', quote:'Hola mundo'}],
      isLoading:false,
      hasError: null
    })

    render( <MultipleCustomHook/>)
    expect( screen.getByText('Hola mundo')).toBeTruthy()

    const nextButton = screen.getByRole('button',{ name:'Next quote'})

    expect( nextButton.disabled ).toBeFalsy()
   })

   test('should llamar la funcion de incrementar ', () => { 

    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
      counter:1,
      increment: mockIncrement
    })

    useFetch.mockReturnValue({
      data: [{author:'Fernando', quote:'Hola mundo'}],
      isLoading:false,
      hasError: null
    })
    

    render( <MultipleCustomHook/>)
    const nextButton = screen.getByRole('button',{ name:'Next quote'})
    fireEvent.click(nextButton)


    expect( mockIncrement ).toHaveBeenCalled()

  })

});
 