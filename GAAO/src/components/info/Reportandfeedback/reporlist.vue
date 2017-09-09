<!--举报列表 -->
<template>
	<div>
		<p class="jisp">举报列表</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="23">
					<div class="nav">
	    				<div class="navs">
	    					<label>查询类型</label>
	    					<el-input placeholder="请输入内容" style="width: 340px"  v-model="queryCriteria.type">
							    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
							        <el-option label="举报内容ID" value="举报内容ID"></el-option>
							        <el-option label="被举报内容名称" value="被举报内容名称"></el-option>
							    </el-select>
						    </el-input>
	    				</div>
	    				<div class="navs">
					    	<label>被举报内容类型</label>
					    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 220px">
						        <el-option label="用户" value="用户"></el-option>
						        <el-option label="作品" value="作品"></el-option>
						        <el-option label="专题" value="专题"></el-option>
						    </el-select>
					    </div>
					    <div class="navs">	
					    	<label>处理状态</label>
					    	<el-select v-model="queryCriteria.sharedState " slot="prepend" placeholder="类型" style="width: 220px">
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
		    	<el-col :span="23" class="table">
			    	<el-table
						border
						stripe
					    :data="reportList"
					    style="width: 100%">
					    <el-table-column
					      prop="type"
					      label="被举报内容类型"
					      width="140">
					    </el-table-column>
					    <el-table-column
					      prop="targetId"
					      label="被举报内容ID"
					      width="200">
					    </el-table-column>
					    <el-table-column
					      prop="targetName"
					      label="被举报内容名称"
					      width="160">
					    </el-table-column>
					     <el-table-column
					      prop="reasonType"
					      label="举报理由"
					      width="110">
					    </el-table-column>
					     <el-table-column
					      prop="createTime"
					      label="举报时间"
					      width="200">
					    </el-table-column>
					     <el-table-column
					      prop="createuserName"
					      label="举报用户"
					      width="160">
					    </el-table-column>
					     <el-table-column
					      prop="dealState"
					      label="处理状态"
					      width="100">
					    </el-table-column>
					    <el-table-column
					      prop="position"
					      label="处理时间"
					      width="200">
					    </el-table-column>
					    <el-table-column
					      prop="information"
					      label="处理人"
					      width="110">
					    </el-table-column>
					    <el-table-column label="操作" width="100">
					        <template scope="scope">
						        <el-button 
						          size="small"
						          type="info"
						          @click="toExamine(scope.row)" v-if="scope.row.dealState === '未处理'">执行处理</el-button>
					        </template>
					    </el-table-column>
					</el-table>
				    <el-pagination class="label"
				        @current-change="handleCurrentChange"
				        :current-page="currentPage"
				        :page-size="reportSize"
				        layout="prev, pager, next, jumper"
				        :total="reportElements">
				    </el-pagination>
				    <el-dialog
						v-if=""
						title="删除提示"
						:visible.sync="dialogVisible"
						size="tiny">
						确认是否删除
						<span slot="footer">
						    <el-button @click="dialogVisible = false">取 消</el-button>
						    <el-button type="primary" @click="confirmButton">确 定</el-button>
						</span>
					</el-dialog>
		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import {SPECIALLIST} from "../../../store/operationManagement/specialList.js"
	export default{
		name:"reporlist",
		created(){
			this.REOPRTLIST()
    	},
		data(){
			return{
				//弹窗
				dialogVisible:false,
				//查询条件
				queryCriteria:{
					type:"",
					typeValue:"",
					typeName:"",
					sharedState:"",
				},
				//当前页
				currentPage:1,
				//弹出框设置
				//弹窗输入内容
				textarea:"",

			}
		},
		computed:{
	    	...mapState("report_and_feedback",["reportSize","reportElements","reportIndex","reportList"]),
	    },
		methods:{
			...mapMutations("report_and_feedback",["getReportSize"]),
			...mapActions("report_and_feedback",["REOPRTLIST"]),
			toExamine(row) {
				this.dialogVisible = true;
	        },
	      	handleCurrentChange(val) {
        		this.getReportSize(val)
        		this.currentPage = this.reportIndex
        		this.REOPRTLIST()
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