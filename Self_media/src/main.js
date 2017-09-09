import Vue from 'vue'
import router from './router'

import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'babel-polyfill'

// 引入状态机
import store from "./store/index.js"
// 引入项目入口
import index from "./components/index.vue"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<index/>',
  store,
  components: { index },
 
})
