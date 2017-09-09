<!--运营管理 -->
<template>
	<div>
		<el-row v-if="!editList">
	    	<el-col :span="24">
		    	<el-row>
		    		<el-col :span="24">
						<p>专题列表</p>
					    <el-input placeholder="请输入内容" style="width: 240px"  v-model="queryCriteria.type">
						    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
						        <el-option label="专题ID" value="专题ID"></el-option>
						        <el-option label="专题名" value="专题名"></el-option>
						        <el-option label="创建人" value="创建人"></el-option>
						    </el-select>
					    </el-input>
					    <div class="type">	
					    	<label>状态</label>
					    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 100px">
						        <el-option label="上架" value="上架"></el-option>
						        <el-option label="下架" value="下架"></el-option>
						    </el-select>
						    <label>类别</label>
					    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 100px">
						        <el-option label="用户" value="用户"></el-option>
						        <el-option label="艺人" value="艺人"></el-option>
						    </el-select>
					    </div>
					    <el-button class="button" type="primary" @click="QueryCriteria">查询</el-button>
						<el-button type="danger" @click="reset">清除</el-button>
		    		</el-col>
		    	</el-row>
		    	<el-row>
		    		<el-col :span="16" class="table">
				    	<el-table
							border
						    :data="cmsCreator"
						    style="width: 100%">
						    <el-table-column
						      prop="coverUrl"
						      label="专题封面"
						      width="100">
						      <template scope="scope">
							       <img :src="scope.row.coverUrl" class="img" alt="">
						        </template>
						    </el-table-column>
						    <el-table-column
						      prop="id"
						      label="专题ID"
						      width="100">
						    </el-table-column>
						    <el-table-column
						      prop="title"
						      label="专题名"
						      width="130">
						    </el-table-column>
						     <el-table-column
						      prop="createuserName"
						      label="创建人"
						      width="110">
						    </el-table-column>
						     <el-table-column
						      prop="createTime"
						      label="创建时间"
						      width="180">
						    </el-table-column>
						    <el-table-column
						      prop="updateTime"
						      label="修改时间"
						      width="180">
						    </el-table-column>
						    <el-table-column
						      prop="dataState"
						      label="状态"
						      width="100">
						    </el-table-column>
						    <el-table-column label="操作" width="140">
						        <template scope="scope">
						        	<div v-if="scope.row.dataState !== '已删除' ">
						        		<el-button
								            size="small"
								            @click="edit(scope.row)">编辑</el-button>
								        <el-button
								        	size="small"
								        	type="danger"
								            @click="dialogVisibles(scope.row)">删除</el-button>
						        	</div>
						        	
						        </template>
						    </el-table-column>
						</el-table>
						<el-dialog
							v-if=""
							title="删除提示"
							:visible.sync="dialogVisible"
							size="tiny">
							<div>
								<p>确认删除</p>
							</div>
							<span slot="footer" class="dialog-footer">
							    <el-button @click="dialogVisible = false">取 消</el-button>
							    <el-button type="primary" @click="deleteVisibles">确 定</el-button>
							</span>
						</el-dialog>
			    	</el-col>
				</el-row> 		
	    		<el-row>
			    	<el-col :span="16" class="table">
			    		<el-pagination
					        @current-change="handleCurrentChange"
					        :current-page="currentPage"
					        :page-size="pageSize"
					        layout="prev, pager, next, jumper"
					        :total="totalElements">
					    </el-pagination>
			    	</el-col>
	    		</el-row>
	    	</el-col>
	    </el-row>
		<edits v-if="editList"/>
	</div>	
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
// import {SPECIALLIST} from "../../store/operationManagement/specialList.js"
import edits from "./sreateSpecials/specialedit.vue"
	export default{
		name:"specialList",
		created(){
			this.SPECIALLIST()
    	},
    	components: {
    		edits
	    },
		data(){
			return{
				//查询条件
				queryCriteria:{
					type:"",
					typeValue:"",
					typeName:"",
					sharedState:"",
					grade:"",
					platform:"",
					nameType:""
				},
				//当前页
				currentPage:1,
				//弹出框设置
				dialogVisible: false,
				id:"",
			}
		},
		computed:{
	    	...mapState("specialList",["cmsCreator","pageSize","totalElements","editList"])
	    },
		methods:{
			...mapActions("specialList",["SPECIALLIST","DELETE"]),
			...mapMutations("specialList",["edittrue"]),
        	 //分页
        	handleCurrentChange(val) {
        		this.getPageSize(val)
        		this.SPECIALLIST()
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
        	//删除
		    dialogVisibles(row){
		    	this.id =row.id
		    	this.dialogVisible  = true
		    },
		    deleteVisibles(){
				this.DELETE(this.id)
				this.dialogVisible  = false
		    },
		    //编辑
		    edit(row){
		    	this.edittrue(row)
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
		justify-content: center;
	}
	.label{
		margin-top: 20px
	}
	.img{
		height: 50px;width: 50px;
	}
</style>