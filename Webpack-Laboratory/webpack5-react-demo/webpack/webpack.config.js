/**** webpack.config.js  ***/

// webpack 默认配置
const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

console.info('path: ', path.resolve(__dirname))
module.exports = {
  // 项目入口文件 支持 str | [] | {}
  entry: path.resolve(__dirname, '../src/index.js'),
  // 项目出口 
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'mian.js'
  },
  // 打包环境 默认是生产环境 production
  // 如果是开发环境 这里需要换成 development
  // 接下来为了观察打包后的文件，使用 development
  mode: 'development',
  // 模块 这些选项决定了如何处理项目中的不同类型的模块。
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {},
        }, ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  // 插件
  plugins: [
    // 复制一个 html 并将最后打包好的资源在 html 中引入
    new HtmlWebpackPlugin({
      // 页面title 需要搭配 ejs 使用
      title: "测试title",
      // html 模板路径
      template: "./public/index.html",
      // 输出文件名称
      filename: "index.html",
      minify: {
        // 压缩HTML⽂件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空⽩符与换⾏符
        minifyCSS: true // 压缩内联css
      }
    }),
    // 每次部署时清空 dist 目录
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({}),
  ],
}