<template>
<!-- 账户管理 -->
	<el-row>
    	<el-col :span="24">
    		<p class="jisp">编辑账户</p>	
    		<div class="div">
	    		<el-row>
	    			<el-col :span="18">
	    				<el-table
			    			border
			    			stripe
						    :data="AccountList"
						    style="width: 100%">
						    <el-table-column label="头像" > 
						        <template scope="scope">
							       <img :src="scope.row.avatarUrl" alt="">
						        </template>
						    </el-table-column>
						    <el-table-column
						      prop="userName"
						      label="账户名"
						      width="130">
						    </el-table-column>
						    <el-table-column
						      prop="realName"
						      label="姓名"
						      width="100">
						    </el-table-column>
						     <el-table-column
						      prop="gender"
						      label="性别"
						      width="100">
						    </el-table-column>
						     <el-table-column
						      prop="phoneNumber"
						      label="手机号"
						      width="160">
						    </el-table-column>
						     <el-table-column
						      prop="email"
						      label="邮箱"
						      width="224">
						    </el-table-column>
						     <el-table-column
						      prop="department"
						      label="部门"
						      width="120">
						    </el-table-column>
						    <el-table-column label="操作" width="180" fixed="right"> 
						        <template scope="scope">
							        <el-button
							          size="small"
							          type="warning"
							          @click="handleEdit( scope.row)">编辑</el-button>
							        <el-button
							          size="small"
							          type="danger"
							          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						        </template>
						    </el-table-column>
						</el-table>
	    			</el-col>
	    		</el-row>
    		
			 </div>
    	</el-col>
	</el-row>
</template>
<script>
	import {mapMutations,mapActions, mapState} from "vuex"
	import {ACCOUNTLIST,GATTACCOUNT} from "../../../store/account/account.js"
	export default{
		name:"editAccount",
		created(){
			this.ACCOUNTLIST()
		},
		data(){
			return {
				
			}
		},
		computed:{
	      ...mapState("account",["AccountList"])
	    },
		methods:{
			...mapActions("account",["ACCOUNTLIST"]),
			...mapMutations("account",["GATTACCOUNT"]),
			handleEdit(row) {
				let obj={
					userId:row.userId,
					userName : row.userName,
					resources : row.resources,
					department : row.department  === "运营部"? 2 : 3,
					roles : row.roles,
					realName : row.realName,
					gender : row.gender === "未知"? "0" : row.gender === "男"? "1" : "2",
					email : row.email,
					phoneNumber : row.phoneNumber,
					avatarUrl : row.avatarUrl
				}
		        this.GATTACCOUNT(obj)
		      },
		      handleDelete(index, row) {
		        console.log(index, row);
		      },
		}
	}
</script>
<style scoped>
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