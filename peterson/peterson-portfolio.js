/*
============================================
; Title:  Personal Portfolio
; Author: Heather Peterson
; Date:   14 March 2018
; Description: 
;===========================================
*/ 

var express = require("express");  
var http = require("http");  
var path = require("path");  
var logger = require("morgan");  

var app = express();  

app.set("views", path.resolve(__dirname, "views"));  
app.set("view engine", "ejs");  

app.use(logger("short"));  

app.get("/", function(request, response) {  
    response.render("index", {  
        message: "home page" 
    });
});

app.get("/about", function(request, response) {  
    response.render("about", {  
        message: "about page"  
    });
});

app.get("/gallery", function(request, response) {  
    response.render("gallery", {  
        message: "gallery page"  
    })
});

http.createServer(app).listen(8080, function() {  
   console.log("Application started on port 8080.");  
});