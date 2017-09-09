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
				baseURL: `${urls.viewUserWorks}`,
			    // baseURL: `${context.state.url}/works/getFeaturePoolList`,
			    timeout: 4000,
			    headers: {
			    	'aimy-token': localStorage.selfMediaToken,
			    	"aimy-divers":'{"os":2,"version":"1.0.0"}',
			    	"aimy-id":"1",
			    },
			    data:datas
			});
			console.log(data)
    		if (data.code ===200) {
    			context.state.WorksList =[]
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
    				data.data.content.forEach((item) => {
	    				context.state.WorksList.push({
	    					//作品id
	    					id : item.id,
	    					//作品名
	    					title : item.title,
	    					//发布用户
	    					userName : item.userBaseInfo.userName,
	    					// avatarUrl: item.userBaseInfo.avatarUrl,
	    					// userId: item.userBaseInfo.userId,
	    					//发布时间
	    					releaseTime : getLocalTime(item.releaseTime),
	    					//视频/音频0视频1是音频
	    					type : item.type === 0 ?  "视频" : "音频",
	    					//标签
	    					tags:item.tags === undefined ? [] : item.tags ,
	    					//地理位置
	    					// address : item.
	    					//描述
	    					description : item.description,
	    					//音频素材
	    					audioName : item.type === 0 ?  item.videoInfo.audioInfo === undefined ? "" : item.videoInfo.audioInfo.audioName : item.audioInfo.audioInfo.audioName,
	    					//公开/私有0私有1公开
	    					state : item.state === 0 ? "私有" : "公开",
	    					//播放次数
	    					play : item.type === 0 ? item.videoInfo.scoreInfo.play : item.audioInfo.scoreInfo.play,
	    					//收藏数
	    					store : item.type === 0 ? item.videoInfo.scoreInfo.store : item.audioInfo.scoreInfo.store,
	    					//评价数
	    					comment : item.type === 0 ? item.videoInfo.scoreInfo.comment : item.audioInfo.scoreInfo.comment,
	    					//转发数
	    					forward : item.type === 0 ? item.videoInfo.scoreInfo.forward : item.audioInfo.scoreInfo.forward, 
	    					//App版本 视频有，音频没有
	    					videoAppVersion : item.type === 0 ? item.videoInfo.videoAppVersion : "", 
	    					//移动平台 视频有，音频没有
	    					videoAppOs: item.type === 0 ? item.videoInfo.videoAppOs === 0 ? "Android" : "IOS" : "", 
	    					//状态o已删除1冻结2正常
	    					dataState : item.dataState === 0 ? "已删除" :  item.dataState === 1 ? "冻结" : "正常",
	    					//作品
	    					worksId : item.type === 0 ?  item.videoInfo.worksId : item.audioInfo.worksId, 
	    					//作品图片
	    					urlCover:item.urlCover,
	    					userBaseInfo:item.userBaseInfo
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