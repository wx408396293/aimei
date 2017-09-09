<!--已审核机构列表 -->
<template>
	<div>
		<p class="jisp">已审核机构列表</p>	
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
							        <el-option label="手机号" value="手机号"></el-option>
							    </el-select>
						    </el-input>
	    				</div>
	    				<div class="navs">
	    					<label>身份</label>
					    	<el-select v-model="queryCriteria.sharedState "  placeholder="类型" style="width: 220px">
						        <el-option label="开启" value="开启"></el-option>
						        <el-option label="关闭" value="关闭"></el-option>
						    </el-select>
	    				</div>
	    				<div class="navs">
	    					<label>申请结果</label>
					    	<el-select v-model="queryCriteria.sharedStates " placeholder="类型" style="width: 220px">
						        <el-option label="通过" value="通过"></el-option>
						        <el-option label="拒绝" value="拒绝"></el-option>
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
						highlight-current-row
					    :data="auditedatMechanism"
					    style="width: 100%">
					    <el-table-column
					      prop="id"
					      label="头像" >
					       	<template scope="scope">
					       		<img :src="scope.row.avatarUrl" class="img" alt="">
				        	</template>
					    </el-table-column>
					    <el-table-column
					      prop="userId"
					      label="用户ID"
					      width="160">
					    </el-table-column>
					    <el-table-column
					      prop="userName"
					      label="用户名"
					      width="70">
					    </el-table-column>
					     <el-table-column
					      prop="gender"
					      label="性别"
					      width="110">
					    </el-table-column>
					     <el-table-column
					      prop="phoneNumber"
					      label="手机号"
					      width="180">
					    </el-table-column>
					     <el-table-column
					      prop="UerCreateTime"
					      label="注册时间"
					      width="180">
					    </el-table-column>
					     <el-table-column
					      prop="updateTime"
					      label="上传登录时间"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="typeName"
					      label="身份"
					      width="140">
					    </el-table-column>
					    <el-table-column
					      prop="auditStatus"
					      label="申请结果"
					      width="140">
					    </el-table-column>
					    <el-table-column label="操作" width="170">
					        <template scope="scope">
						        <el-button
						          size="small"
						          type="info"
						          @click="toExamine(scope.row)">查看申请信息</el-button>
					        </template>
					    </el-table-column>
					</el-table>
				    <el-pagination
				    	class="top"
				        @current-change="handleCurrentChange"
				        :current-page="currentPage"
				        :page-size="auditedapageSize"
				        layout="prev, pager, next, jumper"
				        :total="auditedaElements">
				    </el-pagination>
		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>
<script>
import router from "@/router/index.js"
import {mapMutations,mapActions, mapState} from "vuex"
	export default{
		name:"auditedList",
		created(){
			this.AUDITEDARTIST()
			this.currentPage =this.auditedaindex
		},
		data(){
			return{
				//查询条件
				queryCriteria:{
					type:"",
					typeValue:"",
					typeName:"",
					sharedState:"",
					sharedStates:"",
				},
				//当前页
				currentPage:1,
			}
		},
		computed:{
	    	...mapState("mechanismList",["auditedapageSize","auditedaElements","auditedatMechanism","auditedaindex"])
	    },
		methods:{
			...mapActions("mechanismList",["AUDITEDARTIST"]),
			...mapMutations("mechanismList",["getAuditedaindex","TOAudited"]),
			toExamine(row) {
				this.TOAudited(row)
	        },
	      	handleCurrentChange(val) {
        		this.currentPage = val
        		this.getAuditedaindex(val)
        		this.AUDITEDARTIST()
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
	.img{
		height: 50px;width: 50px;margin-top: 6px;
	}
	.top{
		margin-top: 20px;
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
		padding-left: 30px;
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