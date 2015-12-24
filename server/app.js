'use strict';

var express = require('express')
  , http = require('http')
  , conf = require('./conf')
  , setup = require('./setup')
  , debug = require('debug')('votingServer')
  , ioServer = require('./socketIOServer');

var app = module.exports = exports = express();

app.set('trust proxy', true);
app.set('views', conf.path('server/views'));
app.set('view engine', 'jade');

if (require('debug').enabled('votingServer:http_log')) {
  app.use(require('morgan')('dev'));
}

if (!conf.production)
  app.use(require('./routes/dev'));

app.use(require('./routes'));

if (!conf.production)
  app.use(require('errorhandler')());

// Run/shutdown methods

app.run = function (cb) {
  if (!cb)
    cb = function () {};
  app.init(function (err) {
    if (err) return cb(err);
    var _server = http.createServer(app);
    _server.listen(conf.port, conf.ip, function (err) {
      if (err) return cb(err);
      /* eslint-disable no-console*/
      console.log('Visit %s to continue.', conf.host);
      /* eslint-enable no-console*/
      cb();
    });
    ioServer.startServer(_server);
    process.on('SIGINT', app.shutdown);
    process.on('SIGTERM', app.shutdown);
  });
};

app.init = function (cb) {
  setup(cb);
};

app.shutdown = function () {
  ioServer.stopServer();
  process.exit(0);
};
