import {
  nodeResolve
} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import {
  terser
} from 'rollup-plugin-terser';
import {
  eslint
} from 'rollup-plugin-eslint';
import filesize from 'rollup-plugin-filesize';

// 处理node的内置模块,发布node的第三方{builtins, globals}
// import builtins from 'rollup-plugin-node-builtins';
// import globals from 'rollup-plugin-node-globals';

import pkg from './package.json'

const isDev = process.env.NODE_ENV !== 'production'

export default [{
    input: 'src/main.js',
    output: {
      name: 'sleep',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: ['src/**'],
        exclude: ['node_modules/**']
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
      }),
      filesize(),
      !isDev && terser()
    ]
  },
  {
    input: 'src/main.js',
    external: ['ms'],
    output: [{
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ]
  }
]