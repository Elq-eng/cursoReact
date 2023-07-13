import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { useTask } from "../hooks/useTask"



export const TodoApp = () => {

  const { TaskAll, handleDelete, handleAddTask, handleToggle } = useTask() 

  return (
    <>
      <h1>Todo App, <span>Completadas 10 </span>, <span>Pendientes 10</span></h1>
      <hr />

      <section className="row">
        <div className="col-7">
            <TodoList 
              TaskAll={TaskAll}
              onDetele={handleDelete}
              onToggle={handleToggle}
              />
        </div>
        <div className="col-5">
          <TodoAdd onNewTask={handleAddTask}/>
        </div>


      </section>


    </>
  )
}
