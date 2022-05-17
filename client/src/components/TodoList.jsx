import axios from "axios";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { todos, getAllTodos, setInput, setEditId } = props;

  async function deleteTodoHandler(id) {
    try {
      await axios.delete(`todos/${id}`);
      getAllTodos();
      document.getElementById("todo_input").focus();
    } catch (error) {
      console.log(error.message);
    }
  }

  function editTodoHandler(id, task) {
    setEditId(id);
    setInput(task);
    document.getElementById("todo_input").focus();
  }

  const renderList =
    todos &&
    todos.map((todo) => (
      <TodoItem
        key={uuidv4()}
        todo={todo}
        onDeleteTodo={deleteTodoHandler}
        onEditTodo={editTodoHandler}
      />
    ));

  return <div>{renderList}</div>;
}
