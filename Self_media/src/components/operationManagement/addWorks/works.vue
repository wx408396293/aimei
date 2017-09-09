<!--精选池 -->
<template>
	<el-row>
    	<el-col :span="24">
	    	<el-row>
	    		<el-col :span="24">
					<p>自己作品</p>
				    <el-input placeholder="请输入内容" style="width: 240px"  v-model="queryCriteria.type">
					    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
					        <el-option label="作品ID" value="作品ID"></el-option>
					        <el-option label="作品名" value="作品名"></el-option>
					        <el-option label="发布用户" value="发布用户"></el-option>
					        <el-option label="标签" value="标签"></el-option>
					        <el-option label="地理位置" value="地理位置"></el-option>
					        <el-option label="音频素材" value="音频素材"></el-option>
					    </el-select>
				    </el-input>
				    <div class="type">	
				    	<label>音频/视频</label>
				    	<el-select v-model="queryCriteria.typeName" size="prepend" placeholder="类型" style="width: 100px">
					        <el-option label="音频" value="音频"></el-option>
					        <el-option label="视频" value="视频"></el-option>
					    </el-select>
					    <label>公开/私密</label>
				    	<el-select v-model="queryCriteria.sharedState " size="prepend" placeholder="类型" style="width: 100px">
					        <el-option label="公开" value="公开"></el-option>
					        <el-option label="私密" value="私密"></el-option>
					    </el-select>
					    <label>APP版本</label>
				    	<el-select v-model="queryCriteria.grade" size="prepend" placeholder="类型" style="width: 100px">
					        <el-option label="开启" value="开启"></el-option>
					        <el-option label="关闭" value="关闭"></el-option>
					    </el-select>
					    <label>移动平台</label>
				    	<el-select v-model="queryCriteria.platform" size="prepend" placeholder="类型" style="width: 100px">
					        <el-option label="开启" value="开启"></el-option>
					        <el-option label="关闭" value="关闭"></el-option>
					    </el-select>
					    <label>状态</label>
				    	<el-select v-model="queryCriteria.nameType" size="prepend" placeholder="类型" style="width: 100px">
					        <el-option label="正常" value="正常"></el-option>
					        <el-option label="冻结" value="冻结"></el-option>
					    </el-select>
				    </div>
				    <el-button class="button" type="primary" @click="QueryCriteria">查询</el-button>
					<el-button type="danger" @click="reset">清除</el-button>
	    		</el-col>
	    	</el-row>
	    	<el-row>
	    		<el-col :span="24" class="table">
	    			<el-table
						border
					    :data="WorksList"
					    style="width: 100%">
					    <el-table-column
					      prop="id"
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
					      prop="videoAppVersion"
					      label="移动平台"
					      >
					    </el-table-column>
					    <el-table-column
					      prop="dataState"
					      label="状态"
					     >
					    </el-table-column>
					    <el-table-column label="操作" width="100">
					        <template scope="scope">
						        <el-button
						          size="small"
						          @click="AddSelecteS(scope.row)">添加</el-button>
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
// import {WORKSLIST,DELETESELECTED} from "../../../../store/worksManagement/Selected.js"
	export default{
		name:"worksSelected",
		created(){
			this.WORKSLIST()
		},
		// mounted(){
		// 	this.WorksList.forEach((){
		// 		// statements
		// 	});
		// },
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
	    	...mapState("Selected",["pageSize","totalElements","WorksList"]),
	    },
		methods:{
	      	...mapActions("Selected",["WORKSLIST","DELETESELECTED"]),
			...mapMutations("Selected",["getPageSize"]),
			...mapMutations("createSpecial",["PuxhWorksList","dialogVisiblefalse"]),
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
        	AddSelecteS(row){
        		this.dialogVisiblefalse()
        		this.PuxhWorksList(row)
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
</style>