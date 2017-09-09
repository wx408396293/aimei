<!--举报列表 -->
<template>
	<div>
		<p class="jisp">反馈列表</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="22">
					<div class="nav">
	    				<div class="navs">
	    					<label>查询类型</label>
	    					<el-input placeholder="请输入内容" style="width: 340px"  v-model="queryCriteria.type">
							    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
							        <el-option label="用户ID" value="用户ID"></el-option>
							        <el-option label="用户名" value="用户名"></el-option>
							    </el-select>
						    </el-input>
	    				</div>
					    <div class="navs">	
					    	<label>是否已处理</label>
					    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 220px">
						        <el-option label="已处理" value="已处理"></el-option>
						        <el-option label="未处理" value="未处理"></el-option>
						    </el-select>
					    </div>
	    			</div>
	    			<div class="nav_s">
				    	<el-button class="button" type="success" @click="QueryCriteria" style="width:140px;font-size:16px" size="small">查询</el-button>
				    	<el-button type="danger" @click="reset"  size="small" style="width:70px;font-size:16px">清除</el-button>
					</div>
		    	</el-col>
		    	<el-col :span="22" class="table">
			    	<el-table
						border
						stripe
					    :data="feedbackList"
					    style="width: 100%">
					    <el-table-column
					      prop="userId"
					      label="用户ID"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="userName"
					      label="用户名"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="contactWay"
					      label="联系方式"
					      width="160">
					    </el-table-column>
					     <el-table-column
					      prop="content"
					      label="反馈内容"
					      width="500">
					    </el-table-column>
					     <el-table-column
					      prop="createTime"
					      label="反馈时间"
					      width="180">
					    </el-table-column>
					     <el-table-column
					      prop="dealState"
					      label="是否已处理"
					      width="120">
					    </el-table-column>
					    <el-table-column label="操作" width="90">
					        <template scope="scope">
						        <el-button 
						          size="small"
						          type="info"
						          @click="handlefeedback(scope.row)" v-if="scope.row.dealState === '未处理'">处理</el-button>
					        </template>
					    </el-table-column>
					</el-table>
				    <el-pagination
				    	class="label"
				        @current-change="handleCurrentChange"
				        :current-page="currentPage"
				        :page-size="pageSize"
				        layout="prev, pager, next, jumper"
				        :total="totalElements">
				    </el-pagination>
		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import {SPECIALLIST} from "../../../store/operationManagement/specialList.js"
	export default{
		name:"feedbackList",
		created(){
			this.FEEDBACKLIST()
    	},
		data(){
			return{
				//查询条件
				queryCriteria:{
					type:"",
					typeValue:"",
					typeName:"",
					sharedState:"",
				},
				//当前页
				currentPage:1,
				
			}
		},
		computed:{
	    	...mapState("report_and_feedback",["pageSize","totalElements","pageIndex","feedbackList"])
	    },
		methods:{
			...mapMutations("report_and_feedback",["getPageSize"]),
			...mapActions("report_and_feedback",["FEEDBACKLIST","HANDLEFEEDBACK"]),
			handlefeedback(row) {
				// console.log(row.id)
				this.HANDLEFEEDBACK(row.id)
				// this.audioMaterial[index].sharedState = "已处理"
	        },
	      	handleCurrentChange(val) {
	      		
        		this.getPageSize(val)
        		this.FEEDBACKLIST()
        		this.currentPage = this.pageIndex
        	},
        	QueryCriteria(){
        		console.log(this.queryCriteria)
        	}, 
        	reset(){
        		let qreryCriterias={
					type:"",
					typeValue:"",
					typeName:"",
					sharedState:"",
				}
				this.queryCriteria = qreryCriterias
        	},
        	confirmButton(){
        		this.dialogVisible = false;
        	}
		}
	}
</script>
<style scoped>
	.type{
		display: inline-block;
	}
	.type > label{
		padding-left: 20px;
	}
	.button{
		margin-left: 20px;
	}
	.table{
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
	}
	.label{
		margin-top: 20px
	}
	.labels{
		padding-top: 20px;
	}
	.jisp{
		margin: 0;
		height: 70px;
		color: #353535;
		font-size: 20px;
		line-height: 70px;
		background-color: #f2f2f2;
		padding-left: 30px;
	}
	.div{
		padding:0 30px;
	}
	.nav{
		display: flex;
		flex-wrap: wrap;
	}
	.navs{
		display: flex;
		flex-direction: column;
		margin-right: 20px;
		margin-top: 20px;
	}
	.navs label{
		font-size: 16px;
		margin-bottom: 15px;
	}
	.nav_s{
		display: flex;
		justify-content: flex-end; 
		margin-right: 30px;
		margin-top: 20px;
	}
	.nav_s button{
		margin-left: 20px;
	}
</style>