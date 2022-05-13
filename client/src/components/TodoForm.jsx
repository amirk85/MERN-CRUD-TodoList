import axios from "axios";
import React from "react";
import { BASE_URL } from "../api/api";

export default function TodoForm(props) {
  const { input, setInput, onAddTodo, editId, setEditId } = props;

  const btnName = editId ? "update" : "add";

  async function submitHandler(e) {
    e.preventDefault();
    if (input.trim().length === 0) return;

    if (!editId) {
      try {
        const payload = { task: input, completed: false };
        const { data } = await axios.post(BASE_URL, payload);
        onAddTodo((prev) => [...prev, data]);
        setInput("");
      } catch (error) {
        const { response } = error;
        alert(response.data);
        setInput("");
      }
    } else {
      try {
        await axios.patch(`${BASE_URL}/${editId}`, { task: input });
        setEditId(null);
        setInput("");
      } catch (error) {
        const { response } = error;
        alert(response.data.message);
        setInput("");
      }
    }
  }

  return (
    <form
      style={{ display: "flex", justifyContent: "space-between" }}
      onSubmit={submitHandler}
    >
      <input
        type="text"
        id="todo_input"
        autoComplete="off"
        placeholder="add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">{btnName}</button>
    </form>
  );
}
