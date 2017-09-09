//精选列表
import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"
export const GETSELECTED = "GETSELECTED"


const selecteds={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:1,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,
		selectedList:[{
			//id
			id:"",
			//创建时间
			createTime:"",
			//发布时间
			publishDate:"",
			//发布人
			cmsUserName:"",
			//发布状态
			type:"",
		}],
		selectedLIST:{},
		//控制编辑
		editRecommend:false,
	
	},
	mutations:{
		getPageSize(state,index){
			state.pageIndex = index
		},
		//编辑控制
		GETEDIT(state,slelected){
			state.selectedLIST = slelected
			state.editRecommend = true

		},
		setEdit(state){
			state.editRecommend = false
		}
	},
	actions:{
		//查询
		async GETSELECTED(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex-1);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getFeatureList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			let Month = ""
    			let date = new Date(new Date());
    			if (date.getMonth()+1 <10) {
					Month = `0${date.getMonth()+1}`
				}else {
					Month =  date.getMonth()+1
				}

    			let currentDate = parseInt(`${date.getFullYear()}${Month}${date.getDate()}`);
    			context.state.selectedList =[]
    			// console.log(data.data.content)
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.selectedList.push({
	    					//id
							id:item.id,
							//创建时间
							createTime:getLocalTime(item.createTime),
							//发布人
							cmsUserName:item.cmsUserInfo.userName,
							//发布时间
							publishDate: item.publishDate,
							//发布状态
							type: parseInt(item.publishDate) > currentDate ? "未发布" : "已发布",
	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	}
	}
}
export default selecteds