//Express and body parser packaage
const express = require("express");
const bodyParser = require("body-parser");

//Creating app constant
const app = express();

//Tells express to usse EJS as view engine...place below express
app.set("view engine", "ejs");

//Home get Route
app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error: current day is equal to: " + currentDay);
  }
  res.render("list", {
    kindOfDay: day,
  });
});
//     if (currentDay === 6 || currentDay === 0) {
//         day = "Weekend";
//         //render file list & past variable kindofday to value of day
//         res.render("list", {kindOfDay: day});

//     } else {
//         day = "Weekday";
//     }

//listening on port 3000
//process.env.PORT ||
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
