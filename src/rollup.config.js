import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import pkg from './package.json' assert { type: 'json' };

export default [
  // browser-friendly UMD build
  {
    input: 'main.ts',
    output: {
      name: 'main',
      file: `../${pkg.browser}`,
      format: 'umd'
    },
    plugins: [
      terser({ compress: true, format: { comments: false } }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'main.ts',
    external: [],
    plugins: [terser({ compress: true, format: { comments: false } }), typescript({ tsconfig: './tsconfig.json' })],
    output: [
      { file: `../${pkg.main}`, format: 'cjs' },
      { file: `../${pkg.module}`, format: 'es' }
    ]
  },
  {
    input: 'main.d.ts',
    output: [{ file: '../dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
