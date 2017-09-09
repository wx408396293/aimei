<!--标签列表 -->
<template>
	<div>
		<el-row v-if="!editRecommend">
			<el-col :span="16">
				<div>
					<p class="jisp">标签列表</p>	
				    <div class="div">
						<el-row>
							<el-col :span="24">
							    <div class="nav">
				    				<div class="navs">
				    					<label>查询类型</label>
				    					<el-input placeholder="请输入内容" style="width: 340px"  v-model="queryCriteria.type">
										    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
										        <el-option label="标签ID" value="标签ID"></el-option>
										        <el-option label="标签名" value="标签名"></el-option>
										    </el-select>
									    </el-input>
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
								    :data="LabelList"
								    highlight-current-row
								    style="width: 110%">
								    <el-table-column
								      prop="id"
								      label="标签ID"
								      width="90">
								    </el-table-column>
								    <el-table-column
								      prop="name"
								      label="标签名"
								      width="156">
								    </el-table-column>
								    <el-table-column
								      prop="createTime"
								      label="创建时间"
								      width="180">
								    </el-table-column>
								     <el-table-column prop="content"
								      label="描述"
								      width="190">
								    </el-table-column>
								     <el-table-column
								      prop="worksCount"
								      label="公开作品数"
								      width="120%">
								    </el-table-column>
								    <el-table-column label="操作" width="280">
								        <template scope="scope">
									        <el-button size="small" type="info"  @click="handleEdit(scope.$index, scope.row)">相关作品</el-button>
									        <el-button size="small" type="danger" @click="deletelabel(scope.row)">删除</el-button>
									        <el-button size="small" type="primary" @click="RecommenD(scope.row)">推荐</el-button>
									        <el-button size="small" type="warning" @click="editLabels(scope.row)">编辑</el-button>
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
									title="删除提示"
									:visible.sync="dialogVisible"
									size="tiny">
									<p>是否确定删除</p>
									<span slot="footer" class="dialog-footer">
									    <el-button @click="dialogVisible = false">取 消</el-button>
									    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
									</span>
								</el-dialog>
					    	</el-col>
						</el-row>
					</div>
				</div>
			</el-col>
			<el-col :span="8" class="cols">
				<p class="jisp jisps">推荐列表</p>
				<div class="div label" >

					<el-table
						border
						stripe
						highlight-current-row
					    :data="recommend"
					    style="width: 110%">
					     <el-table-column
					      prop="sort"
					      label="序号"
					      width="80">
					    </el-table-column>
					    <el-table-column
					      prop="tagId"
					      label="标签ID"
					      width="90">
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="标签名"
					      width="156">
					    </el-table-column>
					    <el-table-column label="操作" width="100">
					        <template scope="scope">
						        <el-button size="small" type="danger" @click="deleterecommendl(scope.row)">取消推荐</el-button>
					        </template>
					    </el-table-column>
					</el-table>
				</div>
			</el-col>
	    </el-row>
	    <editlabel v-if="editRecommend"/>
	</div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import {LABELLIST} from "../../../store/labelmanagement/labelList.js"
import editlabel from './editLabel.vue'
	export default{
		name:"labelManagementList",
		created(){
			this.LABELLIST()
			this.RECOMMENDLIST()
		},
		data(){
			return{
				//查询条件
				queryCriteria:{
					type:"",
					typeValue:"",
				},
				//当前页
				currentPage:1,
				//弹出框设置
				dialogVisible: false,
				//弹窗输入内容
				textarea:"",
				
			}
		},
		components: {
		    editlabel,
		},
		computed:{
	    	...mapState("labelList",["pageSize","totalElements","LabelList","recommend","editRecommend"])
	    },
		methods:{
			...mapActions("labelList",["LABELLIST","RECOMMENDLIST","RECOMMEND","DELETERECOMMENDL"]),
			...mapMutations("labelList",["getPageSize","getRecommend"]),
			editLabels(row){
				this.getRecommend({
					name:row.name,
					content:row.content
				})
			},
			//分页
			handleCurrentChange(val) {
				this.currentPage = val
        		this.getPageSize(val)
        		this.LABELLIST()
        	},
        	RecommenD(row){
        		this.RECOMMEND(row.id)
        		// console.log(row.id)
        	},
        	QueryCriteria(){
        		console.log(this.queryCriteria)
        	}, 
        	deletelabel(row){
        		console.log(row)
        	},
        	//删除推荐
        	deleterecommendl(row){
        		this.DELETERECOMMENDL(row.id)
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
        	handleEdit(index, row){
        		console.log(index,row)
        	}
		}
	}
</script>
<style scoped>
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
	.jisps{
		margin-left: 15px;
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