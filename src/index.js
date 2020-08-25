const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/add", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  let sum;
  let data;
  if (
    typeof num1 !== "string" &&
    num1 <= 1000000 &&
    typeof num2 !== "string" &&
    num2 <= 1000000
  ) {
    sum = num1 + num2;
  }
  if (num1 > 1000000 || num2 > 1000000 || sum > 1000000) {
    data = { status: "error", message: "Overflow" };
  } else if (typeof num1 === "string" || typeof num2 === "string") {
    data = { status: "error", message: "invalid data types" };
  } else {
    data = {
      status: req.body.statusCode !== 404 ? "Successful" : "Failed",
      message: "The sum of given two numbers",
      sum: sum,
    };
  }

  return res.send(data);
});

app.post("/sub", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  let diff;
  let data;
  if (typeof num1 !== "string" && typeof num2 !== "string") {
    diff = num1 - num2;
  }
  if (diff < -1000000) {
    data = { status: "error", message: "underflow" };
  } else if (typeof num1 === "string" || typeof num2 === "string") {
    data = { status: "error", message: "invalid data types" };
  } else {
    data = {
      status: req.body.statusCode !== 404 ? "Successful" : "Failed",
      message: "The difference of given two numbers",
      sum: diff,
    };
  }

  return res.send(data);
});

app.post("/multiply", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  let product;
  let data;
  if (
    typeof num1 !== "string" &&
    num1 <= 1000000 &&
    typeof num2 !== "string" &&
    num2 <= 1000000
  ) {
    product = num1 * num2;
  }
  if (num1 > 1000000 || num2 > 1000000 || product > 1000000) {
    data = { status: "error", message: "Overflow" };
  } else if (typeof num1 === "string" || typeof num2 === "string") {
    data = { status: "error", message: "invalid data types" };
  } else {
    data = {
      status: req.body.statusCode !== 404 ? "Successful" : "Failed",
      message: "The product of given two numbers",
      sum: product,
    };
  }

  return res.send(data);
});

app.post("/divide", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  let div;
  let data;
  if (
    typeof num1 !== "string" &&
    num1 <= 1000000 &&
    typeof num2 !== "string" &&
    num2 <= 1000000
  ) {
    div = num1 / num2;
  }
  if (num2 === 0) {
    data = { message: "Cannot divide by zero" };
  } else if (typeof num1 === "string" || typeof num2 === "string") {
    data = { status: "error", message: "invalid data types" };
  } else {
    data = {
      status: req.body.statusCode !== 404 ? "Successful" : "Failed",
      message: "The division of given two numbers",
      sum: div,
    };
  }

  return res.send(data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
