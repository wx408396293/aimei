import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"

export const RECHARGEQUERT = "RECHARGEQUERT"

const rchargeQuert={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:1,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,
		//充值列表
		rchargeQuertList:[],
		notification:{},
		bluer: true,
	},
	mutations:{
		//充值列表
		getPageSize(state,index){
			state.pageIndex = index 
		},
	},
	actions:{
		//充值列表
		async RECHARGEQUERT(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex -1);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getRechargeList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.rchargeQuertList =[]
    			// console.log(data.data.content)
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.rchargeQuertList.push({
	    					//用户信息
							userBaseInfo:item.userBaseInfo,
							//充值时间
							tradeTime:getLocalTime(item.tradeTime),
							//充值地点
							payOrderInfo:item.payOrderInfo,
							//支付类型
							paymentType:"咪币",
							//单笔金额
							number:item.number,
							//订单号
							id:item.id,
							//三方支付订单
							tradeOrder:item.tradeOrder,
							//商品名
							tradeName:item.tradeName,
							//资金状态
							tradeState:"已完成",
							
	    				})
	    			});
	    		}
    		}else {
    			console.log(data)
    		}
    	},
  	}
}
export default rchargeQuert