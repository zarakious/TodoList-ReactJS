import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  console.log(todoList);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            completed={todo.completed}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
