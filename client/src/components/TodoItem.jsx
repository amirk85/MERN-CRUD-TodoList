import React from "react";
import { Button, ListItem, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Checkbox from "@mui/material/Checkbox";

export default function TodoItem({ todo, onDeleteTodo, onEditTodo, index }) {
  const { _id, task, completed } = todo;
  return (
    <ListItem
      button
      divider
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox />
        <Typography variant="h6">{task}</Typography>
      </div>
      <div>
        <Button
          variant="outlined"
          style={{ border: "none" }}
          onClick={() => onEditTodo(_id, task)}
        >
          <ModeEditIcon />
        </Button>
        <Button
          variant="outlined"
          color="error"
          style={{ border: "none" }}
          onClick={() => onDeleteTodo(_id)}
        >
          <DeleteForeverIcon />
        </Button>
      </div>
    </ListItem>
  );
}
