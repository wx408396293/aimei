import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"

export const FEEDBACKLIST = "FEEDBACKLIST"
export const REOPRTLIST = "REOPRTLIST"

const report_and_feedback={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:1,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,
		//反馈列表
		feedbackList:[{
			//用户id
			userId:"",
			//用户名
			userName:"",
			//用户头像
			avatarUrl:"",
			//联系方式
			contactWay:"",
			//反馈内容
			content:"",
			//反馈时间
			createTime:"",
			//处理状态0是未处理1是已处理
			dealState:"",
		}],
		//举报
		//举报当前页
		reportIndex:1,
		//每页显示条数
		reportSize:10,
		//总条数
		reportElements:0,
		reportList:[{
			//被举报内容类型0-用户、1-视频作品、2-音频作品、3-专辑、4-评论
			type:"",
			//被举报内容id
			targetId:"",
			//被举报内容名称
			targetName:"",
			//举报理由0-虚假广告、1-色情低俗、2-政治敏感、3-人身攻击、4-盗用作品、5-其它
			reasonType:"",
			//举报时间
			createTime:"",
			//举报用户
			userName:"",
			//处理状态，0是未处理1是已处理
			dealState:"",
			//处理时间
			// updateTime:"",
			// //处理人
			// reasonType:"",

		}],
	},
	mutations:{
		//反馈列表
		getPageSize(state,index){
			state.pageIndex = index 
		},
		//举报列表
		getReportSize(state,index){
			state.reportIndex = index 
		},
	},
	actions:{
		//反馈列表
		async FEEDBACKLIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex -1);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getFeedbackList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.feedbackList =[]
    			// console.log(data.data.content)
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.feedbackList.push({
	    					//反馈ID
	    					id:item.id,
	    					//用户id
							userId:item.userInfo.userId,
							//用户名
							userName:item.userInfo.userName,
							//用户头像
							avatarUrl:item.userInfo.avatarUrl,
							//联系方式
							contactWay:item.contactWay,
							//反馈内容
							content:item.content,
							//反馈时间
							createTime:getLocalTime(item.createTime),
							//处理状态0是未处理1是已处理
							dealState:item.dealState === 0 ? "未处理" : "已处理",
	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	},
    	//反馈处理
    	async HANDLEFEEDBACK (context,id) {
    		let datas= new FormData()
    		datas.append('id', id);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.handleFeedback}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code === 200) {
				context.dispatch("FEEDBACKLIST")
			}else {
				
			}
    		
    	},
    	//举报列表
 		async REOPRTLIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.reportIndex -1);
    		datas.append('pageSize', context.state.reportSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getReportList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.reportList =[]
    			// console.log(data.data.content)
    			context.state.reportElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.reportList.push({
	    					id:item.id,
	    					//被举报内容类型0-用户、1-视频作品、2-音频作品、3-专辑、4-评论
							type:item.type === 0 ? "用户" : item.type === 1 ? "视频作品" :item.type === 2 ? "音频作品" :item.type === 3 ? "专辑" :"评论",
							//被举报内容id
							targetId:item.targetId,
							//被举报内容名称
							targetName:item.targetName,
							//举报理由0-虚假广告、1-色情低俗、2-政治敏感、3-人身攻击、4-盗用作品、5-其它
							reasonType:item.reasonType === 0 ? "虚假广告" : item.reasonType === 1 ? "色情低俗" :item.reasonType === 2 ? "政治敏感" :item.reasonType === 3 ? "人身攻击" :item.reasonType === 4 ? "盗用作品" :"其它",
							//举报时间
							createTime:getLocalTime(item.createTime),
							//举报用户
							createuserName:item.userInfo.userName,
							//处理状态，0是未处理1是已处理
							dealState:item.dealState === 0 ? "未处理" : "已处理",
							//处理时间
							// updateTime:"",
							// //处理人
							// reasonType:"",
	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	},
    	//删除
   //  	async DELETE(context,id) {
   //  		let datas= new FormData()
   //  		datas.append('id', id);
   //  		const {data} = await axios({
			// 	method:"post",
			// 	baseURL: `${urls.delete}`,
			//     // baseURL: `${context.state.url}/works/getAllWorksList`,
			//     timeout: 4000,
			//     headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			//     data:datas
			// });
			// if (data.code === 200) {
			// 	console.log(data)
			// 	context.dispatch("SPECIALLIST")
			// }else {
				
			// }
    		
   //  	},
	}
}
export default report_and_feedback