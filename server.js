
var express = require("express");   
var exphbs = require("express-handlebars");    
                            
var bodyParser = require("body-parser");                            

var routes = require("./controllers/burgers_controller.js");      

var app = express();                       git 
     
var PORT = process.env.PORT || 8080;                              

app.use(express.static("public"));                                

app.use(bodyParser.json());                                         
app.use(bodyParser.urlencoded({ extended: true }));                 

app.engine("handlebars", exphbs({                                 
    defaultLayout: "main"                                        
}));

app.set("view engine", "handlebars");                               

app.use(routes);                                                 

app.listen(PORT, function(){                             
console.log("Listening on Port: " + PORT);
});