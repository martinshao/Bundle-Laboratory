# Rollup 实验室

## Rollup 入门

安装

```bash
npm install --global rollup
```

最简单打包

```bash
# For browsers
# compile to a <script> containing a self-executing function ('iife')
rollup main.js --file bundle.js --format iife

# For Node.js
# compile to a CommonJS module ('cjs')
rollup --input main.js --output bundle.js --format cjs
rollup main.js --file bundle.js --format cjs

# For both browsers and Node.js
# UMD format requires a bundle name
rollup main.js --file bundle.js --format umd --name "myBundle"
```

命令行参数简介:
输入(input -i/--input)
String 这个包的入口点 (例如：你的 main.js 或者 app.js 或者 index.js)
文件(file -o/--output.file)
String 要写入的文件。也可用于生成 sourcemaps，如果适用
格式(format -f/--output.format)
关于format选项
rollup提供了五种选项:

amd – 异步模块定义，用于像RequireJS这样的模块加载器
cjs – CommonJS，适用于 Node 和 Browserify/Webpack
es – 将软件包保存为ES模块文件
iife – 一个自动执行的功能，适合作为`<script>`标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
umd – 通用模块定义，以amd，cjs 和 iife 为一体

## 使用配置

``` bash
rollup -c rollup.config.js
```

## Doc

* [英文官网](https://rollupjs.org/guide/en/)
* [中文官网](https://www.rollupjs.com/)