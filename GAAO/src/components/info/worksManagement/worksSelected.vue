<!--精选池 -->
<template>
	<div>
		<p class="jisp">精选池</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="24">
			    	<el-row>
			    		<el-col :span="24">
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
							    	<label>音频/视频</label>
							    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 220px">
								        <el-option label="音频" value="音频"></el-option>
								        <el-option label="视频" value="视频"></el-option>
								    </el-select>
							    </div>
							    <div class="navs">
							    	<label>公开/私密</label>
							    	<el-select v-model="queryCriteria.sharedState " slot="prepend" placeholder="类型" style="width: 220px">
								        <el-option label="公开" value="公开"></el-option>
								        <el-option label="私密" value="私密"></el-option>
								    </el-select>
							    </div>
							    <div class="navs">
							    	<label>APP版本</label>
							    	<el-select v-model="queryCriteria.grade" slot="prepend" placeholder="类型" style="width: 220px">
								        <el-option label="开启" value="开启"></el-option>
								        <el-option label="关闭" value="关闭"></el-option>
								    </el-select>
							    </div>
							    <div class="navs">
							    	<label>移动平台</label>
							    	<el-select v-model="queryCriteria.platform" slot="prepend" placeholder="类型" style="width: 220px">
								        <el-option label="开启" value="开启"></el-option>
								        <el-option label="关闭" value="关闭"></el-option>
								    </el-select>
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
			    		<el-col :span="24" class="table">
			    			<el-table
								border
								stripe
								highlight-current-row
							    :data="WorksList"
							    style="width: 100%"
							    @select="selectList"
								@select-all="selectList">
								<el-table-column type="selection" width="auto">
						   	    </el-table-column>
							    <el-table-column
							      prop="opusId"
							      label="作品ID"
							      width="auto">
							    </el-table-column>
							    <el-table-column
							      prop="title"
							      label="作品名"
							      width="auto">
							    </el-table-column>
							    <el-table-column
							      prop="userName"
							      label="发布用户"
							      width="auto">
							    </el-table-column>
							     <el-table-column
							      prop="releaseTime"
							      label="发布时间"
							      width="auto">
							    </el-table-column>
							     <el-table-column
							      prop="type"
							      label="视频/音频"
							      >
							    </el-table-column>
							     <el-table-column
							      prop="tagst"
							      label="标签"
							     >
							    </el-table-column>
							     <el-table-column
							      prop="type"
							      label="地理位置"
							     >
							    </el-table-column>
							    <el-table-column
							      prop="description"
							      label="描述"
							      >
							    </el-table-column>
							    <el-table-column
							      prop="audioName"
							      label="音频素材"
							     >
							    </el-table-column>
							    <el-table-column
							      prop="state"
							      label="公开/私密"
							      >
							    </el-table-column>
							    <el-table-column
							      prop="play"
							      label="播放数"
							      >
							    </el-table-column>
							    <el-table-column
							      prop="store"
							      label="收藏数"
							      >
							    </el-table-column>
							    <el-table-column
							      prop="comment"
							      label="评论数"
							     >
							    </el-table-column>
							    <el-table-column
							      prop="forward"
							      label="转发数"
							     >
							    </el-table-column>
							    <el-table-column
							      prop="videoAppVersion"
							      label="APP版本"
							     >
							    </el-table-column>
							    <el-table-column
							      prop="videoAppOs"
							      label="移动平台"
							      >
							    </el-table-column>
							    <el-table-column
							      prop="dataState"
							      label="状态"
							     >
							    </el-table-column>
							</el-table>
		    			</el-col>
			    	</el-row> 		
		    		<el-row>
				    	<el-col :span="24" class="table">
				    		<el-button  size="small" type="danger"  style="width:140px;font-size:16px"    @click="deleteSelected">移除精选池</el-button>
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
		</div>
	</div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import {WORKSLIST,DELETESELECTED} from "../../../store/worksManagement/Selected.js"
	export default{
		name:"worksSelected",
		created(){
			this.WORKSLIST()
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
				//当前页
				currentPage:1,
				multipleSelection:[]
			}
		},
		computed:{
	    	...mapState("Selected",["pageSize","totalElements","WorksList"])
	    },
		methods:{
	      	...mapActions("Selected",["WORKSLIST","DELETESELECTED"]),
			...mapMutations("Selected",["getPageSize"]),
        	handleCurrentChange(val) {
        		this.getPageSize(val)
        		this.WORKSLIST()
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
        		this.multipleSelection=[]
		        val.forEach( (item) => {
		        	this.multipleSelection.push(item.id)
		        });
		    },
		    deleteSelected(){
		    	this.DELETESELECTED(this.multipleSelection.join(","))
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
		justify-content: space-between;
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