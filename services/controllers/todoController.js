const Todos = require("../models/todoSchema");

exports.getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todos.find();
    res.status(200).json(allTodos);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.createTodo = async (req, res) => {
  const existedTodo = await Todos.findOne({ task: req.body.task });
  if (existedTodo) {
    res.status(404).json("Already added!");
  } else {
    try {
      const newTodo = new Todos(req.body);
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(404).send(error);
    }
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todos.findByIdAndUpdate(id, {
      task: req.body.task,
    });
    res.status(203).json("updated!");
  } catch (error) {
    res.status(404).json({ message: "Already Added" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todos.findByIdAndDelete(id);
    res.status(204).json(deletedTodo);
  } catch (error) {
    res.status(404).json(error);
  }
};
