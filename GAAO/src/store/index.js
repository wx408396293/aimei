import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
//登录管理
import login from "./login/login.js"
//账户管理
import account from "./account/account.js"
//用户管理
import users from "./userManagement/users.js"
import titleList from "./userManagement/titleList.js"
import friendRelationship from "./userManagement/friendRelationship.js"
import assetQuery from "./userManagement/assetQuery.js"
//作品管理
import works from "./worksManagement/works.js"
import Special from "./worksManagement/Special.js"
import Selected from "./worksManagement/Selected.js"
//音频素材管理
import audiomaterialist from "./audioMaterial/audioMaterial.js"
//标签管理
import labelList from "./labelmanagement/labelList.js"
//运营管理
import popList from "./operationManagement/popList.js"
import bannerList from "./operationManagement/bannerList.js"
import addBanner from "./operationManagement/addBanner.js"
import createSpecial from "./operationManagement/createSpecial.js"
import specialList from "./operationManagement/specialList.js"
import artistList from "./operationManagement/artistList.js"
//精选管理
import selecteds from "./operationManagement/selecteds.js"
import addSelecteds from "./operationManagement/addSelecteds.js"
//礼物管理
import addgift from "./giftManagement/addgift.js"
//充值消费管理
import rchargeQuert from "./financeManagement/rchargeQuert.js"
import consumeQuery from "./financeManagement/consumeQuery.js"
//艺人管理
import pendingList from "./artistManagement/pendingList.js"
import mechanismList from "./artistManagement/mechanismList.js"
//系统通知公告
import notificationlist from "./systemNotification/notificationlist.js"
import addnotification from "./systemNotification/addnotification.js"
//举报与反馈
import report_and_feedback from "./reportandfeedback/report_and_feedback.js"


const store = new Vuex.Store({
	modules:{
		login,
		account,
		users,
		friendRelationship,
		assetQuery,
		popList,
		bannerList,
		addBanner,
		createSpecial,
		specialList,
		artistList,
		selecteds,
		addSelecteds,
		pendingList,
		mechanismList,
		rchargeQuert,
		consumeQuery,
		notificationlist,
		addnotification,
		works,
		Special,
		Selected,
		titleList,
		addgift,
		audiomaterialist,
		labelList,
		report_and_feedback,
	}
})
export default store;