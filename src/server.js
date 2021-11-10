"use strict";

const express = require("express");
const app = express();
const authRouter = require("./routes/auth.routes");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to auth api project");
});

app.use(authRouter);

function start() {
  app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
  });
}

module.exports = {
  start,
  app,
};
