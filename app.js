var express = require('express');
var http = require('http');

var app = express();

app.configure(function() {
  app.use(express.bodyParser());
});

app.get('/', function (req, res) {
    res.send("hello world");
    
});
app.post('/coord', function (req, res) {
	console.log(req.body);      // your JSON
    

});

console.log("escutando na porta 8080")
app.listen(process.env.PORT || 8080);