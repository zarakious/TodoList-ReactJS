import React, { useState } from "react";

const Select = ({ todos, setTodoList }) => {
  const second = [...todos];
  const handleSelectChange = (e) => {
    if (e.target.value === "completed") {
      let v = second.filter((Element) => Element.completed === true);
      setTodoList(v);
    } else if (e.target.value === "uncompleted") {
      let v = second.filter((Element) => Element.completed === false);
      setTodoList(v);
    } else {
      console.log(second);
    }
    console.log(e.target.value);
    console.log(todos);
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
