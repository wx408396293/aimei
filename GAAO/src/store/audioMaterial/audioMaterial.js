import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"
export const GETAUDIOMATERIALIST = "GETAUDIOMATERIALIST"
export const DELETEAUDIOMATERIAL = "DELETEAUDIOMATERIAL"


const audiomaterialist={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:0,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,
		audioList:[{
			//id
			id:"",
			//素材名
			audioName:"",
			//素材类型0-原创 1-咪哒录音
			sourceType:"",
			//发布用户
			userName:"",
			//发布时间
			uploadTime:"",
			//共享状态0是共享，1是不共享
			canUse:"",
			//公开作品数
			worksCount:"",
			//地理位置
			cityCode:"",
			//状态
			dataState:"",

		}]
	
	},
	mutations:{
		getPageSize(state,index){
			state.pageIndex = index -1
		},
	},
	actions:{
		//音频素材列表
		async GETAUDIOMATERIALIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex);
    		datas.append('pageSize', context.state.pageSize);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getAudioMaterialList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.audioList =[]
    			// console.log(data.data.content)
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.audioList.push({
	    					//id
							id:item.id,
							//素材名
							audioName:item.audioName,
							//素材类型0-原创 1-咪哒录音
							sourceType:item.sourceType === 0 ? "原创" :"咪哒录音",
							//发布用户
							userName:item.userBaseInfo.userName,
							//发布时间
							uploadTime:getLocalTime(item.uploadTime),
							//共享状态0是共享，1是不共享
							canUse:item.canUse === 0 ? "共享" : "不共享",
							//公开作品数
							worksCount:item.worksCount,
							//地理位置
							cityCode:item.cityCode,
							//机器信息
							dataState:item.dataState === 0 ? "已删除" : item.dataState === 1 ? "已冻结" : "正常",
	    				})
	    			});
	    		}

    		}else {
    			console.log(data)
    		}
    	},
    	//删除
    	async DELETEAUDIOMATERIAL(context,{id,reason}){
			let datas= new FormData()
    		datas.append('id', id);
    		datas.append('reason', reason);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.deleteAudioMaterial}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code === 200) {
				context.dispatch("GETAUDIOMATERIALIST")
			}else {
				
			}
		},
	}
}
export default audiomaterialist