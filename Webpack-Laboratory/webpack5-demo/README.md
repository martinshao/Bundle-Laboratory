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
