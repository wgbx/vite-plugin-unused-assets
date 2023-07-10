import NodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const name = 'vite-plugin-unused-assets'

export default {
  input: './packages/index.ts',
  output: [
    {
      name,
      file: 'dist/vite-plugin-unused-assets.cjs',
      format: 'cjs',
      plugins: [terser()]
    },
    {
      name,
      file: 'dist/vite-plugin-unused-assets.mjs',
      format: 'es',
      plugins: [terser()]
    }
  ],
  plugins: [
    NodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    typescript({ outDir: 'dist/' })
  ],
}
