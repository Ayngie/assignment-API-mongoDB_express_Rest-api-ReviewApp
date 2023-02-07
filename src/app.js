require("dotenv").config();
require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const restaurantRoutes = require("./routes/restaurantRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use("/helloWorld", (request, response) => {
  return response.send("Hello World!");
});

const port = process.env.PORT || 4000;

async function run() {
  app.listen(5001, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
run();
