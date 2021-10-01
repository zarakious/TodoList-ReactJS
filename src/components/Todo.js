import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = ({ text, todo, todoList, setTodoList }) => {
  const deleteHandler = (e) => {
    console.log(todo);
    console.log(todoList);
    setTodoList(todoList.filter((Element) => Element.id !== todo.id));
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button>
        <i className="fa fa-check"></i>
      </button>
      <button onClick={deleteHandler}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Todo;
