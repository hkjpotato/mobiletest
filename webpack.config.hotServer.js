const webpack = require('webpack');
const path = require('path');
const AutoPrefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'mobile-speedrfp',
  target: 'web',
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true
  },
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'dist/assets'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  entry: {
    main: ['webpack-hot-middleware/client', './src/main.js'],
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
            development: {
              plugins: [
                ['react-transform', {
                  transforms: [{
                    transform: 'react-transform-hmr',
                    imports: ['react'],
                    locals: ['module']
                  }, {
                    transform: 'react-transform-catch-errors',
                    imports: ['react', 'redbox-react']
                  }]
                }]
              ]
            }
          }
        }
      },
      {
        extractTextPlugin: true,
        test: /\.less$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader',
        include: /src/
      },
      {
        extractTextPlugin: true,
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader',
        include: /resources/
      },
      {
        test: /\.(svg|png|gif|cur|jpg)$/,
        loader: 'file?name=images/[name]__[hash:base64:5].[ext]!image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        include: [/resources\/images/, /resources\\images/]
      },
      {
        test: /\.(ttf|eot|svg|woff|otf|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[name]_[hash:base64:5].[ext]',
        include: [/resources\/font/, /resources\\font/]
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
    new HtmlWebpackPlugin({
      filename: '../../public/index.html',
      template: 'resources/templates/index-hot-reloading.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
