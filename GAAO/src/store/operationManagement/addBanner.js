import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"
export const SWITCHone ="SWITCHone"
export const SWITCHtwo ="SWITCHtwo"
export const SWITCHthree ="SWITCHthree"
export const GETBNANER = "GETBNANER"

const addBanner={
	namespaced: true,
	state:{
		specialList:false,
		worksList:false,
		artistList:false,
		//弹窗控制
		dialogVisible: false,
		//图片上传
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
		//内容渲染
		centent:[],
		//添加按键控制
		controlButton: false
	},
	mutations:{
		//编辑上传使用图片
		GETURL(state,url){
			state.url = url
		},
		//专题
		SWITCHone(state){
			state.specialList = true
			state.worksList = false
			state.artistList = false
		},
		//作品
		SWITCHtwo(state){
			state.specialList = false
			state.worksList = true
			state.artistList = false
		},
		//艺人
		SWITCHthree(state){
			state.specialList = false
			state.worksList = false
			state.artistList = true
		},
		//清除专题、艺人、作品
		SWITCHDELETE(state){
			state.specialList = false
			state.worksList = false
			state.artistList = false
		},
		//添加内容
		getCemtent(state,centent){
			state.centent.push(centent)
		},
		//清空内容
		setCentent(state){
			state.centent = []
		},
		//添加按键控制
		getControlButton(state){
			state.controlButton = true
		},
		setControlButton(state){
			state.controlButton = false
		},
		//上传
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
		},
	},
	actions:{
		//作品加载
		async GETUPLOADIP(context) {
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getUploadIp}`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			});
			if (data.code === 200) {
				context.state.Store_ip = data.data
			}else {
				console.log(data)
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
		},
		//创建Banner
		async GETBNANER(context,{type,contentId,coverUrl}){
			let datas= new FormData()
    		datas.append('type', type);
    		datas.append('contentId', contentId);
    		datas.append('coverUrl', coverUrl);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getBannercreate}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code === 200) {
			}else {
				
			}
		},
	}
}
export default addBanner