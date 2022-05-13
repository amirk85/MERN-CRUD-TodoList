const express = require("express");
const Todos = require("../models/todoSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allTodos = await Todos.find();
    res.status(200).json(allTodos);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const existedTodo = await Todos.findOne({ task: req.body.task });
    if (existedTodo) {
      res.send("Already added!");
    } else {
      const newTodo = new Todos(req.body);
      await newTodo.save();
      res.status(201).json(newTodo);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todos.findByIdAndDelete(id);
    res.status(204).json(deletedTodo);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
