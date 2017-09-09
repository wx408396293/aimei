//用户列表
import axios from "axios";
import router from "../../router/index.js"
import urls from "../url.js"
import getLocalTime from "../getLocalTimes.js"

export const GETFANLIST ="GETFANLIST"
export const GETFOLLOWLIST = "GETFOLLOWLIST"
export const USERID = "USERID"

export const getPageSize = 'getPageSize'
export const getfollow = " getfollow"


const friendRelationship={
	namespaced: true,
	state:{
		//粉丝当前页码
		GetFanLisIndex:0,
		//关注当前页码
		GetFollowListIndex:0,
		//每页显示条数
		pageSize:10,
		//粉丝总条数
		GetFanListotal :0,
		//关注总条数
		GetFollowListtotal :0,
		//粉丝表
		GetFanList : [{
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
		//关注表
		GetFollowList : [{
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
		//控制查询结果
		searchList:false,
		userId: null,
		userName:"",
	},
	getters:{
	},
	mutations:{
		//设置粉丝当前页
		getPageSize(state,index){
			state.GetFanLisIndex = index -1
		},
		//设置关注当前页
		getfollow(state,index){
			state.GetFollowListIndex = index -1
		},
		usersearch(state,{userId,userName}){
			state.userId = userId
			state.userName = userName
			router.push("/info/userManagement/friendRelationship")
			// console.log(userId,userName)
		},
		getUser(state,userId){
			state.userId = userId
		}
	},
	actions:{
		//粉丝表
		async GETFANLIST(context) {
			let datas= new FormData()
    		datas.append('userId', context.state.userId);
    		//粉丝查询
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getFanList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 3000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code ===200) {
    			context.state.GetFanList =[]
    			context.state.GetFanListotal = 0
    			context.state.searchList = true
    			if (data.data !== undefined) {
    				context.state.GetFanListotal= data.data.length
	    			data.data.forEach((item) => {
	    				context.state.GetFanList.push({
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
    			}else {
    			}
    		}else {
    			console.log(data)
    		}
		},
		//关注表
		async GETFOLLOWLIST(context) {
			let datas= new FormData()
    		datas.append('userId', context.state.userId);
    		//粉丝查询
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getFollowList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 3000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code ===200) {
    			context.state.GetFollowList =[]
    			context.state.GetFollowListtotal = 0
    			context.state.searchList = true
    			if (data.data !== undefined) {
					context.state.GetFollowListtotal= data.data.length
	    			data.data.forEach((item) => {
	    				context.state.GetFollowList.push({
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
    			}else {}    		
    		}else {
    			console.log(data)
    		}
		},
		async USERID(context, userID){
			let datas= new FormData()
    		datas.append('userId', userID);
    		//粉丝查询
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getUserInfo}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 3000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code ===200) {
    			if (data.data !== undefined) {
	    			context.commit("usersearch",{
	    				userId: data.data.userId,
	    				userName: data.data.userName
	    			})
	    			context.dispatch("GETFANLIST")
    				context.dispatch("GETFOLLOWLIST")
    			}else {
    				alert("用户不存在")
    				context.state.searchList = false
    				context.state.userName = ""
    			}
    		}else {
    			console.log(data)
    		}
		}
	}
}

export default friendRelationship