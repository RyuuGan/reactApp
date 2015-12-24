'use strict';

var webpackMiddleware = require("webpack-dev-middleware")
  , webpack = require('webpack')
  , router = require('../dev')
  , webpackConfig = require('../../../webpack.config')
  , conf = require('../../conf');

var compiler = webpack(webpackConfig);

router.use(webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
}));

router.use(require("webpack-hot-middleware")(compiler));
