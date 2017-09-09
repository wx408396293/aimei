import axios from "axios";
import urls from "../url.js"
import router from "../../router/index.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"
export const MECHANISMLIST = "MECHANISMLIST"
export const GETMECHANISM ="GETMECHANISM"
export const GETADOPT = "GETADOPT"
export const GETREFUSE = "GETREFUSE"

export const AUDITEDARTIST = "AUDITEDARTIST"
export const REVOKAUDITED = "REVOKAUDITED"


const mechanismList={
	namespaced: true,
	state:{
		//申请当前页码
		pageIndex:1,
		//申请每页显示条数
		pageSize:10,
		//申请总条数
		totalElements:0,
		//待审核艺人表
		mechanismLIST:[
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
		//待审核机构以往记录
		mechanismLIST_list:[],
		//待审核机构以往记录详情
		mechanismLIST_details:{},
		mechanism_A:{},
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
		auditedatMechanism:[],
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
			state.mechanism_A = pending
			router.push("/info/artistManagement/basicData/mechanismBasic")
		},
		//跳转审核通过详情
		TOAudited(state,pending){
			state.audite_A = pending
			router.push("/info/artistManagement/basicData/mechanismedBasic")
		},
		//以往申请记录显示
		mechanism_details(state,pending){
			state.mechanismLIST_details = pending
			router.push("/info/artistManagement/basicData/basicClass/mecanismbasiclist")
		},
		//审核通过提示
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
	},
	actions:{
		//机构审核列表查询
		async MECHANISMLIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex-1);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getPendingOrgReviews}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.mechanismLIST =[]
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.mechanismLIST.push({
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
							gender:item.userInfo.gender === 0 ? "未知": item.userInfo.gender === 1 ? "男" :"女",
							//手机号
							phoneNumber:item.userInfo.phoneNumber,
							//注册时间
							UerCreateTime:getLocalTime(item.userInfo.createTime),
							//申请时间
							createTime:getLocalTime(item.createTime),
							//最后登录时间
							updateTime:getLocalTime(item.updateTime),
							//申请身份
							typeName:item.typeInfo.name,
							//机构名称
							enterpriseName:item.enterpriseName,
							//营业执照注册号
							registerNumber:item.registerNumber,
							//社会信用代码
							creditCode:item.creditCode,
							//法人
							legalPerson:item.legalPerson,
							//经营范围
							scopeOfBusiness:item.scopeOfBusiness,
							//联系方式
							contactWay:item.contactWay,
							//营业执照
							license:item.license,
							//身份证正面
							frontPicture:item.frontPicture,
							//身份证反面
							oppositePicture:item.oppositePicture,
							//审核状态0待审核，1审核通过，2审核不通过
							auditStatus:item.auditStatus === 0 ? "待审核" : item.auditStatus === 1 ? "审核通过" : "审核不通过",
							//大赛奖项
							awards:item.awards,
							//附加描述
							description:item.description,
							// 附加图片
							pictureUrl:item.picsInfo === undefined? [] : item.picsInfo,
							//附加作品链接
							worksLink : item.worksInfo === undefined ? [] : item.worksInfo,

	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	},
    	//机构历史申请记录
    	async GETMECHANISM(context,{id,userId,typeId}) {
    		let datas= new FormData()
    		datas.append('id', id);
    		datas.append('userId', userId);
    		datas.append('typeId', typeId);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getOrgReviewHistory}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.mechanismLIST_list =[]
    			if (data.data !== undefined) {
    				console.log(data)
	    			data.data.forEach((item) => {
	    				context.state.mechanismLIST_list.push({
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
							gender:item.userInfo.gender === 0 ? "未知": item.userInfo.gender === 1 ? "男" :"女",
							//手机号
							phoneNumber:item.userInfo.phoneNumber,
							//注册时间
							UerCreateTime:getLocalTime(item.userInfo.createTime),
							//申请时间
							createTime:getLocalTime(item.createTime),
							//最后登录时间
							updateTime:getLocalTime(item.updateTime),
							//申请身份
							typeName:item.typeInfo.name,
							//机构名称
							enterpriseName:item.enterpriseName,
							//营业执照注册号
							registerNumber:item.registerNumber,
							//社会信用代码
							creditCode:item.creditCode,
							//法人
							legalPerson:item.legalPerson,
							//经营范围
							scopeOfBusiness:item.scopeOfBusiness,
							//联系方式
							contactWay:item.contactWay,
							//营业执照
							license:item.license,
							//身份证正面
							frontPicture:item.frontPicture,
							//身份证反面
							oppositePicture:item.oppositePicture,
							//审核状态0待审核，1审核通过，2审核不通过
							auditStatus:item.auditStatus === 0 ? "待审核" : item.auditStatus === 1 ? "审核通过" : "审核不通过",
							//审核人
							auditUseUserName:item.auditUserInfo.userName,
							//理由
							auditReason:item.auditReason,
							//大赛奖项
							awards:item.awards,
							//附加描述
							description:item.description,
							// 附加图片
							pictureUrl:item.picsInfo === undefined? [] : item.picsInfo,
							//附加作品链接
							worksLink : item.worksInfo === undefined ? [] : item.worksInfo,
							//申请机构或艺人身份
							type:"机构",

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
				baseURL: `${urls.passOrgReview}`,
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
				baseURL: `${urls.refuseOrgReview}`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.commit("getdialogVisible")
    			router.push("/info/artistManagement/Auditmechanism")
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
				baseURL: `${urls.getReviewedOrgReviews}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.auditedatMechanism =[]
    			context.state.auditedaElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.auditedatMechanism.push({
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
							gender:item.userInfo.gender === 0 ? "未知": item.userInfo.gender === 1 ? "男" :"女",
							//手机号
							phoneNumber:item.userInfo.phoneNumber,
							//注册时间
							UerCreateTime:getLocalTime(item.userInfo.createTime),
							//申请时间
							createTime:getLocalTime(item.createTime),
							//最后登录时间
							updateTime:getLocalTime(item.updateTime),
							//申请身份
							typeName:item.typeInfo.name,
							//机构名称
							enterpriseName:item.enterpriseName,
							//营业执照注册号
							registerNumber:item.registerNumber,
							//社会信用代码
							creditCode:item.creditCode,
							//法人
							legalPerson:item.legalPerson,
							//经营范围
							scopeOfBusiness:item.scopeOfBusiness,
							//联系方式
							contactWay:item.contactWay,
							//营业执照
							license:item.license,
							//身份证正面
							frontPicture:item.frontPicture,
							//身份证反面
							oppositePicture:item.oppositePicture,
							//审核状态0待审核，1审核通过，2审核不通过
							auditStatus:item.auditStatus === 0 ? "待审核" : item.auditStatus === 1 ? "审核通过" : "审核不通过",
							//大赛奖项
							awards:item.awards,
							//附加描述
							description:item.description,
							// 附加图片
							pictureUrl:item.picsInfo === undefined? [] : item.picsInfo,
							//附加作品链接
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
				baseURL: `${urls.resetOrgReview}`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.commit("getRevokWhy")
    			router.push("/info/artistManagement/Auditedmechanism")
    		}else {
    			console.log(data)
    		}
    	},
	}
}
export default mechanismList