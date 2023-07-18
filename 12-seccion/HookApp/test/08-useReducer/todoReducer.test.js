/* eslint-disable no-undef */

import { todoReducer } from "../../src/08-useReducer/todoReducer";



describe('Pruebas en todoReducer', () => {

  const initialState = [{
    id:1,
    description:'Demo todo',
    done: false
  }]

  test('should de regresar el estado inicia', () => {

    const newState = todoReducer( initialState, {});
    expect( newState ).toBe( initialState )
 
  })

  test('debe agregar un todo ', () => { 

    const action= {
      type: '[TODO] Add Todo',
      payload:{
        id:2,
        description:'Nuevo todo #2',
        done: false 
      }
    }
    const newState = todoReducer( initialState, action )
    expect( newState.length ).toBe( 2 )
    expect( newState ).toContain(action.payload)

   })

   test('debe de eliminar un todo', () => { 

    const action = {
      type: '[TODO] Delete Todo',
      payload: 1
    }
    const newState = todoReducer( initialState, action )
    expect( newState.length ).toBe( 0 )

  })

  test('debe de realiar el toggle ', () => { 
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    }
    const newState = todoReducer( initialState, action )
    expect( newState[0].done ).toBe( true )
  })

});
