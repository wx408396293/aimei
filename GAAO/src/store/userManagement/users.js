//用户列表
import axios from "axios";
import urls from "../url.js"
import getLocalTime from "../getLocalTimes.js"

export const USERLIST ="USERLIST"
export const getPageSize = 'getPageSize'

const users={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:1,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,
		UserList : [{
			//头像
			avatarUrl:"",
			//用户ID
			userId:"",
			//用户名
			userName:"",
			//性别1男2女
			gender:"",
			//手机号码
			phoneNumber:"",
			//签名
			bio:"",
			//注册时间
			createTime:"",
			//上次登陆时间
			updateTime:"",
			//身份
			// updateTime:"",
			//用户等级
			// updateTime:"",
		}],
	},
	getters:{
	},
	mutations:{
		getPageSize(state,index){
			state.pageIndex = index
		}
	},
	actions:{
		async USERLIST(context) {
			let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex -1);
    		datas.append('pageSize', context.state.pageSize);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getAllUserList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 3000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code ===200) {
    			context.state.UserList =[]
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.UserList.push({
	    					//头像
							avatarUrl:item.avatarUrl,
							//用户ID
							userId:item.userId,
							//用户名
							userName:item.userName,
							//性别1男2女
							gender:item.userName === 1 ? "男" : "女",
							//手机号码
							phoneNumber:item.phoneNumber,
							//签名
							bio:item.bio === undefined ? "" : item.bio,
							//注册时间
							createTime:getLocalTime(item.createTime),
							//上次登陆时间
							updateTime:getLocalTime(item.updateTime),
							//身份
							// updateTime:"",
							//用户等级
							// updateTime:"",
	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
		}
	}
}

export default users