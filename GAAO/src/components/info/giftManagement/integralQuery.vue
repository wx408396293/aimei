<template>
	<div>
		<p class="jisp">积分查询列表</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="24">
			    	<el-row>
			    		<el-col :span="14">
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
			    					<label>增减</label>
							    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 220px">
								        <el-option label="增加" value="增加"></el-option>
								        <el-option label="减少" value="减少"></el-option>
								    </el-select>
			    				</div>
			    			</div>
			    			<div class="nav_s">
						    	<el-button class="button" type="success" @click="QueryCriteria" style="width:140px;font-size:16px" size="small">查询</el-button>
						    	<el-button type="danger" @click="reset"  size="small" style="width:70px;font-size:16px">清除</el-button>
							</div>
			    		</el-col>
			    	</el-row>
			    	<el-row>
			    		<el-col :span="14"  class="table">
			    			<el-table
								border
								stripe
							    :data="userList"
							    style="width: 100%">
							    <el-table-column
							      prop="headPortrait"
							      label="用户ID"
							      width="100%">
							    </el-table-column>
							    <el-table-column
							      prop="id"
							      label="用户名"
							      width="100%">
							    </el-table-column>
							    <el-table-column
							      prop="userName"
							      label="增减"
							      width="100%">
							    </el-table-column>
							     <el-table-column
							      prop="gender"
							      label="积分数量"
							      width="138">
							    </el-table-column>
							     <el-table-column
							      prop="number"
							      label="变更时间"
							      width="200%">
							    </el-table-column>
							     <el-table-column
							      prop="autograph"
							      label="变更原因"
							      width="130">
							    </el-table-column>
							     <el-table-column
							      prop="registerDate"
							      label="当前积分"
							      width="130">
							    </el-table-column>
							</el-table>
			    		</el-col>
			    	</el-row> 		
		    		<el-row>
				    	<el-col :span="14" class="table">
				    		<el-pagination
						        @size-change="handleSizeChange"
						        @current-change="handleCurrentChange"
						        :current-page="currentPage"
						        :page-size="10"
						        layout="prev, pager, next, jumper"
						        :total="100">
						    </el-pagination>
				    	</el-col>
		    		</el-row>
		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>
<script>
	export default{
		name:"integralQuery",
		data(){
			return{
				//查询条件
				queryCriteria:{
					type:"",
					typeValue:"",
					typeName:"",
				},
				//当前页
				currentPage:1,
				userList:[{
					headPortrait:'1' ,
					id:"1",
					userName:"用户1",
					gender:"男",
					number:"12345678901", 
					autograph:"用户1",
					registerDate:"1234556",
					loginDate:"1234556",
					identity:"普通用户",
					userLevel  :"4",
				}],
			}
		},
		methods:{
	      	handleSizeChange(val) {
        		console.log(`每页 ${val} 条`);
        	},
        	handleCurrentChange(val) {
        		console.log(`当前页: ${val}`);
        	},
        	QueryCriteria(){
        		console.log(this.queryCriteria)
        	}, 
        	reset(){
        		let qreryCriterias={
					type:"",
					typeValue:"",
					typeName:"",
				}
				this.queryCriteria = qreryCriterias
        	},
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