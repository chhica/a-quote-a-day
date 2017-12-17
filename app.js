var express = require('express'); //requiring express module
var app = express();  

app.get('/', function(req,res)   //call back in each request incoming to the server
{	
	res.sendFile(__dirname+ '/index.html');//_dirname current dir 
											// in which app.js is located
});

var port = process.env.PORT || 8080;//3000 ;//port number where server listens

//app.listen(port);
var server = app.listen(port, function(req, res)
{
	console.log("Catch the action at http://localhost:"+port);
});



