import axios from "axios";
import getLocalTime from "../getLocalTimes.js"
import router from "../../router/index.js"
export const VURIFICATION ="VURIFICATION"
export const LOGIN ="LOGIN"
import urls from "../../store/url.js" 
const login={
	namespaced: true,
	state:{
		warning:false,
		sendTime:"",
	},
	mutations:{
	},
	actions:{
		async VURIFICATION(context,PhoneNumber) {
			//创建FormData表单对象
			var datas= new FormData()
			//添加表单
			datas.append('phoneNumber', PhoneNumber);
			datas.append('type', 0)
			var {data} = await axios({
				method:"post",
				baseURL: `${urls.loginsend}`,
			    // timeout: 1000,
			    headers: {
			    	"aimy-divers":{"os":2,"version":"1.0.0"},
			    	"aimy-id":"1",
			    },
			    data:datas
			});
			console.log(data)
			if (data.code === 200) {
				context.state.sendTime = getLocalTime(data.data.sendTime)
			}
    	},
    	async LOGIN(context,{PhoneNumber,smsCode}){
    		var datas= new FormData()
			//添加表单
			datas.append('phoneNumber', PhoneNumber);
			datas.append('smsCode', smsCode)
			datas.append('platform', 7)
			var {data} = await axios({
				method:"post",
				baseURL: `${urls.passportlogin}`,
			    // timeout: 1000,
			    headers: {
			    	"aimy-divers":{"os":2,"version":"1.0.0"},
			    	"aimy-id":"1",
			    },
			    data:datas
			});
			if (data.code === 303) {
				alert("账户未注册")
				return
			}
			if (data.code === 304) {
				alert("短信验证码错误")
				return
			}
			if (data.code === 305) {
				alert("没有自媒体权限")
				return
			}
			if (data.code === 200) {
				localStorage.selfMediaToken = data.data.selfMediaToken
				localStorage.userName = data.data.userName
				localStorage.userId = data.data.userId
				localStorage.avatarUrl = data.data.avatarUrl
				localStorage.isLogin = true
				router.push("/info")
			}

			console.log(localStorage)
    	}
	}
}
export default login