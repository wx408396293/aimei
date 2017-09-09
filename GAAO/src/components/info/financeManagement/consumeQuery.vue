<template>
	<el-row>
		<el-col :span="24">
			<p class="jisp">消费查询</p>	
    		<div class="div">
				<el-row>
					<el-col :span="24" class="main">
						<label>地区</label>
						<v-distpicker hide-area></v-distpicker>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24" class="main">
						<label>自定义地区</label>
						<el-button size="small" @click="dialogVisible = true">去地图选地点</el-button>
						<label>半径范围</label>
						<input v-model="input" placeholder="请输入内容"></input>
						<label>选择的地址：</label>
						<label class="address">{{address}}</label>
						<el-dialog title="地图" :visible.sync="dialogVisible" size="large">
							<jcdecauxmap :dialogVisible="dialogVisible" @PopController="getdialogVisibles"/>
						</el-dialog>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24" class="main">
						<label>时段</label>
						<el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					    <label>至</label>
					    <el-date-picker
					      v-model="value2"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					    <el-button type="primary" class="button"  @click="">查 询</el-button>
						<el-button @click="">取 消</el-button>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="20" class="main">
						<el-table
							border
							stripe
						    :data="consumeQueryList"
						    style="width: 100%">
						    <el-table-column
						      prop="userBaseInfo.userId"
						      label="用户ID"
						      width="200">
						    </el-table-column>
						    <el-table-column
						      prop="userBaseInfo.userName"
						      label="用户名"
						      width="180">
						    </el-table-column>
						    <el-table-column
						      prop="tradeTime"
						      label="消费时间"
						      width="180%">
						    </el-table-column>
						     <el-table-column
						      prop="payOrderInfo.cityCode"
						      label="消费地点"
						      width="100">
						    </el-table-column>
						     <el-table-column
						      prop="paymentType"
						      label="支付类型"
						      width="100%">
						    </el-table-column>
						     <el-table-column
						      prop="number"
						      label="单笔金额"
						      width="100%">
						    </el-table-column>
						     <el-table-column
						      prop="payOrderInfo.orderNumber"
						      label="订单号"
						      width="210">
						    </el-table-column>
						    <el-table-column
						      prop="tradeName"
						      label="商品名"
						      width="190%">
						    </el-table-column>
						</el-table>
					</el-col>
				</el-row>
				<el-row>
			    	<el-col :span="20" class="table">
			    		<el-pagination
					        @current-change="handleCurrentChange"
					        :current-page="currentPage"
					        :page-size="pageSize"
					        layout="prev, pager, next, jumper"
					        :total="totalElements">
					    </el-pagination>
			    	</el-col>
	    		</el-row>
	    	</div>
		</el-col>
	</el-row>
</template>
<script>
	import Vue from 'vue'
	import {mapMutations,mapActions, mapState} from "vuex"
	//引入三级菜单
	import VDistpicker from 'v-distpicker'
	import jcdecauxmap from "./JCDecauxmap/JCDecauxmap.vue"
	//引入高德地图
	// import VueAMap  from 'vue-amap';
	// Vue.use(VueAMap );
	// VueAMap .initAMapApiLoader({
	// 	//高德官网申请的Key
	//   key: '1d01b9d0eb92533c11679faa12762fcc',
	//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor',"AMap.Geocoder"]
	// });
	// let amapManager = new AMap.AMapManager();
	export default{
		name:"consumeQuery",
		components: { 
			VDistpicker,
			jcdecauxmap
		},
		created(){
			this.CONSUMEQUERYLIST()
			this.currentPage = this.pageIndex
		},
		data(){
			return{
				province: "",
  				city: "",
						        //时间
		         pickerOptions0: {
		          disabledDate(time) {
		            return time.getTime() < Date.now() - 8.64e7;
		          }
		        },
		         //地图
		        lng:"",
				lat:"",
				address:"",
		        value1:"",
		        value2:"",
		        //弹窗设置
		        dialogVisible:false,
		        //半径设置
		        input:"",
				//当前页
				currentPage:1,
			}
		},
		computed:{
	    	...mapState("consumeQuery",["pageSize","totalElements","pageIndex","consumeQueryList"])
	    },
		methods:{
			...mapMutations("consumeQuery",["getPageSize"]),
			...mapActions("consumeQuery",["CONSUMEQUERYLIST"]),
	      	 //分页
        	handleCurrentChange(val) {
        		this.getPageSize(val)
        		this.currentPage = this.pageIndex
        		this.CONSUMEQUERYLIST()
        	},
        	getdialogVisibles(data){
        		this.dialogVisible = data.dialogVisible,
					//坐标
				this.lng = data.lng,
				this.lat = data.lat,
				this.address = data.address
        		console.log(this)
        	}
		}
	}
</script>
<style >
	.main{
		display: flex;
		margin-bottom: 20px;
	}
	.main >*{
		margin-right: 20px;
	}
	.amap-page-container {
      position: relative;
    }
	.amap-demo {
      height: 500px;
    }
    .search-box {
      position: absolute;
      top: 10px;
      left: 60px;
    }
    .address {
    	border-bottom: 1px solid #333;
    }
    .button{
    	margin-left: 40px;
    }
    .table{
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
	}
	.jisp{
		margin: 0;
		height: 70px;
		color: #353535;
		font-size: 20px;
		line-height: 70px;
		background-color: #f2f2f2;
		padding-left: 30px;
		margin-bottom: 25px;
	}
	.div{
		padding:0 30px;
	}
</style>