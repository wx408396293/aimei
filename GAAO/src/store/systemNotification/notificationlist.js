import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"

export const NOTIFICATIONLIST = "NOTIFICATIONLIST"
export const DELETENOTIFICATION = "DELETENOTIFICATION"
export const MODIFYNOTIFICATION = "MODIFYNOTIFICATION"

const notificationlist={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:1,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,
		//通知列表
		notificationList:[{
			
			//0=视频 1=音频 2=专题 3=专辑 4=榜单 5=标签详情 6=素材详情 7=个人主页 8=活动详情 9=链接
			// type:"",
			//创建人信息
			cmsCreatorInfo:"",
			//创建时间
			createTime:"",
			//内容
			content:"",
			//
			dataState:"",
			//接收用户群体
			targetIds:"",
			//发送时间
			date:"",
			//通知ID
			id:"",
			//指定用户数组
			targetIdSet:[],
			//指定用户字符串
			targetIds:"",

		}],
		notification:{},
		bluer: true,
	},
	mutations:{
		//通知列表
		getPageSize(state,index){
			state.pageIndex = index 
		},
		getnotifications(state,notification){
			state.notification = notification
			console.log(state.notification)
			state.bluer = false
		},
		setnotifications(state){
			state.bluer = true
		}
	},
	actions:{
		//通知列表
		async NOTIFICATIONLIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex -1);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getAnnouncementList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			console.log(data)
    		if (data.code ===200) {
    			context.state.notificationList =[]
    			// console.log(data.data.content)
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.notificationList.push({
	    					//创建人信息
							cmsCreatorInfo:item.cmsCreatorInfo,
							//创建时间
							createTime:getLocalTime(item.createTime),
							//内容
							content:item.content,
							//
							isSent:item.isSent === 0 ? "未发送":"已发送",
							//发送时间
							date:item.date,
							//通知ID
							id:item.id,
							targetIdSets: item.targetIds === "-1" ? "全部用户":"指定接收用户",
							//指定用户数组
							// targetIdSet:item.targetIdSet,
							//指定用户字符串
							targetIds:item.targetIds === "-1" ? "全部用户":item.targetIds,
							shareContent: item.shareContent
	    				})
	    			});
	    			context.state.notificationList.forEach((item) => {
	    				item.shareContent = JSON.parse(item.shareContent);
	    				if (item.shareContent.type ===9) {
	    					item.shareContent.sourceId =item.shareContent.description
	    				}
	    				//0=视频 1=音频 2=专题 3=专辑 4=榜单 5=标签详情 6=素材详情 7=个人主页 8=活动详情 9=链接
	    				item.shareContent.type =  item.shareContent.type === 0? "视频":item.shareContent.type === 1 ? "音频" : item.shareContent.type === 2 ? "专题":item.shareContent.type === 3 ? "专辑":item.shareContent.type === 4? "榜单":item.shareContent.type === 5? "标签详情" : item.shareContent.type === 6 ?"素材详情":item.shareContent.type === 7 ? "个人主页":item.shareContent.type === 8? "活动详情":"链接"
	    			});
	    			console.log(context.state.notificationList)
	    		}
    		}else {
    			console.log(data)
    		}
    	},
    	//删除
    	async DELETENOTIFICATION (context,id) {
    		console.log(id)
    		let datas= new FormData()
    		datas.append('id', id);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.messagedelete}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			console.log(data)
			if (data.code === 200) {
				context.dispatch("NOTIFICATIONLIST")
			}else if (data.code === 305) {
				alert("没有权限删除")
			}else {
				console.log(data)
			}
    	},
    	//修改通知
		async MODIFYNOTIFICATION(context,getFrom) {
    		let datas= new FormData()
    		datas.append('id', getFrom.id);
    		datas.append('targetIds', getFrom.targetIds);
    		datas.append('content', getFrom.content);
    		datas.append('type', getFrom.type);
    		datas.append('date', getFrom.date);
    		if (getFrom.linkId !==undefined) {
    			datas.append('linkId', getFrom.linkId);
    		}else {
    			datas.append('linkUrl', getFrom.linkUrl);
    		}
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.messagecreate}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code === 200) {
				alert("修改成功")
				context.commit("setnotifications")
				context.dispatch("NOTIFICATIONLIST")
			}else {
				alert("修改失败")
			}
    	},
  	}
}
export default notificationlist