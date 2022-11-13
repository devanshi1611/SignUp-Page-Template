const express = require("express");
const bodyParser = require("body-parser");
const  request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    var firstname = req.body.fs;
    var lastname = req.body.ls;
    var email = req.body.em;
    
    console.log(firstname,lastname,email);
});

app.listen(3000,function(){
    console.log("Server running on Port-3000");
});
