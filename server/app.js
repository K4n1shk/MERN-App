const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

require("./db/conn");

// const User = require("./model/userSchema");
app.use(express.json());
app.use(require("./router/auth"));

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log(`Middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});
app.get("/about", middleware, (req, res) => {
  res.send(`About`);
});
app.get("/contact", (req, res) => {
  res.send(`Contact`);
});
app.get("/signin", (req, res) => {
  res.send(`Signin`);
});
app.get("/signup", (req, res) => {
  res.send(`Signup`);
});

app.listen(PORT, () => {
  console.log(`Server is running at port no : ${PORT}`);
});
