import axios from "axios";
import urls from "../url.js"
//时间转换
import getLocalTime from "../getLocalTimes.js"

export const CONSUMEQUERYLIST = "CONSUMEQUERYLIST"

const consumeQuery={
	namespaced: true,
	state:{
		//当前页码
		pageIndex:1,
		//每页显示条数
		pageSize:10,
		//总条数
		totalElements:0,
		//消费列表
		consumeQueryList:[],
		notification:{},
		bluer: true,
	},
	mutations:{
		//消费列表
		getPageSize(state,index){
			state.pageIndex = index 
		},
	},
	actions:{
		//消费列表
		async CONSUMEQUERYLIST(context) {
    		let datas= new FormData()
    		datas.append('pageIndex', context.state.pageIndex -1);
    		datas.append('pageSize', context.state.pageSize);
    		const {data} = await axios({
				method:"post",
				baseURL: `${urls.getConsumeList}`,
			    // baseURL: `${context.state.url}/works/getAllWorksList`,
			    timeout: 4000,
			    headers: {'cms-token': localStorage.token,'cms-channel' :'0'},
			    data:datas
			});
    		if (data.code ===200) {
    			context.state.consumeQueryList =[]
    			// console.log(data.data.content)
    			context.state.totalElements= data.data.totalElements
    			if (data.data.totalElements !== 0) {
	    			data.data.content.forEach((item) => {
	    				context.state.consumeQueryList.push({
	    					//用户信息
							userBaseInfo:item.userBaseInfo,
							//消费时间
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
export default consumeQuery