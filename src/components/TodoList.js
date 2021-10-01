import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList }) => {
  console.log(todoList);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoList.map((todo) => (
          <Todo text={todo.text} id={todo.id} completed={todo.completed} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
