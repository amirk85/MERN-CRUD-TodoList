const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/todolist";

mongoose.connect(DB);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connected to the DATABASE");
});
