import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import login from "../components/login/login.vue"
import info from "../components/info/info.vue"
//账户管理
const addAccount = r => require.ensure([], () => r(require('@/components/info/account/addAccount')), 'addAccount');
const accountList = r => require.ensure([], () => r(require('@/components/info/account/accountList')), 'accountList');
// import addAccount from "../components/info/account/addAccount.vue"
// import accountList from "../components/info/account/accountList.vue"
//用户管理
const userList = r => require.ensure([], () => r(require('@/components/info/userManagement/userList')), 'userList');
const titleList = r => require.ensure([], () => r(require('@/components/info/userManagement/titleList')), 'titleList');
const selfMedia = r => require.ensure([], () => r(require('@/components/info/userManagement/selfMedia')), 'selfMedia');
const assetQuery = r => require.ensure([], () => r(require('@/components/info/userManagement/assetQuery')), 'assetQuery');
const friendRelationship = r => require.ensure([], () => r(require('@/components/info/userManagement/friendRelationship')), 'friendRelationship');
// import userList from "../components/info/userManagement/userList.vue"
// import titleList from "../components/info/userManagement/titleList.vue"
// import selfMedia from "../components/info/userManagement/selfMedia.vue"
// import assetQuery from "../components/info/userManagement/assetQuery.vue"
// import friendRelationship from "../components/info/userManagement/friendRelationship.vue"
//作品管理
const worksList = r => require.ensure([], () => r(require('@/components/info/worksManagement/worksList')), 'worksList');
const worksSelected = r => require.ensure([], () => r(require('@/components/info/worksManagement/worksSelected')), 'worksSelected');
const worksSpecial = r => require.ensure([], () => r(require('@/components/info/worksManagement/worksSpecial')), 'worksSpecial');
const filterList = r => require.ensure([], () => r(require('@/components/info/worksManagement/filterList')), 'filterList');
const stickerList = r => require.ensure([], () => r(require('@/components/info/worksManagement/stickerList')), 'stickerList');
const typefaceList = r => require.ensure([], () => r(require('@/components/info/worksManagement/typefaceList')), 'typefaceList');
// import worksList from "../components/info/worksManagement/worksList.vue"
// import worksSelected from "../components/info/worksManagement/worksSelected.vue"
// import worksSpecial from "../components/info/worksManagement/worksSpecial.vue"
// import filterList from "../components/info/worksManagement/filterList.vue"
// import stickerList from "../components/info/worksManagement/stickerList.vue"
// import typefaceList from "../components/info/worksManagement/typefaceList.vue"
//音频素材管理
const audioMaterial = r => require.ensure([], () => r(require('@/components/info/audioMaterial/audioMaterial')), 'audioMaterial');
// import audioMaterial from "../components/info/audioMaterial/audioMaterial.vue"
//标签管理
const labelManagementList = r => require.ensure([], () => r(require('@/components/info/labelManagement/labelManagementList')), 'labelManagementList');
const addLablManagement = r => require.ensure([], () => r(require('@/components/info/labelManagement/addLablManagement')), 'addLablManagement');
// import addLablManagement from "../components/info/labelManagement/addLablManagement.vue"
// import labelManagementList from "../components/info/labelManagement/labelManagementList.vue"
//运营管理
const specialList = r => require.ensure([], () => r(require('@/components/info/operationManagement/specialList')), 'specialList');
const createSpecial = r => require.ensure([], () => r(require('@/components/info/operationManagement/createSpecial')), 'createSpecial');
const selectedList = r => require.ensure([], () => r(require('@/components/info/operationManagement/selectedList')), 'selectedList');
const addSelected = r => require.ensure([], () => r(require('@/components/info/operationManagement/addSelected')), 'addSelected');
const popLists = r => require.ensure([], () => r(require('@/components/info/operationManagement/popLists')), 'popLists');
const ArtistList = r => require.ensure([], () => r(require('@/components/info/operationManagement/ArtistList')), 'ArtistList');
const BannerList = r => require.ensure([], () => r(require('@/components/info/operationManagement/BannerList')), 'BannerList');
// import specialList from "../components/info/operationManagement/specialList.vue"
// import createSpecial from "../components/info/operationManagement/createSpecial.vue"
// import selectedList from "../components/info/operationManagement/selectedList.vue"
// import addSelected from "../components/info/operationManagement/addSelected.vue"
// import popLists from "../components/info/operationManagement/popLists.vue"
// import ArtstList from "../components/info/operationManagement/ArtistList.vue"
// import BannerList from "../components/info/operationManagement/BannerList.vue"
//礼物管理
const giftList = r => require.ensure([], () => r(require('@/components/info/giftManagement/giftList')), 'giftList');
const addGift = r => require.ensure([], () => r(require('@/components/info/giftManagement/addGift')), 'addGift');
const birthdayGiftList = r => require.ensure([], () => r(require('@/components/info/giftManagement/birthdayGiftList')), 'birthdayGiftList');
const addBirthday = r => require.ensure([], () => r(require('@/components/info/giftManagement/addBirthday')), 'addBirthday');
const integralQuery = r => require.ensure([], () => r(require('@/components/info/giftManagement/integralQuery')), 'integralQuery');
const coupon = r => require.ensure([], () => r(require('@/components/info/giftManagement/coupon')), 'coupon');
const integralDescribe = r => require.ensure([], () => r(require('@/components/info/giftManagement/integralDescribe')), 'integralDescribe');
// import giftList from "../components/info/giftManagement/giftList.vue"
// import addGift from "../components/info/giftManagement/addGift.vue"
// import birthdayGiftList from "../components/info/giftManagement/birthdayGiftList.vue"
// import addBirthday from "../components/info/giftManagement/addBirthday.vue"
// import integralQuery from "../components/info/giftManagement/integralQuery.vue"
// import coupon from "../components/info/giftManagement/coupon.vue"
// import integralDescribe from "../components/info/giftManagement/integralDescribe.vue"
//充值消费管理
const rechargeQuery = r => require.ensure([], () => r(require('@/components/info/financeManagement/rechargeQuery')), 'rechargeQuery');
const consumeQuery = r => require.ensure([], () => r(require('@/components/info/financeManagement/consumeQuery')), 'consumeQuery');
const MibPackage = r => require.ensure([], () => r(require('@/components/info/financeManagement/MibPackage')), 'MibPackage');
const AddMib = r => require.ensure([], () => r(require('@/components/info/financeManagement/AddMib')), 'AddMib');
// import rechargeQuery from "../components/info/financeManagement/rechargeQuery.vue"
// import consumeQuery from "../components/info/financeManagement/consumeQuery.vue"
// import MibPackage from "../components/info/financeManagement/MibPackage.vue"
// import AddMib from "../components/info/financeManagement/AddMib.vue"
// 艺人管理 
const pendingAudit = r => require.ensure([], () => r(require('@/components/info/artistManagement/pendingAudit')), 'pendingAudit');
const auditedList = r => require.ensure([], () => r(require('@/components/info/artistManagement/auditedList')), 'auditedList');
const Auditmechanism = r => require.ensure([], () => r(require('@/components/info/artistManagement/Auditmechanism')), 'Auditmechanism');
const Auditedmechanism = r => require.ensure([], () => r(require('@/components/info/artistManagement/Auditedmechanism')), 'Auditedmechanism');
const artistBasic = r => require.ensure([], () => r(require('@/components/info/artistManagement/basicData/artistBasic')), 'artistBasic');
const auditedBasic = r => require.ensure([], () => r(require('@/components/info/artistManagement/basicData/auditedBasic')), 'auditedBasic');
const mechanismBasic = r => require.ensure([], () => r(require('@/components/info/artistManagement/basicData/mechanismBasic')), 'mechanismBasic');
const mechanismedBasic = r => require.ensure([], () => r(require('@/components/info/artistManagement/basicData/mechanismedBasic')), 'mechanismedBasic');
const artistbasiclist = r => require.ensure([], () => r(require('@/components/info/artistManagement/basicData/basicClass/artistbasiclist')), 'artistbasiclist');
const mecanismbasiclist = r => require.ensure([], () => r(require('@/components/info/artistManagement/basicData/basicClass/mecanismbasiclist')), 'mecanismbasiclist');

//系统通知公告
const notificationList = r => require.ensure([], () => r(require('@/components/info/systemNotification/notificationList')), 'notificationList');
const addnotification = r => require.ensure([], () => r(require('@/components/info/systemNotification/addnotification')), 'addnotification');
//举报与反馈
const reporlist = r => require.ensure([], () => r(require('../components/info/Reportandfeedback/reporlist')), 'reporlist');
const feedbackList = r => require.ensure([], () => r(require('../components/info/Reportandfeedback/feedbackList')), 'feedbackList');
export default new Router({
	// mode: 'history',
    routes: [
	    {
	      path: '/',
	      name: 'login',
	      component: login
	    },{
	    	path:"/info",
	    	name:"info",
	    	component: info,
	    	// beforeEnter:(to, from, next)=>{
	    	// 	if (eval(localStorage.isLogin)) {
	     //    		next()
	     //    	}else {
	     //    		next(false)
	     //    	}
	    	// },
	    	children:[{
	    		//账户管理
	    		path:"/info/account/addAccount",
	  	    	name:"0-1",
	  	    	component: addAccount,
	    	},{
	    		path:"/info/account/accountList",
	  	    	name:"0-2",
	  	    	component: accountList
	    	},{
	    		//用户管理
	    		path:"/info/userManagement/userList",
	  	    	name:"1-1",
	  	    	component: userList
	    	},{
	    		path:"/info/userManagement/titleList",
	  	    	name:"1-2",
	  	    	component: titleList
	    	},{
	    		path:"/info/userManagement/selfMedia",
	  	    	name:"1-3",
	  	    	component: selfMedia
	    	},{
	    		path:"/info/userManagement/friendRelationship",
	  	    	name:"1-4",
	  	    	component: friendRelationship,
	    	},{
	    		path:"/info/userManagement/assetQuery",
	  	    	name:"1-5",
	  	    	component: assetQuery
	    	},{
	    		//作品管理
	    		path:"/info/worksManagement/worksList",
	  	    	name:"2-1",
	  	    	component: worksList
	    	},{
	    		path:"/info/worksManagement/worksSelected",
	  	    	name:"2-2",
	  	    	component: worksSelected
	    	},{
	    		path:"/info/worksManagement/worksSpecial",
	  	    	name:"2-3",
	  	    	component: worksSpecial
	    	},{
	    		path:"/info/worksManagement/filterList",
	  	    	name:"2-4",
	  	    	component: filterList
	    	},{
	    		path:"/info/worksManagement/stickerList",
	  	    	name:"2-5",
	  	    	component: stickerList
	    	},{
	    		path:"/info/worksManagement/typefaceList",
	  	    	name:"2-6",
	  	    	component: typefaceList
	    	},{
	    		//音频素材管理
	    		path:"/info/audioMaterial/audioMaterial",
	    		name:"3-1",
	    		component:audioMaterial
	    	},{
	    		//标签管理
	    		path:"/info/labelManagement/labelManagementList",
	    		name:"4-1",
	    		component:labelManagementList
	    	},{
	    		path:"/info/labelManagement/addLablManagement",
	    		name:"4-2",
	    		component:addLablManagement
	    	},{
	    		//运营管理
	    		path:"/info/operationManagement/specialList",
	  	    	name:"5-1",
	  	    	component: specialList
	    	},{
	    		path:"/info/operationManagement/createSpecial",
	  	    	name:"5-2",
	  	    	component: createSpecial
	    	},{
	    		path:"/info/operationManagement/selectedList",
	  	    	name:"5-3",
	  	    	component: selectedList
	    	},{
	    		path:"/info/operationManagement/addSelected",
	  	    	name:"5-4",
	  	    	component: addSelected
	    	},{
	    		path:"/info/operationManagement/popLists",
	  	    	name:"5-5",
	  	    	component: popLists
	    	},{
	    		path:"/info/operationManagement/ArtistList",
	  	    	name:"5-6",
	  	    	component: ArtistList
	    	},{
	    		path:"/info/operationManagement/BannerList",
	  	    	name:"5-7",
	  	    	component: BannerList
	    	},{
	    		//礼物管理
	    		path:"/info/giftManagement/giftList",
	    		name:"6-1",
	    		component:giftList
	    	},{
	    		path:"/info/giftManagement/addGift",
	    		name:"6-2",
	    		component:addGift
	    	},{
	    		path:"/info/giftManagement/birthdayGiftList",
	    		name:"6-3",
	    		component:birthdayGiftList
	    	},{
	    		path:"/info/giftManagement/addBirthday",
	    		name:"6-4",
	    		component:addBirthday
	    	},{
	    		path:"/info/giftManagement/integralQuery",
	    		name:"6-5",
	    		component:integralQuery
	    	},{
	    		path:"/info/giftManagement/coupon",
	    		name:"6-6",
	    		component:coupon
	    	},{
	    		path:"/info/giftManagement/integralDescribe",
	    		name:"6-7",
	    		component:integralDescribe
	    	},{
	    		//充值消费管理
	    		path:"/info/financeManagement/rechargeQuery",
	    		name:"7-1",
	    		component:rechargeQuery
	    	},{
	    		path:"/info/financeManagement/consumeQuery",
	    		name:"7-2",
	    		component:consumeQuery
	    	},{
	    		path:"/info/financeManagement/MibPackage",
	    		name:"7-3",
	    		component:MibPackage
	    	},{
	    		path:"/info/financeManagement/AddMib",
	    		name:"7-4",
	    		component:AddMib
	    	},{
	    		//艺人管理
	    		path:"/info/artistManagement/pendingAudit",
	    		name:"8-1",
	    		component:pendingAudit
	    	},{
	    		path:"/info/artistManagement/auditedList",
	    		name:"8-2",
	    		component:auditedList
	    	},{
	    		path:"/info/artistManagement/Auditmechanism",
	    		name:"8-3",
	    		component:Auditmechanism
	    	},{
	    		path:"/info/artistManagement/Auditedmechanism",
	    		name:"8-4",
	    		component:Auditedmechanism
	    	},{
	    		path:"/info/artistManagement/basicData/artistBasic",
	    		name:"artistBasic",
	    		component:artistBasic
	    	},{
	    		path:"/info/artistManagement/basicData/auditedBasic",
	    		name:"auditedBasic",
	    		component:auditedBasic
	    	},{
	    		path:"/info/artistManagement/basicData/mechanismBasic",
	    		name:"mechanismBasic",
	    		component:mechanismBasic
	    	},{
	    		path:"/info/artistManagement/basicData/mechanismedBasic",
	    		name:"mechanismedBasic",
	    		component:mechanismedBasic
	    	},{
	    		path:"/info/artistManagement/basicData/basicClass/artistbasiclist",
	    		name:"artistbasiclist",
	    		component:artistbasiclist
	    	},{
	    		path:"/info/artistManagement/basicData/basicClass/mecanismbasiclist",
	    		name:"mecanismbasiclist",
	    		component:mecanismbasiclist
	    	},{
	    		//系统通知与公告
	    		path:"/info/systemNotification/notificationList",
	    		name:"9-1",
	    		component:notificationList
	    	},{
	    		path:"/info/systemNotification/addnotification",
	    		name:"9-2",
	    		component:addnotification
	    	},{
	    		//举报与反馈
	    		path:"/info/Reportandfeedback/feedbackList",
	    		name:"10-1",
	    		component:feedbackList
	    	},{
	    		path:"/info/Reportandfeedback/reporlist",
	    		name:"10-2",
	    		component:reporlist
	    	}]
	 	}]
})