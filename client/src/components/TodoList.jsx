import axios from "axios";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BASE_URL } from "../api/api";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { todos, getAllTodos, setInput, setEditId } = props;

  async function deleteTodoHandler(id) {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      getAllTodos();
      document.getElementById("todo_input").focus();
    } catch (error) {
      console.log(error.message);
    }
  }

  function editTodoHandler(id, task) {
    setInput(task);
    setEditId(id);
    document.getElementById("todo_input").focus();
  }

  const renderList =
    todos &&
    todos.map((todo, index) => (
      <TodoItem
        key={uuidv4()}
        index={index}
        todo={todo}
        onDeleteTodo={deleteTodoHandler}
        onEditTodo={editTodoHandler}
      />
    ));

  return <div>{renderList}</div>;
}
