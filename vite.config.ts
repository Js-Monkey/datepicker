import Vue from '@vitejs/plugin-vue'
import md from './Doc/src/plugins/md-loader'
console.log(md)
export default {
  root: './Doc',
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md()
  ],
}
