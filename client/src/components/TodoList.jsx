import axios from "axios";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BASE_URL } from "../api/api";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { todos, getAllTodos } = props;

  async function deleteTodoHandler(id) {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      getAllTodos();
    } catch (error) {
      console.log(error.message);
    }
  }

  const renderList = todos.map((todo) => (
    <TodoItem key={uuidv4()} todo={todo} onDeleteTodo={deleteTodoHandler} />
  ));

  return <div>{renderList}</div>;
}
