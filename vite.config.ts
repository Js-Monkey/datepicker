import Vue from '@vitejs/plugin-vue'
import md from './Doc/src/plugins/md-loader/index'
export default {
  root: './Doc',
  resolve:{
    alias:{
      'vue': "vue/dist/vue.esm-bundler.js"
    }
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md()
  ],
}
