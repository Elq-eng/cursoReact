import { useEffect, useReducer } from 'react';
import { taskReducer } from './taskReducer';

const init = () =>{
  return JSON.parse(localStorage.getItem('Task')) || []
}


export const useTask = () => {
  
  const [TaskAll, dispatch] = useReducer(taskReducer,[],init)

  useEffect(() => {
    localStorage.setItem('Task', JSON.stringify(TaskAll))
  }, [TaskAll]);

  const handleAddTask = (task) =>{
    
    const action = {
      type:'[TODO] Add Task',
      payload: task
    }
    dispatch(action)
  }


  const handleDelete = (id) =>{
    const action = {
      type: '[TODO] delete task',
      payload: id
    }
    dispatch(action)
  }

  const handleToggle = (id) =>{
    const action = {
      type:'[TODO] toggle task',
      payload:id
    }
    dispatch(action)
  }
  
  
  return {
    TaskAll,
    handleDelete,
    handleAddTask,
    handleToggle
  }
}
