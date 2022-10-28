//Express and body parser packaage
const express = require("express");
const bodyParser = require("body-parser");

//Creating app constant
const app = express();

//Home get Route
app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.sendFile(__dirname + "/weekend.html");
    } else {
        res.sendFile(__dirname + "/weekday.html");
    }
});

//listening on port 3000
app.listen(3000, function() {
    console.log("Server started on port 3000")
});