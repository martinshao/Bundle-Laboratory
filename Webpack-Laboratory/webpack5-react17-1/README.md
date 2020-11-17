# React17 + Webpack5 + Babel

In this tutorial you'll learn:

- how to install and configure webpack
- how to install and configure Babel
- how to install React
- how to include the resulting bundle into an HTML page
- how to install and configure webpack dev server

Enjoy the reading!

```bash
// webpack 骨架
npm i webpack webpack-cli --save-dev

// Babel骨架
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

Babel 配置 `.babelrc`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

`webpack.config.js` 配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

## 引入 React

```bash
npm i react react-dom -S
```

## Webpack 插件

```bash
npm i html-webpack-plugin html-loader -S
```

```js
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      // other ......
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
```

**src/index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>How to set up React, Webpack, and Babel</title>
  </head>
  <body>
    <div id="container"></div>
  </body>
</html>
```

## webpack dev server

```bash
npm i webpack-dev-server -D
```

```json
"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack --mode production"
}
```
