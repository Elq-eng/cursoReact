
import { TodoList } from "../components/TodoList";
import { TodoAdd } from "../components/TodoAdd";
import { useTodo } from "../hooks/useTodo";


export const TodoApp = () => {
  const { todos,todosCount,pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo()  

  return (
    <>
      <h1>
        TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* todolist */}
          <TodoList 
          todos={todos} 
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={ handleToggleTodo } />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />

          {/* TodoAdd onNewTodo( todo ) */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
