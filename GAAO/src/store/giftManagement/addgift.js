import axios from "axios";
import urls from "../url.js"
import getLocalTime from "../getLocalTimes.js"

export const GETUPLOADIP = "GETUPLOADIP"
export const GETTUPIAN = "GETTUPIAN"

const addgift={
	namespaced: true,
	state:{
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
	},
	mutations:{
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
export default addgift