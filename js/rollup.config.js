import pkg from './package.json'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'umd',
        exports: 'default',
        name: 'Swanalekha'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      esbuild({
        sourceMap: true,
        minify: true
      }),
      terser()
    ]
  }
]
