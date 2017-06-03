require('babel-register');
var express = require('express');
var application = express();

var result = require('./render').default;

application.get('/', function(req, res) {
    res.send(result);
});

application.listen(3005);