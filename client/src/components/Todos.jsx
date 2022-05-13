import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import axios from "axios";
import { BASE_URL } from "../api/api";

const DUMMY = [{ id: 1, task: "learn MERN", completed: false }];

export default function Todos() {
  const [todos, setTodos] = useState(DUMMY);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  async function getAllTodos() {
    const { data } = await axios.get(BASE_URL);
    setTodos(data);
  }

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    document.getElementById("todo_input").focus();
  }, []);

  return (
    <div>
      <h1>MERN Todo List</h1>
      <TodoForm input={input} setInput={setInput} onAddTodo={setTodos} />
      <TodoList todos={todos} getAllTodos={getAllTodos} />
    </div>
  );
}
