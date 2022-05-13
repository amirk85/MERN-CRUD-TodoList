import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todos() {
  return (
    <div>
      <h1>MERN Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
