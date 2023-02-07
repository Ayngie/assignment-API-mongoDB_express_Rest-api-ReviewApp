require("dotenv").config();
require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use("/helloWorld", (request, response) => {
  return response.send("Hello World!");
});

const port = process.env.PORT || 5000;

async function run() {
  app.listen(5000, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
run();
