import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  // todo: el reducer son las acciones que debe tomar, luego sigue el estado inicial, por ultimo el la accion
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Delete Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
