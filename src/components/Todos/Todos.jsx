import React, { useEffect, useState } from "react";
import TodosStyles from "../Todos/Todos.module.scss";
import Todo from "../Todo/Todo";
import Footer from "../Footer/Footer";

const Todos = () => {
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([]);

  const [displayTodos, setDisplayTodos] = useState(todos);

  useEffect(() => {
    setDisplayTodos(todos);
  }, [todos]);

  const handleOnEnter = (e) => {
    const isEnterKeyPressed = e.code === "Enter";
    if (isEnterKeyPressed && value) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length + 1, todo: value, completed: false },
      ]);
      setValue("");
    }
  };

  const handleCompleteTodo = (id) => {
    const completedTodos = [...todos];
    completedTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(completedTodos);
  };

  const handleButtonsAction = (action) => {
    switch (action) {
      case "all":
        return setDisplayTodos(todos);
      case "active": {
        setDisplayTodos(() => todos.filter((todo) => !todo.completed));
        break;
      }
      case "completed": {
        setDisplayTodos(() => todos.filter((todo) => todo.completed));
        break;
      }
    }
  };

  const handleCompleteClear = () => {
    const completed = todos.filter((todo) => !todo.completed);
    setTodos(completed);
  };

  const isCompletedTaskPreset = todos.some((todo) => todo.completed);

  return (
    <div className={TodosStyles.container}>
      <div>
      <h1 className={TodosStyles.text}>todos</h1>
      <input
        type="text"
        onKeyDown={handleOnEnter}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={TodosStyles.input}
        placeholder="What needs to be done?"
      />
      <ul className={TodosStyles.todoContainer}>
        {displayTodos.map(({ id, todo, completed }, index) => (
          <div key={index} className={TodosStyles.todo}>
            <Todo
              id={id}
              completed={completed}
              todo={todo}
              handleCompleteTodo={handleCompleteTodo}
            />
          </div>
        ))}
      </ul>
      <Footer
        todoCount={displayTodos.length}
        handleButtonsAction={handleButtonsAction}
        isCompletedTaskPreset={isCompletedTaskPreset}
        handleCompleteClear={handleCompleteClear}
      />
      </div>
    </div>
  );
};

export default Todos;
