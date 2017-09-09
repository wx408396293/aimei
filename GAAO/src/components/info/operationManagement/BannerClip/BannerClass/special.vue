<template>
	<div >
		<el-row>
	    		<el-col :span="24">
	    			<p>专题</p>
					<div class="nav">
	    				<div class="navs">
	    					<label>查询类型</label>
	    					<el-input placeholder="请输入内容" style="width: 340px"  v-model="queryCriteria.type">
							    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
							        <el-option label="作品ID" value="作品ID"></el-option>
							        <el-option label="作品名" value="作品名"></el-option>
							        <el-option label="发布用户" value="发布用户"></el-option>
							        <el-option label="标签" value="标签"></el-option>
							        <el-option label="地理位置" value="地理位置"></el-option>
							        <el-option label="音频素材" value="音频素材"></el-option>
							    </el-select>
						    </el-input>
	    				</div>
					    <div class="navs">	
					    	<label>状态</label>
					    	<el-select v-model="queryCriteria.nameType" slot="prepend" placeholder="类型" style="width: 220px">
						        <el-option label="正常" value="正常"></el-option>
						        <el-option label="冻结" value="冻结"></el-option>
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
	    		<el-col :span="15" class="table">
			    	<el-table
							border
							stripe
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
						      width="100">
						    </el-table-column>
						     <el-table-column
						      prop="createuserName"
						      label="创建人"
						      width="110">
						    </el-table-column>
						     <el-table-column
						      prop="type"
						      label="创建人类别"
						      width="160">
						    </el-table-column>
						     <el-table-column
						      prop="createTime"
						      label="创建时间"
						      width="100">
						    </el-table-column>
						     <el-table-column
						      prop="cmsEditoruserName"
						      label="修改人"
						      width="100">
						    </el-table-column>
						    <el-table-column
						      prop="updateTime"
						      label="修改时间"
						      width="100">
						    </el-table-column>
						    <el-table-column
						      prop="dataState"
						      label="状态"
						      width="100">
						    </el-table-column>
					    <el-table-column label="操作" width="100%"  fixed="right">
					        <template scope="scope">
					            <el-button size="small" @click="handleEdit(scope.row)">添加</el-button>
					        </template>
					    </el-table-column>
					</el-table>
		    	</el-col>
			</el-row> 		
    		<el-row>
		    	<el-col :span="15" class="table">
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
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import {SPECIALLIST} from "../../../../../store/operationManagement/specialList.js"
	export default{
		name:"selected",
		created(){
			this.SPECIALLIST()
    	},
		// 父组件传值到子组件
		// props:["popControl"],
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
			}
		},
		computed:{
	    	...mapState("specialList",["cmsCreator","pageSize","totalElements","editList"])
	    },
		methods:{
			...mapActions("specialList",["SPECIALLIST","DISABLE","ENABLE","DELETE"]),
			...mapMutations("specialList",["getPageSize"]),
			...mapMutations("addBanner",["getCemtent","getControlButton"]),
			handleEdit(row){
				this.getCemtent(row)
				this.getControlButton()
				this.$emit("PopController",false)
			},
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