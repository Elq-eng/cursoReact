
// todo estado incial
const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del alma',
  done: false
}];


// todo reducer
const todoReducer = ( state = initialState, action ) => {

  if ( action === '[TODO] add todo'){
    return [...state, action.payload]
  }

  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del tiempo',
  done: false
}

// todo: action
const addTodoAction = {
  type:'[TODO] add todo',
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction)



console.log({state:todos})