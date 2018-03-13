var express = require("express");  // assigning express require statement to express variable
var http = require("http");  // assigning http require statement to http variable
var path = require("path");  // assigning path require statement to path variable
var logger = require("morgan");  // assigning morgan require statement to logger variable

var app = express();  // assigning express statement to app variable

app.set("views", path.resolve(__dirname, "views"));  // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs");  // Tell Express to use the EJS view engine

app.use(logger("short"));  // Tell Express to add the logger

app.get("/main", function(request, response) {  // HTTP with get request with '/' route function that accepts a request and has a response
    response.render("main", {  //output to the indexed ejs page
        message: "MAIN"  // output message
    });
});

app.get("/about", function(request, response) {  // HTTP with get request with '/about' route function that accepts a request and has a response
    response.render("about", {  //output to the indexed ejs page
        message: "ABOUT"  // output message
    });
});

app.get("/gallery", function(request, response) {  // HTTP with get request with '/contact' route function that accepts a request and has a response
    response.render("gallery", {  //output to the indexed ejs page
        message: "GALLERY"  // output message
    })
});

http.createServer(app).listen(9998, function() {  // creates the server to listen on port 8080
   console.log("Application started on port 9998.");  // logs output message on port 8080
});