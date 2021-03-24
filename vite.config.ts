import Vue from '@vitejs/plugin-vue'
import md from './Doc/src/plugins/md-loader/index'
import commonjs from '@rollup/plugin-commonjs'

export default {
  root: './Doc',
  server: {
    port: 8848
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    commonjs(),
    md()
  ],
}
