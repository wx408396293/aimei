<!--作品管理 -->
<template>
	<el-row>
    	<el-col :span="24">
	    	<el-row>
	    		<el-col :span="24">
					<!-- <p>作品</p> -->
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
						<el-table
						border
						stripe
						highlight-current-row
					    :data="WorksList"
					    style="width: 100%">
					    <el-table-column
					      prop="id"
					      label="作品ID"
					       width="120">
					    </el-table-column>
					    <el-table-column
					      prop="title"
					      label="作品名"
					      width="120">
					    </el-table-column>
					    <el-table-column
					      prop="userName"
					      label="发布用户"
					      width="120">
					    </el-table-column>
					     <el-table-column
					      prop="releaseTime"
					      label="发布时间"
					      width="150">
					    </el-table-column>
					     <el-table-column
					      prop="type"
					      label="视频/音频"
					      width="120">
					    </el-table-column>
					     <el-table-column
					      prop="tagst"
					      label="标签"
					     width="120">
					    </el-table-column>
					     <el-table-column
					      prop="type"
					      label="地理位置"
					      width="120">
					    </el-table-column>
					    <el-table-column
					      prop="description"
					      label="描述"
					       width="120">
					    </el-table-column>
					    <el-table-column
					      prop="audioName"
					      label="音频素材"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="state"
					      label="公开/私密"
					       width="120">
					    </el-table-column>
					    <el-table-column
					      prop="play"
					      label="播放数"
					       width="120">
					    </el-table-column>
					    <el-table-column
					      prop="store"
					      label="收藏数"
					       width="120">
					    </el-table-column>
					    <el-table-column
					      prop="comment"
					      label="评论数"
					      width="120">
					    </el-table-column>
					    <el-table-column
					      prop="forward"
					      label="转发数"
					      width="120">
					    </el-table-column>
					    <el-table-column
					      prop="videoAppVersion"
					      label="APP版本"
					      width="120">
					    </el-table-column>
					    <el-table-column
					      prop="videoAppOs"
					      label="移动平台"
					       width="120">
					    </el-table-column>
					    <el-table-column
					      prop="dataState"
					      label="状态"
					      width="120">
					    </el-table-column>
					    <el-table-column label="操作" width="100"  fixed="right">
					        <template scope="scope">
						        <el-button
						          size="small"
						          @click="handleEdit(scope.row)">添加</el-button>
					        </template>
					    </el-table-column>
					</el-table>
		    	</el-col>
	    	</el-row> 		
    		<el-row>
		    	<el-col :span="23" class="table">
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
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import {WORKSLIST} from "../../../../../store/worksManagement/works.js"
	export default{
		name:"works",
		// 父组件传值到子组件
		// props:["popControl"],
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
				//弹出框设置
				dialogVisible: false,
				audioMaterial:[{
					id:"1",
					materialName:"素材1",
					type:"原创",
					releaseName:"用户1",
					releaseDate:"2017-8-1 15:36:26",
					sharedState:"是",
					publiCworks :"是",
					position:"四川",
					information:"成都",
					just:"正常"
				},{
					id:"1",
					materialName:"素材1",
					type:"原创",
					releaseName:"用户1",
					releaseDate:"2017-8-1 15:36:26",
					sharedState:"是",
					publiCworks :"是",
					position:"四川",
					information:"成都",
					just:"冻结"
				}],
				multipleSelection:[]
			}
		},
		computed:{
	    	...mapState("works",["pageSize","totalElements","WorksList"])
	    },
		methods:{
			...mapActions("works",["WORKSLIST"]),
			...mapMutations("works",["getPageSize"]),
			...mapMutations("addBanner",["getCemtent","getControlButton"]),
			handleEdit(row){
				this.getCemtent(row)
				this.getControlButton()
				this.$emit("PopController",false)
			},
	      	 //翻页
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