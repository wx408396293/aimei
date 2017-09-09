import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
//登录管理
import login from "./login/login.js"
//自媒体
import createSpecial from "./operationManagement/createSpecial.js"
import specialList from "./operationManagement/specialList.js"
import publishworks from "./operationManagement/publishworks.js"
//作品管理
import works from "./worksManagement/works.js"
import Special from "./worksManagement/Special.js"
import Selected from "./worksManagement/Selected.js"

const store = new Vuex.Store({
	modules:{
		login,
		createSpecial,
		specialList,
		works,
		Special,
		Selected,
		publishworks,
	}
})
export default store;