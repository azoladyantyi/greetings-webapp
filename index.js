var express = require('express');
var app = express();
var list = [];
var avoidDublicate = [];


// create a route
app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/greetings/:users', function(req, res) {
    res.send('Hello ' + req.params.users);
    var users = req.params.users
    if (avoidDublicate.indexOf(users) === -1) {
        avoidDublicate.push(users)
        list.push(users);
    };
});
app.get('/greeted', function(req, res) {
    res.send(avoidDublicate);

});
app.get('/counter/:users', function(req, res) {
    var users = req.params.users;
    //creat a variable and asign it as 0
    var counter = 0;
    //createa for loop
    for (var i = 0; i < list.length; i++) {
        if (list[i].users = users) {
            counter++;
        }
    }
    res.send(users + " " + "has been greeted " + counter++ + " " + 'times')
});

//start the server
var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
