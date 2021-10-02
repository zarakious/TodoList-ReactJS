import React from "react";
import Select from "../Select";
import TodoList from "./TodoList";

const Form = ({ setInputText, inputText, todoList, setTodoList }) => {
  // Here i can write javascript code
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();

    setTodoList([
      ...todoList,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
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
      <Select todos={todoList} setTodoList={setTodoList} />
    </form>
  );
};

export default Form;
