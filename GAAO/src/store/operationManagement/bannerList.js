//banner表
import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"

export const controlSWITCHone ="SWITCHone"
export const controlSWITCHtwo ="controlSWITCHtwo"
export const controlSWITCHone1 ="SWITCHone1"
export const BANNERLIST ="BANNERLIST"
export const DISABLEBANNER= "DISABLEBANNER"
export const ENABLEBANNER = "ENABLEBANNER"


const bannerList={
	namespaced: true,
	state:{
		bannerlist: true,
		addBanner:false,
		editBanner:false,
		BannerList:[
		// {
		// 	//封面图
		// 	coverUrl:"",
		// 	//类型0艺人，1作品2专题
		// 	type:"",
		// 	//对应名称对应类型根据type进行判断的
		// 	title:"",
		// 	//创建人
		// 	creatuserName:'',
		// 	//创建时间
		// 	createTime:"",
		// 	//修改人
		// 	editoruserName:"",
		// 	//修改时间
		// 	updateTime:"",
		// 	//状态0是删除，1是不可用(下架)2正常（上架）
		// 	dataState:"",
		// }
		],
		EDITBanner:{},
	},
	mutations:{
		controlSWITCHone(state){
			state.bannerlist = false
			state.addBanner = true
			state.editBanner = false
		},
		controlSWITCHone1(state,row){
			state.bannerlist = false
			state.addBanner = false
			state.editBanner = true
			state.EDITBanner = row
		},
		controlSWITCHtwo(state){
			state.bannerlist = true
			state.addBanner = false
			state.editBanner = false
		},

	},
	
	actions:{
		//Banner加载
		async BANNERLIST(context) {
			// let datas= new FormData()
   //  		datas.append('pageIndex', context.state.pageIndex - 1);
   //  		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getBannerList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    // data:datas
			});
    		if (data.code ===200) {
    			context.state.BannerList =[]
    			if (data.data.length !== 0) {
	    			data.data.forEach((item) => {
	    				context.state.BannerList.push({
	    					//主id
	    					id:item.id,
	    					//内容id
	    					contentId:item.contentId,
	    					//封面图
							coverUrl:item.coverUrl,
							//类型0艺人，1作品2专题
							type:item.type === 0 ? "艺人" : item.type === 1 ? "作品" : "专题",
							//对应名称对应类型根据type进行判断的
							title:item.type === 0 ? item.userInfo.userName : item.type === 1 ? item.worksInfo.title : item.topicInfo ===undefined ? "" :item.topicInfo.title ,
							//创建人
							creatuserName:item.creatorInfo.userName,
							//创建时间
							createTime:getLocalTime(item.createTime),
							//修改人
							editoruserName:item.editorInfo.userName,
							//修改时间
							updateTime:getLocalTime(item.updateTime),
							//状态0是删除，1是不可用(下架)2正常（上架）
							dataState:item.dataState === 0 ? "已删除": item.dataState === 1 ? "已下架" : "正常",
							userInfo: item.type === 0 ? item.userInfo : "",
							worksInfo: item.type === 1 ? item.worksInfo : "",
							topicInfo: item.type === 2 ? item.topicInfo : "",
	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
		},

		//删除
		async DELETEBANNER(context,id){
			let datas= new FormData()
    		datas.append('id', id);
			const {data} = await axios({
				method:"post",
				baseURL: `${urls.getBannerdelete}`,
			    // baseURL: `${context.state.url}/works/addToFeaturePool`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			switch(data.code) {
				case 200:
					context.dispatch("BANNERLIST")
					break;
				case 603:
					console.log(603)
					break;
			}
		},
		//下架
		async DISABLEBANNER(context,id){
			let datas= new FormData()
    		datas.append('id', id);
			const {data} = await axios({
				method:"post",
				baseURL: `${urls.getBannerdisable}`,
			    // baseURL: `${context.state.url}/works/addToFeaturePool`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			switch(data.code) {
				case 200:
					context.dispatch("BANNERLIST")
					break;
				case 603:
					console.log(603)
					break;
			}
		},
		//上架
		async ENABLEBANNER(context,id){
			let datas= new FormData()
    		datas.append('id', id);
			const {data} = await axios({
				method:"post",
				baseURL: `${urls.getBannerenable}`,
			    // baseURL: `${context.state.url}/works/addToFeaturePool`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			switch(data.code) {
				case 200:
					context.dispatch("BANNERLIST")
					break;
				case 603:
					console.log(603)
					break;
			}
		}
	}
}
export default bannerList