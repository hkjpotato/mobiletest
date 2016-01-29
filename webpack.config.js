const webpack = require('webpack');
const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AutoPrefixer = require('autoprefixer');
const AssetBundlePlugin = require('asset-bundle-plugin').default;

const PROD = process.env.NODE_ENV === 'production';

const config = {
  name: 'react-sandbox-boilerplate',
  target: 'web',
  bail: PROD,
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true
  },
  devtool: PROD ? 'hidden-source-map' : 'source-map',
  output: {
    path: path.join(__dirname, 'dist/assets'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  entry: {
    main: './src/main.js',
    vendor: [
      './src/legacy',
      'react',
      'react-router',
      'history',
      'redux',
      'react-redux'
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    modulesDirectories: ['node_modules'],
    fallback: path.join(__dirname, 'node_modules')
  },
  resolveLoader: { fallback: [path.join(__dirname, 'node_modules')] },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [/src/, /node_modules\/nucleus-text/, /node_modules\\nucleus-text/],
        query: {
          presets: [
            require.resolve('babel-preset-es2015-loose'),
            require.resolve('babel-preset-react'),
            require.resolve('babel-preset-stage-0')
          ],
          plugins: [
            require.resolve('babel-plugin-transform-runtime')
          ],
          env: {
            production: {
              plugins: [
                require.resolve('babel-plugin-transform-react-inline-elements'),
                require.resolve('babel-plugin-transform-react-constant-elements')
              ]
            }
          }
        }
      },
      {
        extractTextPlugin: true,
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader',
        { publicPath: '../'}),
        include: /src/
      },
      {
        extractTextPlugin: true,
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader', { publicPath: '../'}),
        include: /resources/
      },
      {
        test: /\.(svg|png|gif|cur)$/,
        loader: 'file?name=images/[name]__[hash:base64:5].[ext]!image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        include: /resources\/images/
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        loader: 'file-loader?name=fonts/[name]_[hash:base64:5].[ext]',
        include: /resources\/font/
      },
      { test: /\.json$/,
        loader: 'json'
      }
    ],
    preLoaders: [
      { test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [/vendor/, /node_modules/]
      }
    ]
  },

  postcss: [
    AutoPrefixer
  ],

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: `"${process.env.NODE_ENV}"` }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new ExtractTextPlugin('css/[name].[contenthash].css', { allChunks: true }),
    new WebpackMd5Hash(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new AssetBundlePlugin({
      bundle: ['vendor', 'main'],
      templates: [ {
        vars: {
          title: 'React Sandbox Boilerplate',
          assetRoot: '/' // inject CDN value here or template value.
        },
        src: './resources/templates/index.html',
        dest: 'index.html' }],
      manifestFile: 'manifest.json'
    })
  ]
};

// Dedupe plugin causes problems with incremental builds, so only include it
// when doing a prod build. https://github.com/webpack/webpack/issues/583
if (PROD) {
  config.plugins.push(new webpack.optimize.DedupePlugin());
}

module.exports = config;
