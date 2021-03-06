import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'lib/index.js',
    output: {
      name: 'babel-plugin-inferno',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve(),  // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
        "presets": [
          [
            "@babel/preset-env",
            {
              "targets": {
                "ie": "11"
              }
            }
          ]
        ]
      }),
      uglify()
    ]
  }
];
