/* eslint-disable react/prop-types */


export const TodoItem = ({ task: task, onDelete, onToggle}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <h4 onClick={()=>{onToggle(task.id)}} className={`align-self-center ${ (task.done) ? 'text-decoration-line-through' :''} `}>{task.Task}</h4>
      <button 
        onClick={()=>{ onDelete(task.id)}}
        className="btn btn-danger">Borrar </button>
      <hr />
    </li>
  )
}
