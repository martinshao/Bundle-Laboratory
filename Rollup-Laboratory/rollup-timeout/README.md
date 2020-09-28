

rollup-plugin-node-resolve ---帮助 Rollup 查找外部模块，然后导入
rollup-plugin-commonjs ---将CommonJS模块转换为 ES2015 供 Rollup 处理
rollup-plugin-replace --- 变量替换，可以将动态设置的变量提取出来在配置文件中设置
rollup-plugin-babel --- 让我们可以使用es6新特性来编写代码
rollup-plugin-terser --- 压缩js代码，包括es6代码压缩
rollup-plugin-eslint --- js代码检测

* [@rollup/plugin-node-resolve](https://www.npmjs.com/package/@rollup/plugin-node-resolve)
* [@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs)
* [@rollup/plugin-replace](https://www.npmjs.com/package/@rollup/plugin-replace)
* [@rollup/plugin-babel](https://www.npmjs.com/package/@rollup/plugin-babel)

* [rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)
* [rollup-plugin-eslint](https://www.npmjs.com/package/rollup-plugin-eslint)

core-js

@babel/core
@babel/preset-env
@babel/plugin-transform-runtime

"rollup": "^1.20.0",
"rollup-plugin-babel": "^4.3.3",
"rollup-plugin-commonjs": "^10.0.0",
"rollup-plugin-eslint": "^7.0.0",
"rollup-plugin-node-resolve": "^5.1.0",
"rollup-plugin-replace": "^2.2.0",
"rollup-plugin-terser": "^5.1.2"

``` bash
npm i @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

npm i eslint -D

npm i rollup -D

npm i @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-replace @rollup/plugin-babel -D

npm i rollup-plugin-terser rollup-plugin-eslint -D
```