import axios from "axios";
import React from "react";
import { BASE_URL } from "../api/api";

export default function TodoForm(props) {
  const { input, setInput, onAddTodo } = props;

  async function submitHandler(e) {
    e.preventDefault();
    const payload = { task: input, completed: false };
    const { data } = await axios.post(BASE_URL, payload);
    onAddTodo((prev) => [...prev, data]);
    setInput("");
  }

  return (
    <form
      style={{ display: "flex", justifyContent: "space-between" }}
      onSubmit={submitHandler}
    >
      <input
        type="text"
        id="todo_input"
        placeholder="add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}
