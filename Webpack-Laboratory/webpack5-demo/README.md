# webpack5 从零到高手

## 基本功能

```bash
mkdir webpack5-demo
cd webpack-demo5
npm init -y
npm install webpack webpack-cli --save-dev
```

然后是一个简单的入口脚本文件和 html 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>webpack 基础探索</title>
  </head>

  <body>
    <script src="main.js"></script>
  </body>
</html>
```

```js
import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  // lodash, 现在通过一个 script 引入
  element.innerHTML = _.join(['Hello ', 'webpack'], '');

  return element;
}

document.body.appendChild(component());
```

然后配置一个 `package.json` 运行脚本

```json
{
  "name": "webpack5-demo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "dev": "webpack --mode development"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.4.0",
    "webpack-cli": "^4.2.0"
  },
  "dependencies": {
    "lodash": "^4.17.20"
  }
}
```

然后执行 `npx webpack` 或者 `npm run dev`

```bash
> webpack5-demo@1.0.0 dev
> webpack --mode development

[webpack-cli] Compilation finished
asset main.js 553 KiB [emitted] (name: main)
runtime modules 1.25 KiB 6 modules
cacheable modules 530 KiB
  ./src/index.js 268 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 372 ms
```

## 资源管理

### CSS 资源加载

首先是对 css 资源的管理，加载 css 需要一系列 loader 解析。

惯例是先安装后配置

```js
npm i style-loader css-loader -D
```

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

然后执行 `npm run dev`，构建成功，万事大吉。

```bash
> webpack5-demo@1.0.0 build
> webpack --config webpack.config.js

[webpack-cli] Compilation finished
asset bundle.js 72.6 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
orphan modules 326 bytes [orphan] 1 module
cacheable modules 539 KiB
  modules by path ./node_modules/ 538 KiB
    ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
    ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]
  modules by path ./src/ 993 bytes
    ./src/index.js + 1 modules 657 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 336 bytes [built] [code generated]
webpack 5.4.0 compiled successfully in 2246 ms
```

### 图片资源加载

图片资源加载可以使用 `file-loader`。

管理是先安装再配置

```bash
npm i file-loader -D
```

```js
module.exports = {
  // other conf......
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
```

然后执行 `npm run dev`，构建成功，万事大吉。

```bash
> webpack5-demo@1.0.0 build
> webpack --config webpack.config.js

[webpack-cli] Compilation finished
asset bundle.js 73.4 KiB [emitted] [minimized] (name: main) 1 related asset
asset cf40d293477f5737b31294c973bece66.png 1.77 KiB [emitted] [immutable] [from: src/icon.png] (auxiliary name: main)
runtime modules 1.82 KiB 6 modules
orphan modules 326 bytes [orphan] 1 module
cacheable modules 540 KiB
  modules by path ./node_modules/ 539 KiB
    modules by path ./node_modules/css-loader/dist/runtime/*.js 2.38 KiB
      ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]
      ./node_modules/css-loader/dist/runtime/getUrl.js 830 bytes [built] [code generated]
    ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
    ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
  modules by path ./src/ 1.54 KiB
    ./src/index.js + 1 modules 832 bytes [built] [code generated]
    ./src/icon.png 80 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 660 bytes [built] [code generated]
webpack 5.4.0 compiled successfully in 2331 ms
```

### 加载 font 字体

font 字体资源可以直接用 `file-loader` 所以直接修改配置就行。

```js
module.exports = {
  // other conf......
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
};
```

然后执行 `npm run dev`，构建成功，万事大吉。

```bash
> webpack5-demo@1.0.0 build
> webpack --config webpack.config.js

[webpack-cli] Compilation finished
assets by status 24.3 KiB [cached] 3 assets
asset bundle.js 73.9 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1.82 KiB 6 modules
orphan modules 326 bytes [orphan] 1 module
cacheable modules 541 KiB
  modules by path ./src/ 2.38 KiB
    ./src/index.js + 1 modules 832 bytes [built] [code generated]
    ./src/icon.png 80 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 1.33 KiB [built] [code generated]
    ./src/my-font-webfont.woff2 82 bytes [built] [code generated]
    ./src/my-font-webfont.woff 81 bytes [built] [code generated]
  modules by path ./node_modules/ 539 KiB
    modules by path ./node_modules/css-loader/dist/runtime/*.js 2.38 KiB
      ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]
      ./node_modules/css-loader/dist/runtime/getUrl.js 830 bytes [built] [code generated]
    ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
    ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 2284 ms
```

### 加载数据

加载数据需要额外引入 `csv-loader` 和 `xml-loader` 等。

按照惯例，先安装后配置

``` bash
npm i csv-loader xml-loader -D
```