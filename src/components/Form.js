import React from "react";
import TodoList from "./TodoList";

const Form = ({ setInputText, inputText, todoList, setTodoList }) => {
  // Here i can write javascript code
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();

    setTodoList([
      ...todoList,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
    console.log("test number one is done ");
    console.log(todoList);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fa fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
