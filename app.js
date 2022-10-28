//Express and body parser packaage
const express = require("express");
const bodyParser = require("body-parser");

//Creating app constant
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//Tells express to usse EJS as view engine...place below express
app.set("view engine", "ejs");

//Home get Route
app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  console.log(item);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
