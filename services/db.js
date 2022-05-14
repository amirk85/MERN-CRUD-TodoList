const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/todolist", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB running"))
  .catch((err) => console.log(err));
