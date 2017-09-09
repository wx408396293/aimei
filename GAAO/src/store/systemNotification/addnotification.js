import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"

export const ADDNOTIFICATION = "ADDNOTIFICATION"
export const MODIFYNOTIFICATION ="MODIFYNOTIFICATION"

const addnotification={
	namespaced: true,
	state:{
		
	},
	mutations:{
		
	},
	actions:{
		//创建通知
		async ADDNOTIFICATION(context,getFrom) {
    		let datas= new FormData()
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
				baseURL: `${urls.schedule}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code === 200) {
				alert("创建成功")
			}else {
				alert("创建失败")
			}
    	},
  	}
}
export default addnotification