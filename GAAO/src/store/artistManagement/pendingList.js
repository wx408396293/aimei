import axios from "axios";
import urls from "../url.js"
import router from "../../router/index.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"
export const PENDINGLIST = "PENDINGLIST"
export const GETPENDING ="GETPENDING"
export const GETADOPT = "GETADOPT"
export const GETREFUSE = "GETREFUSE"

export const AUDITEDARTIST = "AUDITEDARTIST"
export const REVOKAUDITED = "REVOKAUDITED"


const pendingList={
	namespaced: true,
	state:{
		//申请当前页码
		pageIndex:1,
		//申请每页显示条数
		pageSize:10,
		//申请总条数
		totalElements:0,
		//待审核艺人表
		pendingLIST:[
			// {//主id
			// id:"",
			// //用户头像
			// avatarUrl:"",
			// //用户ID
			// userId:"",
			// //用户名
			// //请求类型
			// typeId:"",
			// userName:"",
			// //性别0是未知1是男2是女
			// gender:"",
			// //手机号
			// phoneNumber:"",
			// //注册时间.申请时间
			// createTime:"",
			// //最后登录时间
			// updateTime:"",
			// //申请身份
			// typeName:"",
			// //真实姓名
			// name:"",
			// //申请人身份
			// certificateNo:"",
			// //证件正面
			// frontPicture:"",
			// //证件反面
			// oppositePicture:"",
			// //证件反面
			// awards:"",
			// //大赛奖项
			// oppositePicture:"",
			// //附加描述
			// description:"",
			// //手持证件
			// holdPicture:"",
			// //审核状态0待审核，1审核通过，2审核不通过
			// auditStatus:"",}
		],
		//待审核艺人以往记录
		pendingLIST_list:[],
		//待审核艺人以往记录详情
		pendingList_details:[],
		pending_A:{},
		//注册成提示
		adopt:false,
		//注册失败提示
		dialogVisible: false,
		//注册失败原因
		reason:"",
		//已审核列表
		//申请当前页码
		auditedaindex:1,
		//申请每页显示条数
		auditedapageSize:10,
		//申请总条数
		auditedaElements:0,
		//已审核列表
		auditedatList:[],
		audite_A:{},
		//撤销控制
		RevokWhy:false,
	
	},
	mutations:{
		//待审核
		getPageSize(state,index){
			state.pageIndex = index
		},
		//已审核
		getAuditedaindex(state,index){
			state.auditedaindex = index
		},
		//跳转审核详情
		ToExamine(state,pending){
			state.pending_A = pending
			router.push("/info/artistManagement/basicData/artistBasic")
		},
		//跳转审核通过详情
		TOAudited(state,pending){
			state.audite_A = pending
			router.push("/info/artistManagement/basicData/auditedBasic")
		},
		//以往申请记录显示
		pending_details(state,pending){
			state.pendingList_details = pending
			router.push("/info/artistManagement/basicData/basicClass/artistbasiclist")
		},
		//审核成功提示
		getadopt(state){
			state.adopt = !state.adopt
		},
		//审核失败提示
		getdialogVisible(state){
			state.dialogVisible = !state.dialogVisible
		},
		//审核失败内容填写
		getreason(state,reason){
			state.reason = reason
		},
		//撤销控制
		getRevokWhy(state){
			state.RevokWhy = !state.RevokWhy
		},
		// //撤销内容填写
		// getreason(state,reason){
		// 	state.reason = reason
		// },
	},
	actions:{
		//艺人审核列表查询
		async PENDINGLIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex-1);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getPendingUserReviews}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.pendingLIST =[]
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.pendingLIST.push({
	    					//主id
							id:item.id,
							//用户头像
							avatarUrl:item.userInfo.avatarUrl,
							//用户ID
							userId:item.userInfo.userId,
							//用户名
							userName:item.userInfo.userName,
							//申请类型id
							typeId:item.typeId,
							//性别0是未知1是男2是女
							gender:item.gender === 0 ? "未知": item.gender === 1 ? "男" :"女",
							//手机号
							phoneNumber:item.phoneNumber,
							//注册时间
							UerCreateTime:getLocalTime(item.userInfo.createTime),
							//申请时间
							createTime:getLocalTime(item.createTime),
							//最后登录时间
							updateTime:getLocalTime(item.updateTime),
							//申请身份
							typeName:item.typeInfo.name,
							//真实姓名
							name:item.name,
							//申请人身份
							certificateNo:item.certificateNo,
							//证件正面
							frontPicture:item.frontPicture,
							//证件反面
							oppositePicture:item.oppositePicture,
							//大赛奖项
							awards:item.awards,
							//附加描述
							description:item.description,
							//手持证件
							holdPicture:item.holdPicture,
							// //审核状态0待审核，1审核通过，2审核不通过
							// auditStatus:"",
							// 附加图片
							pictureUrl:item.picsInfo === undefined? [] : item.picsInfo,
							//附加链接
							worksLink : item.worksInfo === undefined ? [] : item.worksInfo,

	    				})
	    			});
	    		}

    		}else {
    			console.log(data)
    		}
    	},
    	//艺人历史申请记录
    	async GETPENDING(context,{id,userId,typeId}) {
    		let datas= new FormData()
    		datas.append('id', id);
    		datas.append('userId', userId);
    		datas.append('typeId', typeId);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getUserReviewHistory}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.pendingLIST_list =[]
    			// console.log(data.data.content)
    			if (data.data !== undefined) {
	    			data.data.forEach((item) => {
	    				context.state.pendingLIST_list.push({
	    					//主id
							id:item.id,
							//用户头像
							avatarUrl:item.userInfo.avatarUrl,
							//用户ID
							userId:item.userInfo.userId,
							//用户名
							userName:item.userInfo.userName,
							//性别0是未知1是男2是女
							gender:item.gender === 0 ? "未知": item.gender === 1 ? "男" :"女",
							//手机号
							phoneNumber:item.phoneNumber,
							//申请类型id
							typeId:item.typeId,
							//注册时间
							UerCreateTime:getLocalTime(item.userInfo.createTime),
							//申请时间
							createTime:getLocalTime(item.createTime),
							//最后登录时间
							updateTime:getLocalTime(item.updateTime),
							//申请身份
							typeName:item.typeInfo.name,
							//真实姓名
							name:item.name,
							//申请人身份
							certificateNo:item.certificateNo,
							//证件正面
							frontPicture:item.frontPicture,
							//证件反面
							oppositePicture:item.oppositePicture,
							//大赛奖项
							awards:item.awards,
							//附加描述
							description:item.description,
							//手持证件
							holdPicture:item.holdPicture,
							// //审核状态0待审核，1审核通过，2审核不通过
							auditStatus:item.auditStatus === 0 ? "待审核" : item.auditStatus === 1 ? "审核通过" : "审核不通过",
							// 附加图片
							pictureUrl:item.picsInfo === undefined? [] : item.picsInfo,
							//附加链接
							worksLink : item.worksInfo === undefined ? [] : item.worksInfo,
							//机构或艺人
							type:"艺人",
							//以往审核人
							auditUser:item.auditUserInfo.userName,
							//审核人
							auditUseUserName:item.auditUserInfo.userName,
							//理由
							auditReason:item.auditReason,

	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	},
    	//审核通过
    	async GETADOPT(context,id) {
    		let datas= new FormData()
    		datas.append('id', id);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.passUserReview}`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.commit("getadopt")
    		}else {
    			console.log(data)
    		}
    	},
    	
    	//审核拒绝
    	async GETREFUSE(context,{id,reason}) {
    		context.commit("getreason",reason)
    		
    		let datas= new FormData()
    		datas.append('id', id);
    		datas.append('reason', reason);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.refuseUserReview}`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.commit("getdialogVisible")
    			router.push("/info/artistManagement/pendingAudit")
    		}else {
    			console.log(data)
    		}
    	},
    	//已审核列表
    	async AUDITEDARTIST (context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.auditedaindex-1);
    		datas.append('pageSize', context.state.auditedapageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getReviewedUserReviews}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.auditedatList =[]
    			context.state.auditedaElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.auditedatList.push({
	    					//主id
							id:item.id,
							//用户头像
							avatarUrl:item.userInfo.avatarUrl,
							//用户ID
							userId:item.userInfo.userId,
							//用户名
							userName:item.userInfo.userName,
							//申请类型id
							typeId:item.typeId,
							//性别0是未知1是男2是女
							gender:item.gender === 0 ? "未知": item.gender === 1 ? "男" :"女",
							//手机号
							phoneNumber:item.phoneNumber,
							//注册时间
							UerCreateTime:getLocalTime(item.userInfo.createTime),
							//申请时间
							createTime:getLocalTime(item.createTime),
							//最后登录时间
							updateTime:getLocalTime(item.updateTime),
							//身份
							typeName:item.typeInfo.name,
							//真实姓名
							name:item.name,
							//申请人身份
							certificateNo:item.certificateNo,
							//证件正面
							frontPicture:item.frontPicture,
							//证件反面
							oppositePicture:item.oppositePicture,
							//大赛奖项
							awards:item.awards,
							//附加描述
							description:item.description,
							//手持证件
							holdPicture:item.holdPicture,
							// //审核状态0待审核，1审核通过，2审核不通过
							auditStatus:item.auditStatus === 0 ? "待审核" : item.auditStatus === 1 ? "审核通过" : "审核不通过",
							// 附加图片
							pictureUrl:item.picsInfo === undefined? [] : item.picsInfo,
							//附加链接
							worksLink : item.worksInfo === undefined ? [] : item.worksInfo,

	    				})
	    			});
	    		}

    		}else {
    			console.log(data)
    		}
    	},
    	//撤销审核
    	async REVOKAUDITED(context,{id,reason}) {
    		let datas= new FormData()
    		datas.append('id', id);
    		datas.append('reason', reason);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.resetUserReview}`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.commit("getRevokWhy")
    			router.push("/info/artistManagement/auditedList")
    		}else {
    			console.log(data)
    		}
    	},
	}
}
export default pendingList