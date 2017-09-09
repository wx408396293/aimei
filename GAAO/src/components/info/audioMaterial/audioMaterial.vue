<!--音频素材管理 -->
<template>
	<div>
		<p class="jisp">音频素材列表</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="22">
				    <div class="nav">
	    				<div class="navs">
	    					<label>查询类型</label>
	    					<el-input placeholder="请输入内容" style="width: 340px"  v-model="queryCriteria.type">
							    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
							        <el-option label="素材ID" value="素材ID"></el-option>
							        <el-option label="素材名" value="素材名"></el-option>
							        <el-option label="发布用户" value="发布用户"></el-option>
							    </el-select>
						    </el-input>
	    				</div>
	    				<div class="navs">
	    					<label>类型</label>
					    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 220px">
						        <el-option label="minik" value="minik"></el-option>
						        <el-option label="原创" value="原创"></el-option>
						    </el-select>
	    				</div>
	    				<div class="navs">
	    					<label>共享状态</label>
					    	<el-select v-model="queryCriteria.sharedState " slot="prepend" placeholder="类型" style="width: 220px">
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
		    	<el-col :span="22" class="table">
			    	<el-table
						border
						stripe
					    :data="audioList"
					    style="width: 100%">
					    <el-table-column
					      prop="id"
					      label="素材ID"
					      width="100">
					    </el-table-column>
					    <el-table-column
					      prop="audioName"
					      label="素材名"
					      width="160">
					    </el-table-column>
					    <el-table-column
					      prop="sourceType"
					      label="类型(minik/原创)"
					      width="150">
					    </el-table-column>
					     <el-table-column
					      prop="userName"
					      label="发布用户"
					      width="180">
					    </el-table-column>
					     <el-table-column
					      prop="uploadTime"
					      label="发布时间"
					      width="180">
					    </el-table-column>
					     <el-table-column
					      prop="canUse"
					      label="共享状态"
					      width="100">
					    </el-table-column>
					     <el-table-column
					      prop="worksCount"
					      label="公开作品数"
					      width="120">
					    </el-table-column>
					    <el-table-column
					      prop="cityCode"
					      label="地理位置"
					      width="100">
					    </el-table-column>
					    <el-table-column
					      prop="dataState"
					      label="状态"
					      width="150">
					    </el-table-column>
					    <el-table-column label="操作" width="170"  fixed="right">
					        <template scope="scope">
						        <el-button
						          size="small"
						          type="info" 
						          @click="handleEdit(scope.$index, scope.row)">相关作品</el-button>
						        <el-button
						          size="small"
						          type="danger"
						          v-if ="scope.row.dataState !== '已删除'"
						          @click="deleteButton(scope.row)">删除</el-button>
					        </template>
					    </el-table-column>
					</el-table>
				   <el-pagination class="label"
				        @current-change="handleCurrentChange"
				        :current-page="currentPage"
				        :page-size="pageSize"
				        layout="prev, pager, next, jumper"
				        :total="totalElements">
				    </el-pagination>
					<el-dialog
						title="删除提示"
						:visible.sync="dialogVisible"
						:before-close="getbutton"
						size="tiny">
						<label>删除原因：</label>
						<el-input
						class="label"
						type="reason"
							:rows="2"
							placeholder="请输入原因"
							v-model="reason">
						</el-input>
						<span slot="footer" class="dialog-footer">
						    <el-button @click="getbutton">取 消</el-button>
						    <el-button type="primary" @click="DELETEBUTTON">确 定</el-button>
						</span>
					</el-dialog>

		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import {GETAUDIOMATERIALIST} from "../../../store/audioMaterial/audioMaterial.js"
	export default{
		name:"audioMaterial",
		created(){
			this.GETAUDIOMATERIALIST()
		},
		data(){
			return{
				//查询条件
				queryCriteria:{
					type:"",
					typeValue:"",
					typeName:"",
					sharedState:"",
				},
				//当前页
				currentPage:1,
				//弹出框设置
				dialogVisible: false,
				//删除需要的参数
				reason:"",
				id:"",
			}
		},
		computed:{
	    	...mapState("audiomaterialist",["pageSize","totalElements","audioList"])
	    },
		methods:{
			...mapActions("audiomaterialist",["GETAUDIOMATERIALIST","DELETEAUDIOMATERIAL"]),
			...mapMutations("audiomaterialist",["getPageSize"]),
			handleEdit(index, row) {
	        	console.log(index, row);
	        },
	        handleDelete(index, row) {
	        	console.log(index, row);
	      	},
	      	 //分页
        	handleCurrentChange(val) {
        		this.getPageSize(val)
        		this.GETAUDIOMATERIALIST()
        	},
        	//删除按钮
        	deleteButton(row){
        		this.dialogVisible = true
        		this.id = row.id
        	},
        	getbutton(){
        		this.reason = ""
        		this.dialogVisible = false
        	},
        	DELETEBUTTON(){
        		if (this.reason === "") {
		    		this.$message({
			          showClose: true,
			          message: '请输入删除原因',
			          type: 'warning'
			        });
			       	return
		    	}
        		this.DELETEAUDIOMATERIAL({
        			id:this.id,
        			reason:this.reason,
        		})
        		this.dialogVisible = false
        		this.reason = ""
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
	.labels{
		padding-top: 20px;
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