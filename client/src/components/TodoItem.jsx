import React from "react";

export default function TodoItem({ todo, onDeleteTodo }) {
  const { _id, task, completed } = todo;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="checkbox" />
        <h4>{task}</h4>
      </div>
      <div>
        <button>edit</button>
        <button onClick={() => onDeleteTodo(_id)}>del</button>
      </div>
    </div>
  );
}
