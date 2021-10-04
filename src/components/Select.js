import React, { useState } from "react";

const Select = ({ todos, setTodoList, setAppState }) => {
  const handleSelectChange = (e) => {
    setAppState(e.target.value);
  };
  return (
    <div className="select">
      <select
        onChange={handleSelectChange}
        name="todos"
        className="filter-todo"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Select;
