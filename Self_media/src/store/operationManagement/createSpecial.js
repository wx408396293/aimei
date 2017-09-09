import axios from "axios";
import urls from "../url.js"
import getLocalTime from "../getLocalTimes.js"
var obj ={}
export const GETUPLOADIP = "GETUPLOADIP"
export const GETUPLOADIP1 = "GETUPLOADIP1"
export const GETTUPIAN1 = "GETTUPIAN1"
export const GETcreater = "GETcreater"

const createSpecial={
	namespaced: true,
	state:{
		Store_ip:"http://119.146.204.122:3015",
		uri:"",
		//封面地址
		url:"",
		//图片地址
		url1:"",
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
		//加载
        content:[],
        id : 0,
        //弹窗
        dialogVisible:false,
		
	},
	mutations:{
		//添加文本
		AddjiazaiList(state){
			state.content.push({
				type:0,
				// id :state.id
			})
			state.id ++
		},
		addtexts(state,{index,textarea}){
			state.content.forEach((item,indexts) => {
				if (index === indexts) {
					item.content = textarea
				}
			});
			// console.log(state.jiazaiList)
		},
		//删除
		cleartjiazaiList(state,index){
			state.content.forEach((item,indexts) => {
				if (index === indexts) {
					state.content.splice(index,1)
				}
			});
			
		},
		//添加图片
		Addimages(state){
			state.content.push({
				type:1,
				// id :state.id
			})
			state.id ++
		},
		Addimagess(state,{index,url}){
			state.content.forEach((item,indexts) => {
				if (index === indexts) {
					item.url = url
					item.height = state.uploadpicture.height
					item.width = state.uploadpicture.width
				}
			});
			console.log(state.content)
		},
		//添加作品
		PuxhWorksList(state,works ){
			var id = null;
			if (works.type === "视频") {
				// if (works.id !== undefined && works.opusId === undefined) {
				// 	id=works.id 
				// }
				// if (works.id !== undefined && works.opusId !== undefined) {
				// 	id=works.opusId 
				// }
				state.content.push({
					type:2,
					//作品图
					coverUrl:works.urlCover,
					//标题
					title:works.title,
					// //作者名
					// audioName:works.audioName,
					//作品id
					worksId:works.id,
					// id:state.id
					// userBaseInfo:works.userBaseInfo,
					//用户头像
					avatarUrl:works.userBaseInfo.avatarUrl,
					//用户id
					userId:works.userBaseInfo.userId,
					//用户名
					userName:works.userBaseInfo.userName,
				})
			}else {
				state.content.push({
					type:3,

					coverUrl:works.urlCover,
					//作品名
					title:works.title,
					// //作者名
					// audioName:works.audioName,
					//id
					worksId:works.id,
					// id:state.id
					// userBaseInfo:works.userBaseInfo
					//用户头像
					avatarUrl:works.userBaseInfo.avatarUrl,
					//用户id
					userId:works.userBaseInfo.userId,
					//用户名
					userName:works.userBaseInfo.userName,
				})
			}
			state.id ++
			
		},
		//作品弹窗
		dialogVisibletrue(state){
			state.dialogVisible = true
		},
		dialogVisiblefalse(state){
			state.dialogVisible = false
		},
		//上移
		shangye(state,index){
			state.content.forEach((item,indexts) => {
				if (index = indexts) {
					obj = item
				}
			});
			// state.jiazaiList.splice(index,1)
			state.content.splice(index-1,0,obj)

		},
		//添加图片
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
		//请求上传
		async GETTUPIAN1(context,index){
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
				context.dispatch("POSTTUPIAN1",index)

			}else {
				console.log(datas.status)
			}
		},
		//上传图片
		async POSTTUPIAN1(context,index){
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
			context.state.url1 = `http://dev.storage.singworld.net/${data.data.url}`
			context.commit("Addimagess",{
				index:index,
				url:context.state.url1
			})
			var pjist = document.getElementsByClassName("imagest")
			pjist[index].style.backgroundImage= `url(${context.state.url1 })`;
		},
		//提交专题
		async GETcreater(context,{title,description,url}){
			var jies =[]
			context.state.content.forEach( (item) => {
					jies.push(JSON.stringify(item))
			});
			var geits =jies.join(",")
			var tstt ='[' + geits +']'
			let datas= new FormData()
    		datas.append('title',title);
    		datas.append('description', description );
    		datas.append('coverUrl', url);
    		datas.append('content', tstt);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.create}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {
			    	'aimy-token': localStorage.selfMediaToken,
			    	"aimy-divers":'{"os":2,"version":"1.0.0"}',
			    	"aimy-id":"1",
			    },
			    data:datas
			});
			if (data.code === 200) {
				alert("创建成功")
				context.state.content =[]
			}else {
				console.log(data)
			}
		},
	}
}
export default createSpecial