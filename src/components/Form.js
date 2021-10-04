import React from "react";
import Select from "./Select";

const Form = ({
  setInputText,
  inputText,
  todoList,
  setTodoList,
  appState,
  setAppState,
}) => {
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
      <Select
        todos={todoList}
        setTodoList={setTodoList}
        appState={appState}
        setAppState={setAppState}
      />
    </form>
  );
};

export default Form;
