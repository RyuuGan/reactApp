'use strict';

var express = require('express');

module.exports = new express.Router();

require('./webpack');
require('./static');
