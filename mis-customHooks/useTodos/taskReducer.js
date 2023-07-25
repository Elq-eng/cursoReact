


export const taskReducer = ( initialState, action ) => {
  

  switch (action.type) {
    case '[TODO] Add Task':

      return [...initialState, action.payload]

    case '[TODO] delete task':
      return initialState.filter( task => task.id !== action.payload)
    
    case '[TODO] toggle task':

    return initialState.map( task => {
      if (task.id === action.payload){
        return{
          ...task,
          done: !task.done
        }
      }
      return task
    })
    
    default:
      return initialState
  }

}
