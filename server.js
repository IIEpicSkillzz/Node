var express = require('express');
var path = require('path');
var app = new express ();

var port = 3000;

app.listen(port, function(){
    console.log('listening on port', port)
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
});



