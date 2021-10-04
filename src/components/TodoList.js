import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList, appState }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {appState === "all"
          ? todoList.map((todo) => (
              <Todo
                key={todo.id}
                text={todo.text}
                id={todo.id}
                completed={todo.completed}
                todo={todo}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ))
          : appState === "completed"
          ? todoList.map((todo) =>
              todo.completed ? (
                <Todo
                  key={todo.id}
                  text={todo.text}
                  id={todo.id}
                  completed={todo.completed}
                  todo={todo}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              ) : null
            )
          : todoList.map((todo) =>
              !todo.completed ? (
                <Todo
                  key={todo.id}
                  text={todo.text}
                  id={todo.id}
                  completed={todo.completed}
                  todo={todo}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              ) : null
            )}
      </ul>
    </div>
  );
};

export default TodoList;
