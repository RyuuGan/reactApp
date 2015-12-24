'use strict';

var router = require('../dev')
  , express = require('express')
  , conf = require('../../conf');

router.use('/build', express.static(conf.path('build')));
router.use('/public', express.static(conf.path('public')));
