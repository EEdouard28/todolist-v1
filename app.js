//Express and body parser packaage
const express = require("express");
const bodyParser = require("body-parser");

//Creating app constant
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

//Tells express to usse EJS as view engine...place below express
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

//Home get Route
app.get("/", function (req, res) {
  var today = new Date();

  //Date format
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  //Renders todays date and new items
  res.render("list", { kindOfDay: day, newListItems: items });
});

//Post request triggered
app.post("/", function (req, res) {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
