var express = require('express');
var app = express();

// create a route
app.get('/Hello', function (req, res) {
 res.send('Hello Joe');
});

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('http://localhost:3000/hello', host, port);

});