'use strict';

var Configuration = require('iconf');

/**
 * You should change:
 *
 * 1. `port` app will be running on,
 * 2. `host`
 * 3. all occurrences of `yourapp` references
 */

var conf = module.exports = exports = new Configuration({

  root: process.cwd(),

  ip: '127.0.0.1',

  port: 3333,

  host: {
    development: '127.0.0.1:3333',
    production: '127.0.0.1:3333'
  },

  webSocketPort: 8090,

  workers: {
    development: 1,
    production: 8
  },

  cookies: {
    secret: 'Type something cool here'
  },

  session: {
    tti: 86400
  },

  uploadFileSizeLimit: 5 * 1024 * 1024

});

Object.defineProperty(conf, 'origin', {
  get: function () {
    return '//' + this.host;
  }
});
