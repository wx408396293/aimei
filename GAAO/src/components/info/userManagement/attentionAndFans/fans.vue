<!--粉丝表 -->
<template>
	<el-row>
    	<el-col :span="24">
	    	<el-row>
	    		<el-col :span="22">
					<div class="nav">
	    				<div class="navs">
	    					<label>查询类型</label>
	    					<el-input placeholder="请输入内容" style="width: 340px"  v-model="queryCriteria.type" size="small">
							    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
							        <el-option label="用户ID" value="用户ID"></el-option>
							        <el-option label="用户名" value="用户名"></el-option>
							        <el-option label="手机号码" value="手机号码"></el-option>
							    </el-select>
						    </el-input>
	    				</div>
					    <div class="navs">	
					    	<label>性别</label>
					    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 220px" size="small">
						        <el-option label="男" value="男"></el-option>
						        <el-option label="女" value="女"></el-option>
						    </el-select>
					    </div>
					    <div class="navs">
					    	<label>身份</label>
					    	<el-select v-model="queryCriteria.sharedState " slot="prepend" placeholder="类型" style="width: 220px" size="small">
						        <el-option label="开启" value="开启"></el-option>
						        <el-option label="关闭" value="关闭"></el-option>
						    </el-select>
					    </div>
					    <div class="navs">
					    	<label>用户等级</label>
					    	<el-select v-model="queryCriteria.grade" slot="prepend" placeholder="类型" style="width: 220px" size="small">
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
					    :data="GetFanList"
					    style="width: 100%">
					    <el-table-column
					      prop="headPortrait"
					      label="头像" >
					        <template scope="scope">
						       <img :src="scope.row.avatarUrl" class="img" alt="">
					        </template>
					    </el-table-column>
					    <el-table-column
					      prop="userId"
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
					      prop="phoneNumber"
					      label="手机号"
					      width="100%">
					    </el-table-column>
					     <el-table-column
					      prop="bio"
					      label="签名"
					      width="100%">
					    </el-table-column>
					     <el-table-column
					      prop="createTime"
					      label="注册时间"
					      width="160%">
					    </el-table-column>
					    <el-table-column
					      prop="updateTime"
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
					    <el-table-column label="操作" width="340" fixed="right">
					        <template scope="scope">
						        <el-button
						          size="small"
						          @click="handleEdit(scope.$index, scope.row)">作品</el-button>
						        <el-button
						          size="small"
						          @click="friendNexus(scope.row)">好友关系</el-button>
						          <el-button
						          size="small"
						          @click="handleEdit(scope.$index, scope.row)">资产</el-button>
						          <el-button
						          size="small"
						          @click="handleEdit(scope.$index, scope.row)">充值消费</el-button>
					        </template>
					    </el-table-column>
					</el-table>
	    		</el-col>
	    	</el-row> 		
    		<el-row>
		    	<el-col :span="22" class="table">
		    		<el-pagination
				        @current-change="handleCurrentChange"
				        :current-page="currentPage"
				        :page-size="pageSize"
				        layout="prev, pager, next, jumper"
				        :total="GetFanListotal">
				    </el-pagination>
		    	</el-col>
    		</el-row>
    	</el-col>
    </el-row>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import {GETFANLIST,getPageSize,usersearch} from "../../../../store/userManagement/users.js"
	export default{
		name:"fans",
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
				multipleSelection:[]
			}
		},
		computed:{
	    	...mapState("friendRelationship",["GetFanList","GetFanListotal","pageSize"])
	    },
		methods:{
			...mapActions("friendRelationship",["GETFANLIST","GETFOLLOWLIST"]),
			...mapMutations("friendRelationship",["getPageSize","usersearch"]),
			handleEdit(index, row) {
	        	console.log(index, row);
	        },
        	handleCurrentChange(val) {
        		this.getPageSize(val)
        		this.GETFANLIST()
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
        	friendNexus(row){
        		this.usersearch({
        			userId : row.userId,
        			userName : row.userName
        		})
        		this.GETFANLIST()
				this.GETFOLLOWLIST()
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
	.img{
		height: 50px;width: 50px;
	}
	.nav{
		display: flex;
	}
	.navs{
		display: flex;
		flex-direction: column;
		margin-right: 20px;
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