import axios from "axios";
import router from "../../router/index.js"
import urls from "../url.js"
const DEPARTMENT = "DEPARTMENT"
const SETACCOUNT = "SETACCOUNT"
const ACCOUNTLIST = "ACCOUNTLIST"
const GATTACCOUNT = "GATTACCOUNT"
const setGATTACCOUNT = "setGATTACCOUNT"
const REVISEACCOUNTIST = "REVISEACCOUNTIST"

const account={
	namespaced: true,
	state:{
		// url:"http://192.168.10.148/cms",
		departmentw:[],
		//注册弹窗
		dialogVisible:false,
		//账户列表
		AccountList:[],
		//页面跳转
		Gataccount:{
			//账户名
			userName:"",
			//三级权限
			resources:"",
			//部门iD
			department:"",
			//二级权限
			roles:"",
			//真实姓名
			realName:"",
			//性别
			gender:"",
			//邮件
			email:"",
			//电话号码
			phoneNumber:"",
			//图片
			avatarUrl: '',
		},
		accountLists:true,
		Modifyaccount:false,
	},
	mutations:{
		DIALOGVIDIBLE(state){
			state.dialogVisible = false
		},
		SetDIALOGVIDIBLE(state){
			var b = true
			state.dialogVisible = b
		},
		GATTACCOUNT(state,gettaccount){
			state.Gataccount = gettaccount
			state.accountLists= false
			state.Modifyaccount = true
			router.push("/info/account/accountList")
		},
		setGATTACCOUNT(state){
			state.accountLists = true
			state.Modifyaccount = false
		}
	},
	actions:{
		//部门查询
		async DEPARTMENT(context) {
			context.state.departmentw = []
			var  {data}  = await axios({
				method:"post",
				baseURL: `${urls.getDepartmentList}`,
			    // baseURL: `${context.state.url}/auth/getDepartmentList`,
			    timeout: 1000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			});
			data.data.forEach( (itme) => {
				if (itme.id !==1) {
					context.state.departmentw.push({
						id:itme.id,
						name:itme.name,
						adminRoles: itme.adminRoles
					})
				}
			});
    	},
    	//添加用户
    	async SETACCOUNT(context,from){
    		console.log(`${urls.passportcreate}`)
    		var datas= new FormData()
    		datas.append('userName', from.userName);
    		datas.append('password', from.password);
    		datas.append('resources', from.resources);
    		datas.append('department', from.department);
    		datas.append('roles', from.roles);
    		datas.append('realName', from.realName);
    		datas.append('gender', from.gender);
    		datas.append('email', from.email);
    		datas.append('phoneNumber', from.phoneNumber);
    		datas.append('avatarUrl', from.avatarUrl);
    		var {data} = await axios({
				method:"post",
				baseURL: `${urls.passportcreate}`,
			    // baseURL: `${context.state.url}/passport/create`,
			    timeout: 1000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code === 200) {
				context.commit("SetDIALOGVIDIBLE")
			}else {
				console.log(data)
			}
    	},
    	//用户列表
    	async ACCOUNTLIST(context,from){
    		var  {data}  = await axios({
				method:"post",
				baseURL: `${urls.getCmsUserList}`,
			    // baseURL: `${context.state.url}/passport/getCmsUserList`,
			    timeout: 1000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			});
			context.state.AccountList = []
			if (localStorage.department === "1") {
				data.data.forEach( (item) => {
					if(item.rolesSet[0] !== 1){
						context.state.AccountList.push({
							userId:item.userId,
							userName : item.userName,
							resources : item.resources,
							department : item.department  === 2? "运营部" : "测试用部门",
							roles : item.roles,
							realName : item.realName,
							gender : item.gender === 0 ? "未知" : item.gender === 1? "男" : "女",
							email : item.email,
							phoneNumber : item.phoneNumber,
							avatarUrl : item.avatarUrl
						})
					}
				});
			}else {
				data.data.forEach( (item) => {
					if(item.rolesSet[0] !== 2){
						context.state.AccountList.push({
							userId:item.userId,
							userName : item.userName,
							resources : item.resources,
							department : item.department  === 2? "运营部" : "测试用部门",
							roles : item.roles,
							realName : item.realName,
							gender : item.gender === 0 ? "未知" : item.gender === 1? "男" : "女",
							email : item.email,
							phoneNumber : item.phoneNumber,
							avatarUrl : item.avatarUrl
						})
					}

				});
			}
    	},
    	//修改权限
    	async REVISEACCOUNTIST(context,from){
    		var datas= new FormData()
    		datas.append('userId', from.userId);
    		datas.append('userName', from.userName);
    		if (from.password !== undefined) {
    			datas.append('password', from.password);
    		}

    		datas.append('resources', from.resources);
    		datas.append('department', from.department);
    		datas.append('roles', from.roles);
    		datas.append('realName', from.realName);
    		datas.append('gender', from.gender);
    		datas.append('email', from.email);
    		datas.append('phoneNumber', from.phoneNumber);
    		datas.append('avatarUrl', from.avatarUrl);
    		var {data} = await axios({
				method:"post",
				baseURL: `${urls.modify}`,
			    // baseURL: `${context.state.url}/passport/modify`,
			    timeout: 1000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});

			if (data.code === 200) {
				context.commit("SetDIALOGVIDIBLE")
			}else {
				console.log(data)
			}
    	}
	}
}
export default account