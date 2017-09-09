<template>
<div>
	<div>
		<p class="jisp">精选列表</p>	
	    <div class="div">
			<el-row v-if="!editRecommend">
				<el-col :span="24">
					<el-row>
						<el-col :span="24">
							<el-table
								border
								stripe
								highlight-current-row
							    :data="selectedList"
							    style="">
							    <el-table-column
							      prop="createTime"
							      label="创建时间"
							      width="400">
							    </el-table-column>
							    <el-table-column
							      prop="cmsUserName"
							      label="发布人"
							      width="300">
							    </el-table-column>
							     <el-table-column
							      prop="publishDate"
							      label="精选发布时间"
							      width="400">
							    </el-table-column>
							     <el-table-column
							      prop="type"
							      label="精选发布状态"
							      width="200">
							    </el-table-column>
							    <el-table-column label="操作" width="204" >
							        <template scope="scope">
							        	<el-button
								            size="small"
								            type="warning"
								            @click="editSelecteds(scope.row)">编辑</el-button>
								        <el-button
								        	size="small"
								        	type="danger"
								            @click="dialogVisibles(scope.row)">删除</el-button>
							        </template>
							    </el-table-column>
							</el-table>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" class="table">
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
			<editSelected v-if="editRecommend"/>
		</div>
	</div>
</div>
	
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import editSelected from "./addWorks/editSelected.vue"
import {GETSELECTED} from "../../../store/operationManagement/selecteds.js"
	export default{
		name:"selectedList",
		created(){
			this.GETSELECTED()
    	},
		data(){
			return{
				//当前页
				currentPage:1,
				// editRecommend :false
			}
			
		},
		components: {
		   editSelected
		},
		computed:{
	    	...mapState("selecteds",["pageSize","totalElements","selectedList","editRecommend"]),
	    },
		methods:{
			...mapMutations("selecteds",["getPageSize","GETEDIT"]),
			...mapActions("selecteds",["GETSELECTED"]),
			dialogVisibles(row){
        		console.log(row)
        	},
        	handleCurrentChange(val) {
        		this.currentPage = val
        		this.getPageSize(val)
        		this.GETSELECTED()
        	},
        	//编辑
        	editSelecteds(row){
        		// this.editRecommend = true
        		this.GETEDIT()
        	}
		}
	}
</script>
<style scoped>
	.center{
		margin-top: 20px;
		text-align: center;
	}
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
	.table{
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
	}
</style>