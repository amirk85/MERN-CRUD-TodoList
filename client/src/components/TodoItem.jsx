import React from "react";
import { Button, ListItem, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function TodoItem(props) {
  const {
    todo: { _id, completed, task },
    onDeleteTodo,
    onEditTodo,
  } = props;

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
        <Typography variant="h6">{task}</Typography>
      </div>
      <div>
        <Button
          variant="outlined"
          style={{ border: "none" }}
          onClick={() => onEditTodo({ task, _id, completed })}
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
