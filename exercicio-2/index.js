var WeDeploy = require('wedeploy');
// var worker = require('worker.js');
var express = require('express');
var morgan = require('morgan');
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.send("Working!");
    // res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(80, function () {
    console.log('Listening on port 80');
});
