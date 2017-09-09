//用户列表
import axios from "axios";
import router from "../../router/index.js"
import urls from "../url.js"
import getLocalTime from "../getLocalTimes.js"

export const SEARCHASSET ="SEARCHASSET"


const assetQuery={
	namespaced: true,
	state:{
		//控制搜索结果
		searchButton:false,
		//当前页码
		currentIndex:0,
		//每页显示条数
		pageSize:10,
		//总条数
		GetFanListotal:0,
		//粉丝表
		//控制查询结果
		userId: null,
		userName:"",
		assetquery:[],
	},
	getters:{
	},
	mutations:{
		//从UserList页面跳转过来
		assetsearch(state,{userId,userName}){
			state.userId = userId
			state.userName = userName
			state.searchButton = true
			router.push("/info/userManagement/assetQuery")
			// console.log(userId,userName)
		},
		assetsearchfalse(state){
			state.searchButton = false
		},
		//设置搜索id
		getUserId(state,userId){
			state.userId = userId
		}
	},
	actions:{
		//资产表
		async SEARCHASSET(context) {
			let datas= new FormData()
    		datas.append('userId', context.state.userId);
    		//粉丝查询
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getUserAssets}`,
			    timeout: 3000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code ===200) {
				context.state.searchButton = true
    			context.state.assetquery =[]
    			if (data.data !== undefined) {
    				let obj = {}
    				let arr = []
    				//咪币
    				obj.goldNum =data.data.goldNum
    				//积分
    				obj.score =data.data.score
    				//用户名
    				context.state.userName = data.data.userName
	    			data.data.giftList.forEach((item) => {
	    				arr.push({
	    					name:item.name,
	    					value:item.value,
	    					type:item.type,
	    				})
	    			});
	    			obj.giftList= arr
	    			context.state.assetquery.push(obj)
    			}else {
    				console.log(data)
    			}
    		}else if(data.code ===604) {
				alert("账号不存在")
    		}
		},
	}
}

export default assetQuery