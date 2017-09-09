import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"
export const ADDSELECTEDS = "ADDSELECTEDS"


const addSelecteds={
	namespaced: true,
	state:{
		SelectedsLIST:[],
	},
	mutations:{
		getSelecteds(state,item){
			state.SelectedsLIST.push(item)
		},
		delete(state,index){
			state.SelectedsLIST.splice(index,1)
		}
	},
	actions:{
		//添加精选
		async ADDSELECTEDS(context,{publishDate,worksIds}) {
    		let datas= new FormData()
    		datas.append('publishDate', publishDate);
    		datas.append('worksIds', worksIds);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.featurecreate}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
			if (data.code ===200) {
				context.state.SelectedsLIST =[]
			}else {
				console.log(data)
			}
			
    		
    	}
	}
}
export default addSelecteds