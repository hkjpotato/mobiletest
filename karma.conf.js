var webpack = require('webpack');
var browsers = require('./browsers');
var webpackConfig = require('./webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var testPlugins = [
  new ExtractTextPlugin('css/[name].[contenthash].css', {
    allChunks: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    comments: false
  })
];

webpackConfig.plugins = testPlugins;

module.exports = function (config) {
  config.set({
    singleRun: true,
    customLaunchers: browsers,
    browsers: [
      'Chrome',
      'Firefox',
      'Safari',
      // Uncomment these to run your local virtualbox IE VMs. See https://github.com/xdissent/ievms and https://github.com/xdissent/karma-ievms.
      // Curl command to download and install into virual box automatically (tested with VirtualBox v5.0.8): curl -s https://raw.githubusercontent.com/xdissent/ievms/master/ievms.sh | env IEVMS_VERSIONS=“8 9" REUSE_XP="no" bash
      // 'IE8 - Win7',
      // 'IE9 - Win7'
    ],
    frameworks: ['mocha'],
    files: [
      './node_modules/intl/dist/Intl.min.js',
      './node_modules/console-polyfill/index.js',
      './node_modules/es5-shim/es5-shim.js',
      './node_modules/es5-shim/es5-sham.js',
      './node_modules/html5shiv/dist/html5shiv.min.js',
      './node_modules/babel-polyfill/dist/polyfill.min.js',
      './vendor/getComputedStyle.js',
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: Object.assign(webpackConfig, {
      devtool: 'inline-source-map'
    }),
    webpackServer: {
      noInfo: true
    },
    reporters: ['progress', 'junit'],
    junitReporter: {
      outputDir: '../../junit'
    }
  });

  if (process.env.RUN_BROWSER_STACK) {
    config.browsers = Object.keys(browsers)
    config.browserDisconnectTimeout = 10000
    config.browserDisconnectTolerance = 3
    config.browserNoActivityTimeout = 30000
    config.captureTimeout = 120000
    config.browserStack = {
      username: process.env.BROWSER_STACK_USERNAME,
      accessKey: process.env.BROWSER_STACK_ACCESS_KEY,
      pollingTimeout: 20000,
      startTunnel: true
    }
  }
}