const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HelloWorldPlugin = require('./plugin/HelloWorldPlugin')
const HelloAsyncPlugin = require('./plugin/HelloAsyncPlugin')
const FileListPlugin = require('./plugin/FileListPlugin')
const HelloCompilationPlugin = require('./plugin/HelloCompilationPlugin')
const MyExampleWebpackPlugin = require('./plugin/MyExampleWebpackPlugin')
const ConsoleLogOnBuildWebpackPlugin = require('./plugin/ConsoleLogOnBuildWebpackPlugin')

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ConsoleLogOnBuildWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new MyExampleWebpackPlugin(),
    new HelloWorldPlugin({ options: true }),
    new HelloCompilationPlugin(),
    new HelloAsyncPlugin(),
    new FileListPlugin()
  ]
};