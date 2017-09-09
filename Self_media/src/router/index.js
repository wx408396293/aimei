import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import login from "../components/login/login.vue"
import info from "../components/info.vue"
import publishworks from "../components/operationManagement/PublishWorks.vue"
import createSpecial from "../components/operationManagement/createSpecial.vue"
import specialList from "../components/operationManagement/specialList.vue"

export default new Router({
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
	    	// 		console.log("b")
	     //    		next()
	     //    	}else {
	     //    		next(false)
	     //    	}
	    	// },
	    	children:[{
	    		//发布作品
	    		path:"/operationManagement/PublishWorks",
	  	    	name:"0-1",
	  	    	component: publishworks,
	    	},{
	    		//发布专题
	    		path:"/operationManagement/createSpecial",
	  	    	name:"0-2",
	  	    	component: createSpecial,
	    	},{ //专题列表
	    		path:"/operationManagement/specialList",
	  	    	name:"0-3",
	  	    	component: specialList,
	    	}]
	    }
    ]
})
