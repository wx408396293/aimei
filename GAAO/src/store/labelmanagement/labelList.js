import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"
export const LABELLIST = "LABELLIST"
export const RECOMMEND = "RECOMMEND"
export const ADDLABEL = "ADDLABEL"
export const GETLABEL = "GETLABEL"
export const DELETELABEL = "DELETELABEL"
export const DELETERECOMMENDL = "DELETERECOMMENDL"

const labelList={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:0,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,
		//编辑设置
		editRecommend: false,
		recommend_list:{},
		//推荐列表长度
		recommedLength:null,
		LabelList:[{
			//id
			id:"",
			//标签名
			name:"",
			//创建时间
			createTime:"",
			//描述
			content:"",
			//公开作品数
			worksCount:"",
		}],
		//推荐列表
		recommend:[{
			//推荐id
			id:"",
			//序号
			sort:"",
			//标签id
			tagId:"",
			//标签名
			name:"",

		}],
	},
	mutations:{
		getPageSize(state,index){
			state.pageIndex = index -1
		},
		getRecommend(state,{name,content}){
			state.editRecommend = true
			state.recommend_list.name =name
			state.recommend_list.content = content
		},
		setRecommend(state){
			state.editRecommend = false
			state.recommend_list.naem =""
			state.recommend_list.content = ""
		},
	},
	actions:{

		//标签查询
		async LABELLIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getTagList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.LabelList =[]
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.LabelList.push({
	    					//id
							id:item.id,
							//标签名
							name:item.name,
							//创建时间
							createTime:getLocalTime(item.createTime),
							//描述
							content:item.content === undefined ? "" : item.content,
							//公开作品数
							worksCount:item.worksCount,
	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	},
    	// 推荐列表
    	async RECOMMENDLIST(context) {
			const {data} = await axios({
				method:"post",
				baseURL: `${urls.getRecommendTagList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			});
    		if (data.code ===200) {
    			context.state.recommend =[]
    			// console.log(data.data.content)
    			context.state.recommedLength = data.data.length
    			if (data.data.length > 0) {
	    			data.data.forEach((item) => {
	    				context.state.recommend.push({
	    					//推荐id
							id:item.id,
	    					//序号
							sort:item.sort,
							//标签id
							tagId:item.tagId,
							//标签名
							name:item.tagInfo.name,
	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	},
    	// 推荐
    	async RECOMMEND(context,id) {
    		let judgetagId = true
    		context.state.recommend.forEach( (item) => {
    			if (id === item.tagId) {
    				judgetagId = false
    			}
    		});
    		if (judgetagId) {
    			let datas= new FormData()
	    		datas.append('tagId', id);
				const {data} = await axios({
					method:"post",
					baseURL: `${urls.addRecommendTag}`,
				    // baseURL: `${context.state.url}/works/getAllWorksList`,
				    timeout: 4000,
				    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
				    data:datas
				});

				context.dispatch("RECOMMENDLIST")
    		}else {
    			alert("已经添加过")
    		}
    	},
    	//删除推荐
    	async DELETERECOMMENDL(context,id) {
			let datas= new FormData()
    		datas.append('id', id);
			const {data} = await axios({
				method:"post",
				baseURL: `${urls.removeRecommendTag}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			
			if (data.code === 200) {
				context.dispatch("RECOMMENDLIST")
			}else {
				console.log(data)
			} 
    	},
    	//添加标签
    	async ADDLABEL(context,{name,content}) {
    		if (name ==="") {
    			alert("标签名不能为空")
    		}else {
    			let datas= new FormData()
	    		datas.append('name', name);
	    		datas.append('content', content);
				const {data} = await axios({
					method:"post",
					baseURL: `${urls.create}`,
				    // baseURL: `${context.state.url}/works/getAllWorksList`,
				    timeout: 4000,
				    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
				    data:datas
				});
				console.log(data)
				if (data.code === 603) {
					alert("标签已经添加，请重新填写表情名")
				}else if (data.code === 200) {
					alert("添加成功！")
				} 
    		}
    	},
    	//修改标签
    	async GETLABEL(context,{name,content}) {
			let datas= new FormData()
    		datas.append('name', name);
    		datas.append('content', content);
			const {data} = await axios({
				method:"post",
				baseURL: `${urls.edit}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			
			if (data.code === 603) {
				alert("标签已经添加，请重新填写表情名")
			}else if (data.code === 200) {
				context.dispatch("LABELLIST")
			} 
    	},
    	//删除标签
   //  	async DELETELABEL(context,{name,content}) {
			// let datas= new FormData()
   //  		datas.append('name', name);
   //  		datas.append('content', content);
			// const {data} = await axios({
			// 	method:"post",
			// 	baseURL: `${urls.edit}`,
			//     // baseURL: `${context.state.url}/works/getAllWorksList`,
			//     timeout: 4000,
			//     headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			//     data:datas
			// });
			
			// if (data.code === 603) {
			// 	alert("标签已经添加，请重新填写表情名")
			// }else if (data.code === 200) {
			// 	alert("修改成功")
			// 	context.dispatch("RECOMMENDLIST")
			// } 
   //  	}

	}
}
export default labelList