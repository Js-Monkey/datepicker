import Vue from '@vitejs/plugin-vue'
import md from './Doc/src/plugins/md-loader/index'

export default {
  root: './Doc',
  server: {
    port: 8848
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md(),
  ],
}
