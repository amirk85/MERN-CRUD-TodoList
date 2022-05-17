const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
require("./db");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
