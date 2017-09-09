import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"

const specialList={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:0,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,
		cmsCreator:[],
		//编辑
		editList:false,
		cmsCreatorlist:{}
	},
	mutations:{
		getPageSize(state,index){
			state.pageIndex = index -1
		},
		//跳转1
		edittrue(state,row){
			state.cmsCreatorlist =row
			state.editList= true
		},
		//跳转2
		editfalse(state){
			state.editList= false
		}
	},
	actions:{
		//下架
		async DISABLE(context,id) {
    		let datas= new FormData()
    		datas.append('id', id);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.disable}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code === 200) {
				context.dispatch("SPECIALLIST")
				console.log(data)
			}else {
				
			}
			
    		
    	},
    	//上架
    	async ENABLE(context,id) {
    		let datas= new FormData()
    		datas.append('id', id);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.enable}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code === 200) {
				console.log(data)
				context.dispatch("SPECIALLIST")
			}else {
				
			}
    		
    	},
    	//删除
    	async DELETE(context,id) {
    		let datas= new FormData()
    		datas.append('id', id);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.delete}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code === 200) {
				console.log(data)
				context.dispatch("SPECIALLIST")
			}else {
				
			}
    		
    	},
		//查询
		async SPECIALLIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.viewUserTopic}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {
			    	'aimy-token': localStorage.selfMediaToken,
			    	"aimy-divers":'{"os":2,"version":"1.0.0"}',
			    	"aimy-id":"1",
			    },
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.cmsCreator =[]
    			// console.log(data.data.content)
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.cmsCreator.push({
	    					//图片
							coverUrl:item.coverUrl,
							//专题id
							id:item.id,
							//创建时间
							createTime:getLocalTime(item.createTime),
							//专题名
							title:item.title,
							//创建人
							createuserName:item.appCreatorInfo.userName,
							//修改人
							cmsEditoruserName:item.cmsEditorInfo === undefined ? "" :item.cmsEditorInfo.userName,
							//修改时间
							updateTime:getLocalTime(item.updateTime),
							//状态
							//0删除，1已下架2正常
							dataState:item.dataState === 0 ? "已删除" : item.dataState === 1? "已下架" : "正常",
							//类别
							//0是后台1自媒体
							type:item.type === 0 ? "后台" : "自媒体",
							//内容
							content:item.content,
							description:item.description

	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	}
	}
}
export default specialList