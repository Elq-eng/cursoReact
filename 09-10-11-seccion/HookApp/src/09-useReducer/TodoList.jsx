import { TodoItem } from "./TodoItem"


/* eslint-disable-next-line react/prop-types */
export const TodoList = ({ TaskAll=[], onDetele , onToggle}) => {
  
  return (
    <ul className="list-group">
      {
        TaskAll && TaskAll.map( (task) =>(
        <TodoItem task={task} onDelete={onDetele} onToggle={onToggle} key={task.id}/>
        
      ))
}
    </ul>
  )
}
