/* eslint-disable no-undef */

const { renderHook, act } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");




describe('Pruebas en el useCounter', () => {
  
  test('should return the values by default', () => { 

    const {result } = renderHook( ()=> useCounter())
    const { counter, decrement, increment, reset } = result.current

    expect( counter ).toBe(10)
    expect( decrement ).toEqual( expect.any( Function ))
    expect( increment ).toEqual( expect.any( Function ))
    expect( reset ).toEqual( expect.any( Function ))

  })

  test('should return the values of 100', () => { 

    const {result } = renderHook( ()=> useCounter(100))
    const { counter, decrement, increment, reset } = result.current

    expect( counter ).toBe(100)
    expect( decrement ).toEqual( expect.any( Function ))
    expect( increment ).toEqual( expect.any( Function ))
    expect( reset ).toEqual( expect.any( Function ))

  })

  test('should return  Incremet more One', () => { 

    const {result } = renderHook( ()=> useCounter(100))
    const { counter, increment } = result.current

    act(()=>{
      increment()
      increment(2)

    })
    


    expect( result.current.counter ).toBe(103)

   })


   test('should return  reset more One', () => { 

    const {result } = renderHook( ()=> useCounter(100))
    const { counter, increment,reset } = result.current

    act(()=>{
      increment()
      increment(2)
      reset()

    })
    


    expect( result.current.counter ).toBe(100)

   })

});
