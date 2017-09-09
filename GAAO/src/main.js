
import Vue from 'vue'
import router from './router'
import 'babel-polyfill'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
// 引入状态机
import store from "./store/index.js"
// 引入项目入口
import index from "./components/index.vue"

//引入高德地图
import VueAMap  from 'vue-amap';
	Vue.use(VueAMap );
	VueAMap .initAMapApiLoader({
		//高德官网申请的Key
	  key: '1d01b9d0eb92533c11679faa12762fcc',
	  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor',"AMap.Geocoder"]
	});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<index/>',
  store,
  components: { index }
})
