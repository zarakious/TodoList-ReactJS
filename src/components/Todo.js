import React, { useState } from "react";

const Todo = ({ text, id, completed }) => {
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button>
        <i className="fa fa-check"></i>
      </button>
      <button>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Todo;
