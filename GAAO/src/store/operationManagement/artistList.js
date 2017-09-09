//艺人

import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"

export const ARTISTLIST ="ARTISTLIST"

const artistList={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:1,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,
		artistList:[
		{	
			//头像
			avatarUrl:"",
			//用户ID
			userId:"",
			//用户名
			userName:"",
			//性别0未知1男2女
			gender:"",
			//用户名
			userName:"",
			//手机号
			phoneNumber:"",
			//签名。可能有可能没有
			bio:"",
			//注册时间
			createTime:"",
			//上次登录时间
			updateTime:"",
			//身份
			//用户等级
		}
		],
		//编辑
		editList:false,
		cmsCreatorlist:{}
	},
	mutations:{
		getPageSize(state,index){
			state.pageIndex = index
		},
		//跳转1
	},
	actions:{
		//艺人列表
		async ARTISTLIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex -1);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getArtistList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.artistList =[]
    			// console.log(data.data.content)
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.artistList.push({
	    					//头像
							avatarUrl:item.avatarUrl,
							//用户ID
							userId:item.userId,
							//用户名
							userName:item.userId,
							//性别0未知1男2女
							gender:item.gender === 0 ? "未知" : item.gender === 1 ? "男" : "女",
							//用户名
							userName:item.userName,
							//手机号
							phoneNumber:item.phoneNumber,
							//签名。可能有可能没有
							bio:item.bio === undefined ? "" : item.bio,
							//注册时间
							createTime: getLocalTime(item.createTime),
							//上次登录时间
							updateTime:getLocalTime(item.updateTime),
							//身份
							//用户等级
	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	}
	}
}
export default artistList