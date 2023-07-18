/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/components/TodoItem";


describe('pruebas en TodoItem', () => {

  const todo = {
    id:1,
    description:'piedra del alma',
    don:false
  }

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()
  
  // limpiar todo 
  beforeEach( ()=> jest.clearAllMocks())
  
  test('should de mostrar el todo pendiente de completar', () => { 

    render(<TodoItem
      todo={ todo } 
      onDeleteTodo = {onDeleteTodoMock} 
      onToggleTodo ={ onToggleTodoMock} 
    />)

    const liElement = screen.getByRole('listitem');
    

    expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

    const spanElement = screen.getByLabelText('span')

    expect( spanElement.className ).toContain('align-self-center')
    expect( spanElement.className ).not.toContain('text-decoration-line-through')

   })


   test('should de mostrar el todo completado', () => { 

    todo.done = true

    render(<TodoItem
      todo={ todo } 
      onDeleteTodo = {onDeleteTodoMock} 
      onToggleTodo ={ onToggleTodoMock} 
    />)

    
    const spanElement = screen.getByLabelText('span')
    expect( spanElement.className ).toContain('text-decoration-line-through')

   })


   test('should debe llamar el Toggletodo cuando se hace click', () => { 

    render(<TodoItem
      todo={ todo } 
      onDeleteTodo = {onDeleteTodoMock} 
      onToggleTodo ={ onToggleTodoMock} 
    />)

    const spanElement = screen.getByLabelText('span')
    fireEvent.click( spanElement )

    expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )


    })

    test('el button debe llamar la accion de eliminar', () => { 

      render(<TodoItem
        todo={ todo } 
        onDeleteTodo = {onDeleteTodoMock} 
        onToggleTodo ={ onToggleTodoMock} 
      />)
  
      const deletect = screen.getByLabelText('button')
      fireEvent.click( deletect )
  
      expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )
  
      })
});
