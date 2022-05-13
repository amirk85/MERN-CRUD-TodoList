import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import axios from "axios";
import { BASE_URL } from "../api/api";
import { Paper, Typography } from "@mui/material";

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
  }, [editId]);

  useEffect(() => {
    document.getElementById("todo_input").focus();
  }, []);

  return (
    <Paper sx={{ marginTop: "1rem" }} style={{ width: "40%" }}>
      <Typography
        variant="h4"
        textAlign={"center"}
        marginTop={"2rem"}
        color="#66757F"
      >
        MERN Todo List
      </Typography>
      <TodoForm
        input={input}
        setInput={setInput}
        onAddTodo={setTodos}
        editId={editId}
        setEditId={setEditId}
      />
      <TodoList
        todos={todos}
        getAllTodos={getAllTodos}
        setInput={setInput}
        setEditId={setEditId}
      />
    </Paper>
  );
}
