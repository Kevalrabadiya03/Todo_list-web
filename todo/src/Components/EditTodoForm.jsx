import React, { useState } from "react";

export default function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handelSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is task today"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update value
      </button>
    </form>
  );
}
