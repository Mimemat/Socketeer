const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

const rootPath = path.resolve(__dirname, '..')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  externals: {
    bufferutil: "bufferutil",
    "utf-8-validate": "utf-8-validate",
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser'],
    plugins: [new TsconfigPathsPlugin()]
  },
  entry: path.resolve(rootPath, 'src', 'App.tsx'),
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(rootPath, 'dist/renderer'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: 4000,
    publicPath: '/'
  },
  output: {
    path: path.resolve(rootPath, 'dist/renderer'),
    filename: 'js/[name].js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'index.html')
    }),
    isDevelopment && new ReactRefreshWebpackPlugin({
      forceEnable: true
    }),
  ].filter(Boolean)
}
