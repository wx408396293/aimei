import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"

export const SWITCHone ="SWITCHone"
export const SWITCHtwo ="SWITCHtwo"
export const POPLIST = "POPLIST"
export const TELEASEPOP = "TELEASEPOP"

const popList={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:1,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,

		poplist: true,
		poplistEdit:false,
		popList:[{
			//作品id
			id:"",
			//流行榜封面
			coverUrl:"",
			//期数
			periodsNumber:"",
			//作品数
			worksCount:"",
			//发布状态
			releaseState:"",
			//发布时间
			releaseTime:"",
			//发布人
			cmsUserName:"",
			//生成榜单时间
			listDate:"",
			//标题
			title:"",
		}],
		//单个榜单
		getPopList:{},
		//上传图片
		Store_ip:"http://119.146.204.122:3015",
		uri:"",
		url:"",
		dataURI:[],
		bolb:null,
		uploadpicture:{
			md5s:"",
			fsize:null,
			stime:"",
			fileext:"",
			createtme:"",
			sign:""
		},
		//编辑流行榜标题
	},
	mutations:{
		getPageSize(state,index){
			state.pageIndex = index
		},
		//跳转到编辑页面
		SWITCHone(state){
			state.poplist = false
			state.poplistEdit = true
		},
		//跳转到列表页面
		SWITCHtwo(state){
			state.poplist = true
			state.poplistEdit = false
		},
		//保存单个数据
		getpopList(state,row){
			state.getPopList = row
		},
		//取消时调用url
		setAddPop(state){
			state.url =""
		},
		//设置上传参数
		uploadPicture(state,picture){
			var timestamp = Date.parse(new Date());
			timestamp = timestamp / 1000;
			// var fsie = picture.fileext.split("/")[1]
			state.uploadpicture = {
				md5s:picture.md5s,
				fsize:picture.fsize,
				stime:timestamp,
				fileext:picture.fileext.split("/")[1],
				createtme: timestamp,
				sign:picture.sign,
			}
		} ,
		//转拿到二进制
		dataURItoBlob(state,dataURI) {
				state.dataURI = dataURI
		} 
	},
	actions:{
		//流行榜列表
		async POPLIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex-1);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getPopList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.popList =[]
    			// console.log(data.data.content)
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.popList.push({
	    					//作品id
							id: item.id,
							//流行榜封面
							coverUrl:item.coverUrl === undefined ? "" : item.coverUrl,
							//期数
							periodsNumber:item.periodsNumber,
							//作品数
							worksCount:item.worksCount,
							//发布状态
							releaseState:item.releaseState === 0 ? "未发布" : "已发布",
							//发布时间
							releaseTime:item.releaseTime === undefined ? "" : getLocalTime(item.releaseTime),
							//发布人
							cmsUserName:item.cmsUserInfo === undefined ? "" : item.cmsUserInfo.userName,
							//生成榜单时间
							listDate:item.listDate,
							//标题
							title:item.title === undefined ? "" : item.title,
	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	},
    	//发布榜单
    	async TELEASEPOP(context,{id,title,coverUrl}){
			let datas= new FormData()
    		datas.append('id', id);
    		datas.append('title', title);
    		datas.append('coverUrl', coverUrl);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.publish}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code === 200) {
				context.dispatch("POPLIST")
			}else {
				
			}
		},
		//发布榜单
    	async EDITPOP(context,{id,title,coverUrl}){
			let datas= new FormData()
    		datas.append('id', id);
    		datas.append('title', title);
    		datas.append('coverUrl', coverUrl);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.modify}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			context.commit("SWITCHtwo")
			if (data.code === 200) {
			}else {
				context.commit("SWITCHtwo")
			}
		},
		//请求上传
		async GETTUPIAN(context){
			const datas = await axios({
				method:"get",
				// baseURL: "http://119.146.204.122:3015/minik_upload_file ",
			    baseURL: `${context.state.Store_ip}/minik_upload_file`,
			    timeout: 3000,
			    headers: {
			    	//md5
			    	Fmd5 : context.state.uploadpicture.md5s,
			    	//文件大小
			    	Fsize : context.state.uploadpicture.fsize,
			    	//minikp平台
			    	Uid : "0",
			    	//开始上传时间
			    	Stime : context.state.uploadpicture.stime,
			    	//文件扩展名
			    	FileExt : context.state.uploadpicture.fileext,
			    	//作品生成时间
			    	CreateTime : context.state.uploadpicture.createtme,
			    	//加密窜
			    	Sign:context.state.uploadpicture.sign
			    },
			});
			if (datas.status ===200) {
				console.log(datas)
				context.state.uri = datas.data.uri
				context.dispatch("POSTTUPIAN")

			}else {
				console.log(datas.status)
			}
		},
		//上传图片
		async POSTTUPIAN(context){
			const data = await axios({
				method:"post",
				// baseURL: "http://192.168.10.148/cms/test/upload",
			    baseURL: `${context.state.Store_ip}/minik_upload_file`,
			    timeout: 30000,
			    headers: {
			    	"Content-Type":"application/octet-stream",
			    	//md5
			    	Fmd5 : context.state.uploadpicture.md5s,
			    	//文件大小
			    	Fsize : context.state.uploadpicture.fsize,
			    	//minikp平台
			    	Uid : "0",
			    	//开始上传时间
			    	Stime : context.state.uploadpicture.stime,
			    	//文件扩展名
			    	FileExt : context.state.uploadpicture.fileext,
			    	//作品生成时间
			    	CreateTime : context.state.uploadpicture.createtme,
			    	//加密窜
			    	Sign:context.state.uploadpicture.sign,
			    	//url地址
			    	Uri: context.state.uri
			    },
			    data:context.state.dataURI
			});
			context.state.url = `http://dev.storage.singworld.net/${data.data.url}`
			console.log(data)
			console.log(context.state.url)
			
		}
	}
}
export default popList