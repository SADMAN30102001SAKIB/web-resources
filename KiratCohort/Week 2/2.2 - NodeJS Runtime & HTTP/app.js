const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const port = 3000;
//const port = process.env.PORT || 3000;

app.use(express.json()); // middleware
// app.use(bodyParser.json());

app.get("/", function (req, res) {
  console.log(req.query);

  res.status(200).send("Hello Bittu!");
});

// non-blocking
app.get("/wait", function (req, res) {
  setTimeout(() => {
    res.send("Hello Bittu!");
  }, 5000);
});

// blocking
app.get("/hang", function (req, res) {
  let a = 1;
  console.log("request reached start");
  for (let i = 0; i < 10000000000; i++) {
    a++;
  }
  console.log("request finish end");

  res.send("<b>Hello Bittu!</b>");
});

app.post("/conversations", (req, res) => {
  console.log(req.headers.authorization);
  console.log(req.body);

  res.send({
    msg: "Hello Bittu!",
  });
});

app.post("/backend-api/conversation", (req, res) => {
  console.log(req.body.message);

  res.json({
    output: "Hello Bittu!",
  });
});

app.listen(port, function () {
  console.log(
    `Example app listening on port ${port}, so now go to localhost:${port} and check`,
  );
});
