'use strict';

var Server = require('socket.io')
  , conf  = require('./conf')
  , store = require('./store');

module.exports.startServer = function (app) {
  var server = module.exports.server = new Server(app);
  server.attach(conf.webSocketPort);

  store.subscribe(
    () => server.emit('state', store.getState().toJS())
  );

  server.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
};

module.exports.stopServer = function () {
  if (module.exports.server)
    module.exports.server.close();
};
