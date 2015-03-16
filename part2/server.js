var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.render('layout.ejs',{title: 'hello world', body: 'index.ejs'});
});
app.get('/*',function(req,res){
	res.status(404).render('error.ejs');
});


app.listen(1337);