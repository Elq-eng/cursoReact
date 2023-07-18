/* eslint-disable react/prop-types */
import { useFormOwn } from "../hooks/useFormOwn"

export const TodoAdd = ({ onNewTask }) => {

  const { Task, onInputValue, onResetValue } = useFormOwn({Task:''})


  
  const onFormSubmit = ( e ) =>{
    e.preventDefault()
    if(Task.length < 1 ) return
    const newTaskStore = {
      id: new Date().getTime(),
      Task: Task,
      done: false
    }
    
    onNewTask(newTaskStore)
    onResetValue()
  }
  
  
  return (
    <>
      <form  onSubmit={onFormSubmit}>
            <h3>Agregar Task</h3>
            <input 
              type="text"
              className="form-control"
              placeholder="Agrega tareas por hacer hoy" 
              name="Task"
              value={Task}
              onChange={onInputValue}
              />
              
              <button
                type="submit"
                className="btn btn-primary mt-1"
                >
                Agregar
              </button>
      </form>
    </>
  )
}
