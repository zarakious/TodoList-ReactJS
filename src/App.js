import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [appState, setAppState] = useState("All");
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
        setAppState={setAppState}
        appState={appState}
      />
      <TodoList
        setTodoList={setTodoList}
        todoList={todoList}
        appState={appState}
      />
    </div>
  );
}

export default App;
