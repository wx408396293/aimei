<!--运营管理 -->
<template>
	<div>
		<p class="jisp">专题列表</p>	
	    <div class="div">
			<el-row v-if="!editList">
		    	<el-col :span="24">
			    	<el-row>
			    		<el-col :span="24">
							<div class="nav">
			    				<div class="navs">
			    					<label>查询类型</label>
			    					<el-input placeholder="请输入内容" style="width: 340px"  v-model="queryCriteria.type">
									    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
									        <el-option label="专题ID" value="专题ID"></el-option>
									        <el-option label="专题名" value="专题名"></el-option>
									        <el-option label="创建人" value="创建人"></el-option>
									    </el-select>
								    </el-input>
			    				</div>
							    <div class="navs">	
							    	<label>状态</label>
							    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width:220px">
								        <el-option label="上架" value="上架"></el-option>
								        <el-option label="下架" value="下架"></el-option>
								    </el-select>
							    </div>
							    <div class="navs">
							    	<label>类别</label>
							    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 220px">
								        <el-option label="用户" value="用户"></el-option>
								        <el-option label="艺人" value="艺人"></el-option>
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
			    		<el-col :span="22" class="table">
					    	<el-table
								border
								stripe
							    :data="cmsCreator"
							    style="width: 100%">
							    <el-table-column
							      prop="coverUrl"
							      label="专题封面" >
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
							      width="120">
							    </el-table-column>
							     <el-table-column
							      prop="createuserName"
							      label="创建人"
							      width="110">
							    </el-table-column>
							     <el-table-column
							      prop="type"
							      label="创建人类别"
							      width="120">
							    </el-table-column>
							     <el-table-column
							      prop="createTime"
							      label="创建时间"
							      width="180">
							    </el-table-column>
							     <el-table-column
							      prop="cmsEditoruserName"
							      label="修改人"
							      width="100">
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
							    <el-table-column label="操作" width="300%">
							        <template scope="scope">
							        	<div v-if="scope.row.dataState !== '已删除' ">
							        		<el-button
									            size="small"
									            type="info" 
									            @click="edit(scope.row)">编辑</el-button>
									        <el-button
									        	size="small"
									        	type="danger"
									            @click="dialogVisibles(scope.row)">删除</el-button>
									        <el-button
									            size="small"
									            type="info" 
												v-if="scope.row.dataState === '正常'"
									            @click="handleEdit(scope.row)">下架</el-button>
									        <el-button
									            size="small"
									            type="info" 
									            v-if="scope.row.dataState === '已下架'"
									            @click="handleEdit1(scope.row)">上架</el-button>
									        <el-button
									            size="small"type="info" 
									            @click="biangeng(scope.$index, scope.row)">变更排序</el-button>
							        	</div>
							        	
							        </template>
							    </el-table-column>
							</el-table>
							<el-dialog
								v-if=""
								title="删除提示"
								:visible.sync="dialogVisible"
								size="tiny">
								<div v-if="detejs ==='艺人'&& detejs !=='用户'">
									<label>删除原因：</label>
									<el-input
									class="label"
									type="textarea"
										:rows="2"
										placeholder="请输入原因"
										v-model="textarea">
									</el-input>
								</div>
								<div v-else>
									<p>确认删除</p>
								</div>
								<span slot="footer" class="dialog-footer">
								    <el-button @click="dialogVisible = false">取 消</el-button>
								    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
								</span>
							</el-dialog>
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
	</div>	
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import {SPECIALLIST} from "../../../store/operationManagement/specialList.js"
import edits from "./sreateSpecials/specialedit.vue"
	export default{
		name:"specialList",
		created(){
			this.SPECIALLIST()
			this.currentPage =this.pageIndex
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
				//删除按键判断
				detejs:null,
			}
		},
		computed:{
	    	...mapState("specialList",["cmsCreator","pageIndex","pageSize","totalElements","editList"])
	    },
		methods:{
			...mapActions("specialList",["SPECIALLIST","DISABLE","ENABLE","DELETE"]),
			...mapMutations("specialList",["edittrue","getPageSize"]),
			//下架
			handleEdit(row) {
				this.DISABLE(row.id)	        	
	        },
	        //上架
	        handleEdit1(row) {
	        	this.ENABLE(row.id)
	        },
        	 //分页
        	handleCurrentChange(val) {
        		this.getPageSize(val)
        		this.currentPage = val
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
        	selectList(val) {
		        this.multipleSelection = val;
		        console.log(this.multipleSelection)
		    },
		    dialogVisibles(row){
		    	this.DELETE(row.id)
		    	// this.detejs =row.type
		    	// this.dialogVisible  = true
		    },
		    biangeng(index,row){
		    	this.sortsFront = index
		    	this.sortsEntry = row
		    	this.sort = true
		    	// this.audioMaterial.splice(3,0,row)
		    	// console.log(index,row)
		    },
		    sortsMethod(){
		    	this.audioMaterial.splice(`parseInt(this.sorts)-1`,0,this.sortsEntry)
		    	this.sort = false
		    },
		    //编辑
		    edit(row){
		    	// this.edittrue()
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
	.img{
		height: 50px;width: 50px;margin-top: 6px;
	}
	.jisp{
		margin: 0;
		height: 70px;
		color: #353535;
		font-size: 20px;
		line-height: 70px;
		background-color: #f2f2f2;
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