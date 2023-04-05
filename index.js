const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const userRoutes = require("./routers/userRouters");
const noteRoutes = require("./routers/noteRouters");

const app = express();

app.use(cors());
app.use(express.json());

const DB = process.env.DB;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("DB not connected");
  });

let port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running..`);
});

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
