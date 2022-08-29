import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import path from 'path'
import pkg from './package.json'
const name = 'RollupTsTemplate'

export default {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    {
      file: pkg.umd,
      format: "umd",
      name: "utilibs",
      sourcemap: true,
    },
    {
      name,
      file: pkg.main,
      format: 'cjs',
    },
    {
      name,
      file: pkg.module,
      format: 'es',
    },
  ],
  // output: {
  //   file: "dist/index.js",
  //   format: "umd",
  //   name: "utilibs",
  //   sourcemap: true,
  // },
  plugins: [
    // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript(), // 解析TypeScript
    babel({ babelHelpers: "bundled" }), // babel配置,编译es6
  ],
};
