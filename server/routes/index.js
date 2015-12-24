'use strict';

var conf = require('../conf')
  , express = require('express');

var router = module.exports = new express.Router();

router.use(require('body-parser').urlencoded({
  extended: true
}));

router.get('*', function (req, res) {
  res.render('index');
});
