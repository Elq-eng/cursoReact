/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { useTodo } from "../../src/hooks/useTodo";
import { TodoApp } from "../../src/08-useReducer/TodoApp";


jest.mock('../../src/hooks/useTodo')

describe('Pruebas en TodoApp ', () => {

  useTodo.mockReturnValue({
    todos:[ { id:1 , description:'todo#1', done:false},{ id:2 , description:'todo#12', done:false}],todosCount:2,pendingTodosCount:1, handleNewTodo: jest.fn(), 
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn()
  })
  

  test('should de mostrar el componente correctamente', () => { 
    render( <TodoApp/>)
    // screen.debug()
    expect( screen.getByText('todo#1')).toBeTruthy()
  })
});
