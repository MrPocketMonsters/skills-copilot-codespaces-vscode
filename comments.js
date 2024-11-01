// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Set up the server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

// Set up the route
app.get('/comments', function(req, res) {
    fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.log(err);
            res.send('An error occurred');
        } else {
            res.send(data);
        }
    });
});