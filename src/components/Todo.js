import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = ({ text, todo, todoList, setTodoList }) => {
  const deleteHandler = (e) => {
    console.log(todo);
    console.log(todoList);
    setTodoList(todoList.filter((Element) => Element.id !== todo.id));
  };

  const confirmHamdler = () => {
    setTodoList(
      todoList.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button onClick={confirmHamdler}>
        <i className="fa fa-check"></i>
      </button>
      <button onClick={deleteHandler}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Todo;
