//精选
import axios from "axios";
import urls from "../url.js"
import getLocalTime from "../getLocalTimes.js"

export const WORKSLIST = "WORKSLIST"
export const getPageSize = "getPageSize"
export const DELETESELECTED = "DELETESELECTED"
const Selected={
	namespaced: true,
	state:{
		// url:"http://192.168.10.152/cms",
		pageIndex:0,
		pageSize:10,
		//总条数
		totalElements:0,
		WorksList:[{
			//专题池id
			id:0,
			//作品id
			opusId:"",
			//作品名
			title:"",
			//发布用户
			userName:"",
			//作者id
			userId:0,
			//发布时间
			releaseTime:0,
			//视频/音频0视频1是音频
			type:0,
			//标签
			
			//地理位置
			address:"",
			//描述
			description:"",
			//音频素材
			audioName:"",
			//公开/私有0私有1公开
			state: 0,
			//播放次数
			play:0,
			//收藏数
			store:0,
			//评价数
			comment:0,
			//转发数
			forward:0,
			//App版本
			//视频有，音频没有
			videoAppVersion:"",
			//移动平台
			//状态o已删除1冻结2正常
			dataState:1,
			//作品
			// worksId:0,
			urlCover:""
		}]

	},
	mutations:{
		getPageSize(state,index){
			state.pageIndex = index -1
		}
	},
	actions:{
		//作品加载
		async WORKSLIST(context) {
			var datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex);
    		datas.append('pageSize', context.state.pageSize);
    		datas.append('pageSize', context.state.pageSize);
    		var {data} = await axios({
				method:"post",
				baseURL: `${urls.getFeaturePoolList}`,
			    // baseURL: `${context.state.url}/works/getFeaturePoolList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.WorksList =[]
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
    				data.data.content.forEach((item) => {
	    				context.state.WorksList.push({
	    					//专题池id
	    					id: item.id,
	    					//作品id
	    					opusId : item.worksInfo.id,
	    					//作品名
	    					title : item.worksInfo.title,
	    					//发布用户
	    					userName : item.worksInfo.userBaseInfo.userName,

	    					//发布时间
	    					releaseTime : getLocalTime(item.worksInfo.releaseTime),
	    					//视频/音频0视频1是音频
	    					type : item.worksInfo.type === 0 ?  "视频" : "音频",
	    					//标签
	    					tags:item.worksInfo.tags === undefined ? [] : item.worksInfo.tags ,
	    					//地理位置
	    					// address : item.
	    					//描述
	    					description : item.worksInfo.description,
	    					//音频素材
	    					audioName : item.worksInfo.type === 0 ? item.worksInfo.videoInfo.audioInfo.audioName : item.worksInfo.audioInfo.audioInfo.audioName,
	    					//公开/私有0私有1公开
	    					state : item.worksInfo.state === 0 ? "私有" : "公开",
	    					//播放次数
	    					play : item.worksInfo.type === 0 ? item.worksInfo.videoInfo.scoreInfo.play : item.worksInfo.audioInfo.scoreInfo.play,
	    					//收藏数
	    					store : item.worksInfo.type === 0 ? item.worksInfo.videoInfo.scoreInfo.store : item.worksInfo.audioInfo.scoreInfo.store,
	    					//评价数
	    					comment : item.worksInfo.type === 0 ? item.worksInfo.videoInfo.scoreInfo.comment : item.worksInfo.audioInfo.scoreInfo.comment,
	    					//转发数
	    					forward : item.worksInfo.type === 0 ? item.worksInfo.videoInfo.scoreInfo.forward : item.worksInfo.audioInfo.scoreInfo.forward, 
	    					//App版本 视频有，音频没有
	    					videoAppVersion : item.worksInfo.type === 0 ? item.worksInfo.videoInfo.videoAppVersion : "", 
	    					//移动平台 视频有，音频没有
	    					videoAppOs: item.worksInfo.type === 0 ? item.worksInfo.videoInfo.videoAppOs === 0 ? "Android" : "IOS" : "", 
	    					//状态o已删除1冻结2正常
	    					dataState : item.worksInfo.dataState === 0 ? "已删除" :  item.worksInfo.dataState === 1 ? "冻结" : "正常",

	    					// //作品
	    					// worksId : item.worksInfo.type === 0 ?  item.worksInfo.videoInfo.worksId : item.worksInfo.audioInfo.worksId, 
	    					userId : item.passportInfo.userId,
	    					userName : item.passportInfo.userName,
	    					urlCover:item.worksInfo.urlCover,
	    					userBaseInfo:item.worksInfo.userBaseInfo
	    				})
	    			});
	    			context.state.WorksList.forEach( (item) => {
						var b =[]
						item.tags.forEach((element) => {
							b.push(element.name)
						});
						item.tagst = b.join(",")
					});
    			}
    		}else {
    			console.log(data)
    		}
		},
		//删除专题
		async DELETESELECTED(context,ids){
			let datas= new FormData()
    		datas.append('ids', ids);
			const {data} = await axios({
				method:"post",
				baseURL: `${urls.removeFromFeaturePool}`,
			    // baseURL: `${context.state.url}/works/removeFromFeaturePool`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			context.dispatch("WORKSLIST")
		}
	}
}
export default Selected