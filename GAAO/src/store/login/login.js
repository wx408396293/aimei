import axios from "axios";
import router from "../../router/index.js"
export const LOGIN ="LOGIN"
import urls from "../../store/url.js" 
const login={
	namespaced: true,
	state:{
		// url:"http://192.168.10.152/cms",
		warning:false,
	},
	mutations:{
		// LOGIN(state,{username,password}){
		// 	if (username == state.users[0].username && password == state.users[0].password) {
		// 			localStorage.isLogin = true
		// 			localStorage.seye= state.users[0].seye;
		// 			localStorage.seyes = state.users[0].seyes
		// 			b = localStorage.seyes.split(",")
		// 			console.log(b)
		// 			router.push("/info")
		// 			let b =null
		// 		}
		// 		else {
		// 			state.warning = true;
		// 			localStorage.isLogin= false;
		// 		}
		// }
	},
	actions:{
		async LOGIN(context,{username,password}) {
			//创建FormData表单对象
			var datas= new FormData()
			let UserRoles =[]
			//添加表单
			datas.append('userName', username);
			datas.append('password', password)
			var {data} = await axios({
				method:"post",
				baseURL: `${urls.login}`,
			    timeout: 1000,
			    headers: {'cms-token': '','cms-channel' :'0'},
			    data:datas
			});
			console.log(data)
			if (data.code === 200) {
				//用户ID
				localStorage.userId = data.data.userId
				//部门
				localStorage.department = data.data.department
				//用户权限
				//二级
				localStorage.roles = data.data.roles
				//三级
				localStorage.resources = data.data.resources
				// console.log(data)
				localStorage.token = data.data.token
				console.log(localStorage.token)
				localStorage.userName = data.data.userName
				const Userdetails  = await axios({
					method:"post",
				    baseURL: `${urls.getMyAuthMap}`,
				    timeout: 1000,
				    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
				});
				console.log(Userdetails)
				if (Userdetails.data.code ===200) {
					Userdetails.data.data.roles.forEach( (item) => {
						UserRoles.push({
							path:item.path,
						    name:item.name,
						    // resources:item.resources,
						    resourcesSet:item.resourcesSet
						})
					});
					// console.log(data)
					// console.log(Userdetails)
					UserRoles = JSON.stringify(UserRoles)
					localStorage.setItem("UserRoles", UserRoles)
					localStorage.isLogin = true
					router.push("/info")
				}
			}else {
				let inputpassword  = document.getElementById("password")
				inputpassword.style.borderColor = ' red';
				let img1 = document.getElementById("img2")
				img1.style.display = 'inline-block'
				context.state.warning = true
			}
			// if (dataUer.length !== 0) {
			// 	let uer=[];
			// 	let uers=[]
			// 	let uerst=[]
			// 	console.log(dataUer.data.data)
			// 	// console.log(dataUer.data.data.roles)
			// 	dataUer.data.data.roles.map(function(item) {
			// 		uer.push({
			// 			path:item.path,
			// 			name:item.name,
			// 			resources:item.resources
			// 		})
			// 	})
			// 	//把对象转换成字符串
			// 	uer = JSON.stringify(uer)
			// 	//储存
			// 	localStorage.setItem("uer", uer)
			// 	//读取并转换成json对象
			// 	uers =JSON.parse(localStorage.getItem("uer"));
			// 	console.log(uers)
			// 	uers.map(function(item) {
			// 		uerst.push({
			// 			path:item.path,
			// 			name:item.name,
			// 		})
			// 	})
			// 	console.log(uerst)
			// }
			// localStorage.isLogin = true
			// router.push("/info")
    	},
	}
}
export default login