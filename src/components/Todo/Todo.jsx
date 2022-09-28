import React from "react";
import TodoModuleCSS from "./Todo.module.scss";
import TodosStyles from "../Todos/Todos.module.scss";

const Todo = ({ id, todo, completed, handleCompleteTodo }) => {
  return (
    <>
      <input
        type="checkbox"
        htmlFor={id}
        className={TodoModuleCSS.completeTodo}
        checked={completed}
        onChange={() => {}}
      />
      <span
        className={TodosStyles.checkmark}
        onClick={() => handleCompleteTodo(id)}
      ></span>
      <li
        key={id}
        className={`${TodoModuleCSS.todoName} ${completed ? "strike" : ""}`}
      >
        {todo}
      </li>
    </>
  );
};

export default Todo;
