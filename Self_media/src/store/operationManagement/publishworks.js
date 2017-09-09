import axios from "axios";
import urls from "../url.js"
import getLocalTime from "../getLocalTimes.js"
var obj ={}
export const GETUPLOADIP = "GETUPLOADIP"
export const GETUPLOADIP1 = "GETUPLOADIP1"
export const GETTUPIAN1 = "GETTUPIAN1"
export const GETcreater = "GETcreater"

const publishworks={
	namespaced: true,
	state:{
		Store_ip:"http://119.146.204.122:3015",
		uri:"",
		//封面地址
		url:"",
		//视频地址
		vodeourl:"",
		dataURI:[],
		bolb:null,
		//视频
		uploadpicture:{
			md5s:"",
			fsize:null,
			stime:"",
			fileext:"",
			createtme:"",
			sign:""
		},
		URI:"",
		uploadpictures:{
			md5s:"",
			fsize:null,
			stime:"",
			fileext:"",
			createtme:"",
			sign:""
		},
		dataURIS:[],
		//加载
        content:[],
        id : 0,
        //弹窗
        dialogVisible:false,
        value:0,
        max:100,
		
	},
	mutations:{

		//添加视频
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
				width:picture.width,
				height:picture.height
			}
			console.log(state.uploadpicture)
		} ,
		//拿到视频二进制
		dataURItoBlob(state,dataURI) {
				state.dataURI = dataURI
		}, 
		//拿到图片
		uploadPictures(state,picture){
			var timestamp = Date.parse(new Date());
			timestamp = timestamp / 1000;
			// var fsie = picture.fileext.split("/")[1]
			state.uploadpictures = {
				md5s:picture.md5s,
				fsize:picture.fsize,
				stime:timestamp,
				fileext:picture.fileext.split("/")[1],
				createtme: timestamp,
				sign:picture.sign,
				width:picture.width,
				height:picture.height
			}
			console.log(state.uploadpictures)
		} ,
		//拿到图片二进制
		dataURItoBlobs(state,dataURIS) {
				state.dataURIS = dataURIS
		}, 
	},
	actions:{
		//提交作品
		async GETVIDEO(context,from){

			// from.input.split(",")
			// console.log(from)
			let datas= new FormData()
			//视频名
    		datas.append('video.title', from.mvname);
    		//封面地址
    		datas.append('video.urlCover', context.state.url);
    		//公开状态
    		datas.append('video.state', parseInt(from.state));
    		//描述
    		datas.append('video.description', from.lable);
    		//视频地址
    		datas.append('video.videoUrl',context.state.vodeourl)
    		//md5
    		datas.append('video.videoMd5',context.state.uploadpicture.md5s)
    		//视频格式
    		datas.append('video.videoExt',context.state.uploadpicture.fileext)
    		//视频大小
    		datas.append('video.videoSize',parseInt(context.state.uploadpicture.fsize))
    		//视频宽高比
    		datas.append('video.videoRatio',"16:9")
    		//视频时长
    		datas.append('video.videoDuration', from.videoDuration)
    		//标题
    		let input = from.input.split(",")
    		console.log( input[0], input[1])
    		if (input.length ===1) {
    			datas.append('tags[0].name', input[0])
    		}else {
    			datas.append('tags[0].name', input[0])
    			datas.append('tags[1].name', input[1])
    		}
    		console.log(datas)
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.backstageRelease}`,
			    // timeout: 4000,
			    headers: {
			    	'Content-Type': 'application/x-www-form-urlencoded',
			    	'aimy-token': localStorage.selfMediaToken,
			    	"aimy-divers":'{"os":2,"version":"1.0.0"}',
			    	"aimy-id":"1",
			    },
			    data:datas,
			});
			if (data.code === 200) {
				alert("上传成功")
			}else {
				console.log(data)
			}
    		

		},
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
			console.log(datas)
			if (datas.status ===200) {
				context.state.uri = datas.data.uri
				context.dispatch("POSTTUPIAN")

			}else {
				console.log(datas.status)
			}
		},
		//上传视频
		async POSTTUPIAN(context){
			const data = await axios({
				method:"post",
				// baseURL: "http://192.168.10.148/cms/test/upload",
			    baseURL: `${context.state.Store_ip}/minik_upload_file`,
			    // timeout: 30000,
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
			    data:context.state.dataURI,
			    onUploadProgress: function (progressEvent) {
				    context.state.max = progressEvent.total
				    context.state.value = progressEvent.loaded
				},
			});
			context.state.vodeourl = `http://dev.storage.singworld.net/${data.data.url}`
			console.log(context.state.vodeourl)
		},
		//请求上传
		async GETTUPIANS(context){
			const datas = await axios({
				method:"get",
				// baseURL: "http://119.146.204.122:3015/minik_upload_file ",
			    baseURL: `${context.state.Store_ip}/minik_upload_file`,
			    timeout: 3000,
			    headers: {
			    	//md5
			    	Fmd5 : context.state.uploadpictures.md5s,
			    	//文件大小
			    	Fsize : context.state.uploadpictures.fsize,
			    	//minikp平台
			    	Uid : "0",
			    	//开始上传时间
			    	Stime : context.state.uploadpictures.stime,
			    	//文件扩展名
			    	FileExt : context.state.uploadpictures.fileext,
			    	//作品生成时间
			    	CreateTime : context.state.uploadpictures.createtme,
			    	//加密窜
			    	Sign:context.state.uploadpictures.sign
			    },
			});
			console.log(datas)
			if (datas.status ===200) {
				context.state.URI = datas.data.uri
				context.dispatch("POSTTUPIANS")

			}else {
				console.log(datas.status)
			}
		},
		//上传图片
		async POSTTUPIANS(context){
			const data = await axios({
				method:"post",
				// baseURL: "http://192.168.10.148/cms/test/upload",
			    baseURL: `${context.state.Store_ip}/minik_upload_file`,
			    // timeout: 30000,
			    headers: {
			    	"Content-Type":"application/octet-stream",
			    	//md5
			    	Fmd5 : context.state.uploadpictures.md5s,
			    	//文件大小
			    	Fsize : context.state.uploadpictures.fsize,
			    	//minikp平台
			    	Uid : "0",
			    	//开始上传时间
			    	Stime : context.state.uploadpictures.stime,
			    	//文件扩展名
			    	FileExt : context.state.uploadpictures.fileext,
			    	//作品生成时间
			    	CreateTime : context.state.uploadpictures.createtme,
			    	//加密窜
			    	Sign:context.state.uploadpictures.sign,
			    	//url地址
			    	Uri: context.state.URI
			    },
			    data:context.state.dataURIS,
			});
			context.state.url = `http://dev.storage.singworld.net/${data.data.url}`
			console.log(context.state.url)
		},
	}
}
export default publishworks