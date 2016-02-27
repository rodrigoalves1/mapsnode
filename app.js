var express = require('express');
var http = require('http');

var app = express();


app.get('/', function (req, res) {
    res.send("teste node.js");
});

console.log("escutando na porta 8080")
app.listen(process.env.PORT || 8080);