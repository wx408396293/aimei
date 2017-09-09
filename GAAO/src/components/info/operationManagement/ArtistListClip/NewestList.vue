<!--自媒体艺人 -->
<template>
	<el-row>
    	<el-col :span="24">
	    	<el-row class="label">
	    		<el-col :span="22">
				    <div class="nav">
	    				<div class="navs">
	    					<label>查询类型</label>
	    					<el-input placeholder="请输入内容" style="width: 240px"  v-model="queryCriteria.type">
							    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
							        <el-option label="用户ID" value="用户ID"></el-option>
							        <el-option label="用户名" value="用户名"></el-option>
							        <el-option label="手机号码" value="手机号码"></el-option>
							    </el-select>
						    </el-input>
	    				</div>
					    <div class="navs">	
					    	<label>性别</label>
					    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 100px">
						        <el-option label="男" value="男"></el-option>
						        <el-option label="女" value="女"></el-option>
						    </el-select>
					    </div>
					    <div class="navs">
					    	<label>身份</label>
					    	<el-select v-model="queryCriteria.sharedState " slot="prepend" placeholder="类型" style="width: 100px">
						        <el-option label="开启" value="开启"></el-option>
						        <el-option label="关闭" value="关闭"></el-option>
						    </el-select>
					    </div>
					    <div class="navs">
					    	<label>用户等级</label>
					    	<el-select v-model="queryCriteria.grade" slot="prepend" placeholder="类型" style="width: 100px">
						        <el-option label="开启" value="开启"></el-option>
						        <el-option label="关闭" value="关闭"></el-option>
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
	    		<el-col :span="22"  class="table">
	    			<el-table
						border
						stripe
					    :data="userList"
					    style="width: 100%">
					    <el-table-column
					      prop="headPortrait"
					      label="头像"
					      width="130">
					    </el-table-column>
					    <el-table-column
					      prop="id"
					      label="用户ID"
					      width="100%">
					    </el-table-column>
					    <el-table-column
					      prop="userName"
					      label="用户名"
					      width="100%">
					    </el-table-column>
					     <el-table-column
					      prop="gender"
					      label="性别"
					      width="100%">
					    </el-table-column>
					     <el-table-column
					      prop="number"
					      label="手机号"
					      width="140%">
					    </el-table-column>
					     <el-table-column
					      prop="autograph"
					      label="签名"
					      width="100%">
					    </el-table-column>
					     <el-table-column
					      prop="registerDate"
					      label="注册时间"
					      width="180%">
					    </el-table-column>
					    <el-table-column
					      prop="loginDate"
					      label="上次登录时间"
					      width="160%">
					    </el-table-column>
					    <el-table-column
					      prop="identity"
					      label="身份"
					      width="100%">
					    </el-table-column>
					    <el-table-column
					      prop="userLevel"
					      label="用户等级"
					      width="100%">
					    </el-table-column>
					    <el-table-column label="操作" width="200%">
					        <template scope="scope">
						        <el-button
						            size="small"
						            type="info"
						            @click="biangeng(scope.$index, scope.row)">变更排序</el-button>
						        <el-button
						            size="small"
						            type="info"
						            @click="biangeng(scope.$index, scope.row)">撤销排序</el-button>
					        </template>
					    </el-table-column>
					</el-table>
					<!-- 排序提提示 -->
					<el-dialog
						v-if=""
						title="排序提示"
						:visible.sync="sort"
						size="tiny">
						<label>将该条数据排序到第：</label>
						 <el-input placeholder="请输入内容" style="width: 100px"  v-model="sorts"></el-input>
						 <label>名</label>
						<span slot="footer" class="dialog-footer">
						    <el-button @click="sort = false">取 消</el-button>
						    <el-button type="primary" @click="sortsMethod ">确 定</el-button>
						</span>
					</el-dialog>
	    		</el-col>
	    	</el-row> 		
    		<el-row>
		    	<el-col :span="22" class="table">
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
</template>
<script>
	export default{
		name:"selfMedia",
		data(){
			return{
				//查询条件
				queryCriteria:{
					type:"",
					typeValue:"",
					typeName:"",
					sharedState:"",
					grade:"",
				},
				//当前页
				currentPage:1,
				//排序
				sort:false,
				sorts:"",
				//排序前名次
				sortsFront:"",
				//排序后名次
				sortsAfter :"",
				//排序的条目
				sortsEntry :{},
				//弹窗输入内容
				textarea:"",
				userList:[{
					headPortrait:'1' ,
					id:"1",
					userName:"用户1",
					gender:"男",
					number:"12345678901", 
					autograph:"用户1",
					registerDate:"2017-8-1 15:36:26",
					loginDate:"2017-8-2 10:18:00",
					identity:"普通用户",
					userLevel  :"4",
				}],
				multipleSelection:[]
			}
		},
		methods:{
			handleEdit(index, row) {
	        	console.log(index, row);
	        },
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
					sharedState:"",
				}
				this.queryCriteria = qreryCriterias
        	},
        	 biangeng(index,row){
		    	this.sortsFront = index
		    	this.sortsEntry = row
		    	this.sort = true
		    	// this.audioMaterial.splice(3,0,row)
		    	// console.log(index,row)
		    },
        	sortsMethod(){
		    	this.userList.splice(`parseInt(this.sorts)-1`,0,this.sortsEntry)
		    	this.sort = false
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