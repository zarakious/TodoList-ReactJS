import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>k@ltzer0 TODO - List</h1>
      </header>
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
