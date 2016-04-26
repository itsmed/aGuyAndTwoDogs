var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var fs = require('fs');
var Promise = require('bluebird');


var app = express();
var router = require('router');
var publicPath = path.resolve(__dirname, 'public');
var config = require('config');

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));

router(app);
