<!--待审核艺人 -->
<template>
	<div > 
		<p class="jisp">通知列表</p>	
		<div class="div">
			<el-row v-if="bluer">
		    	<el-col :span="24">
					<div class="nav">
	    				<div class="navs">
	    					<label>查询类型</label>
	    					<el-input placeholder="请输入内容" style="width: 340px"  v-model="queryCriteria.type">
							    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
							        <el-option label="通知ID" value="通知ID"></el-option>
							        <el-option label="通知内容" value="通知内容"></el-option>
							    </el-select>
						    </el-input>
	    				</div>
					    <div class="navs">	
					    	<label>发送状态</label>
					    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 220px">
						        <el-option label="已发送" value="已发送"></el-option>
						        <el-option label="待发送" value="待发送"></el-option>
						    </el-select>
					    </div>
					    <div class="navs">
					    	<label>接受用户</label>
					    	<el-select v-model="queryCriteria.sharedState " slot="prepend" placeholder="类型" style="width: 220px">
						        <el-option label="全部" value="全部"></el-option>
						        <el-option label="普通" value="普通"></el-option>
						        <el-option label="艺人" value="艺人"></el-option>
						        <el-option label="指定接收" value="指定接收"></el-option>
						    </el-select>
					    </div>
					    <div class="navs">
					    	<label>链接类型</label>
					    	<el-select v-model="queryCriteria.sharedState " slot="prepend" placeholder="类型" style="width: 220px">
						        <el-option label="素材" value="素材"></el-option>
						        <el-option label="标签" value="标签"></el-option>
						        <el-option label="自定义" value="自定义"></el-option>
						        <el-option label="活动" value="活动"></el-option>
						    </el-select>
					    </div>
	    			</div>
	    			<div class="nav_s">
				    	<el-button class="button" type="success" @click="QueryCriteria" style="width:140px;font-size:16px" size="small">查询</el-button>
				    	<el-button type="danger" @click="reset"  size="small" style="width:70px;font-size:16px">清除</el-button>
					</div>
		    	</el-col>
		    	<el-col :span="24" class="table">
			    	<el-table
						border
						stripe
					    :data="notificationList"
					    style="width: 100%">
					    <el-table-column
					      prop="id"
					      label="通知ID"
					      width="100">
					    </el-table-column>
					    <el-table-column
					      prop="content"
					      label="通知内容"
					      width="300">
					    </el-table-column>
					    <el-table-column
					      prop="isSent"
					      label="发送状态"
					      width="100">
					    </el-table-column>
					     <el-table-column
					      prop="targetIdSets"
					      label="接收用户"
					      width="110">
					    </el-table-column>
					     <el-table-column
					      prop="targetIds"
					      label="指定用户ID"
					      width="160">
					    </el-table-column>
					     <el-table-column
					      prop="shareContent.type"
					      label="链接类型"
					      width="100">
					    </el-table-column>
					     <el-table-column
					      prop="shareContent.sourceId"
					      label="链接ID/URL"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="cmsCreatorInfo.userName"
					      label="创建人"
					      width="140">
					    </el-table-column>
					    <el-table-column
					      prop="createTime"
					      label="创建时间"
					      width="180">
					    </el-table-column>
					    <el-table-column label="操作" width="160">
					        <template scope="scope">
						        <el-button  size="small" type="danger" @click="toExamine(scope.row)" v-if="scope.row.isSent==='未发送'">删除</el-button>
						        <el-button  size="small" type="warning" @click="createList(scope.row)">编辑</el-button>
					        </template>
					    </el-table-column>
					</el-table>
				    <el-pagination
				    	class="label"
				        @current-change="handleCurrentChange"
				        :current-page="currentPage"
				        :page-size="pageSize"
				        layout="prev, pager, next, jumper"
				        :total="totalElements">
				    </el-pagination>
				    <el-dialog
						v-if=""
						title="删除提示"
						:visible.sync="dialogVisible"
						size="tiny">
						确认是否删除
						<span slot="footer">
						    <el-button @click="dialogVisible = false">取 消</el-button>
						    <el-button type="primary" @click="confirmButton">确 定</el-button>
						</span>
					</el-dialog>
		    	</el-col>
		    </el-row>
		</div>
		<modifynotification v-if="!bluer" />
	</div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import modifynotification from "./modifynotification.vue"

	export default{
		name:"pendingAudit",
		created(){
			this.NOTIFICATIONLIST()
    	},
		data(){
			return{
				//弹窗
				dialogVisible:false,
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
				//弹窗输入内容
				textarea:"",
				audioMaterial:[{
					id:"1",
					materialName:"素材1",
					type:"待发送",
					releaseName:"用户1",
					releaseDate:"2017-8-1 15:36:26",
					sharedState:"是",
					publiCworks :"是",
					position:"艺人",
					information:"成都"
				},{
					id:"1",
					materialName:"素材1",
					type:"已发送",
					releaseName:"用户1",
					releaseDate:"2017-8-1 15:36:26",
					sharedState:"是",
					publiCworks :"是",
					position:"机构",
					information:"成都"
				}],
				//传值
				
				userID:"",
				Types:"",
				
			}
		},
		computed:{
	    	...mapState("notificationlist",["pageSize","totalElements","pageIndex","notificationList","bluer"])
	    },
	    components: {
		    modifynotification,
		},
		methods:{
			...mapMutations("notificationlist",["getPageSize","getnotifications"]),
			...mapActions("notificationlist",["NOTIFICATIONLIST","DELETENOTIFICATION",]),
			//删除
			toExamine(row) {
				this.DELETENOTIFICATION(row.id)
				// console.log(row.id)
				// this.dialogVisible = true;
	        },
	        //修改
	        createList(row){
	        	this.getnotifications(row)
	        },
	      	handleCurrentChange(val) {
        		this.getPageSize(val)
        		this.NOTIFICATIONLIST()
        		this.currentPage = this.pageIndex
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
        	confirmButton(){
        		this.dialogVisible = false;
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