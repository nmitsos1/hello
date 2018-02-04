require('dotenv').config();
var PORT = process.env.PORT;

var express = require('express');
var app = express();

// var app is now an http server

// parameter 1 is a port number
app.listen(PORT, function () {
    console.log('Server is up and running on port 3000');
});

app.get('/', function(request, response){
    response.send("Hello World");
});
