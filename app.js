//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
var day = "";
app.get("/", function(req, res){
  var today = new Date();
  var currentDay = today.getDay(  );
  switch(currentDay){
    case 0:
      day ="Sunday";
      break;
      case 1:
      day ="Monday";
      break;
      case 3:
      day ="Tuesday";
      break;
      case 4:
      day ="Wednesday";
      break;
      case 5:
      day ="Thursday";
      break;
      case 6:
      day ="Saturday";
      break;
      default : 
      console.log("Error current day equal to :")
  }
  res.render("list", {kindOfDay: day});
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
