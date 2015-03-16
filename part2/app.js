var express = require('express');

var app = express();

app.get('/about',function(req,res){
	res.send('<h1>About us</h1>');
});

app.get('/about/:title',function(req,res){
	res.send('<h1>'+req.params.title+'</h1>');
});

app.get('/*',function(req,res){
	res.send('<h1>nothing here</h1>');
});

app.listen(1337);