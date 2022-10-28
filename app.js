//Express and body parser packaage
const express = require("express");
const bodyParser = require("body-parser");

//Creating app constant
const app = express();

//Tells express to usse EJS as view engine...place below express
app.set('view engine', 'ejs');

//Home get Route
app.get("/", function (req, res) {
    
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend";
        //render file list & past variable kindofday to value of day
        res.render("list", {kindOfDay: day});
        
    } else {
        day = "Weekday";
    }
    res.render("list", {kindOfDay: day});
});

//listening on port 3000
//process.env.PORT || 
app.listen(3000, function() {
    console.log("Server started on port 3000")
});