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
    // if (avoidDublicate.indexOf(users) === -1) {
    //     avoidDublicate.push(users)
    list.push(users);
    // };
});
app.get('/greeted', function(req, res) {
    // var users = req.params.users;
    res.send(list);
});


app.get('/counter/:users', function(req, res) {
    var users = req.params.users;

    var userCounts = [];

    //loop through all the users
    list.forEach(function(users) {

        //initialize the value in an array
        if (userCounts[users] === undefined) {
            userCounts[users] = 0;
        }
        // increment the counter for each user in the Map
        userCounts[users] = userCounts[users] + 1;
    });
    //test userCounts using terminal
    // console.log((userCounts));
    res.send(users + " " + "has been greeted " + userCounts[users] + " " + 'times')
});




//start the server
var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
