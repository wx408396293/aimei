<template>
	<div>
		<p class="jisp">流行榜列表</p>	
	    <div class="div">
			<el-row>
				<el-col :span="24">
					<el-row>
						<el-col :span="20">
							<el-table
								border
								stripe
							    :data="popList"
							    style="">
							    <el-table-column
							      prop="coverUrl"
							      label="流行榜封面" >
							       <template scope="scope">
								       <img :src="scope.row.coverUrl" class="img" alt="">
							        </template>
							    </el-table-column>
							    <el-table-column
							      prop="title"
							      label="标题"
							      width="160">
							    </el-table-column>
							    <el-table-column
							      prop="periodsNumber"
							      label="期数"
							      width="100">
							    </el-table-column>
							    <el-table-column
							      prop="worksCount"
							      label="作品数"
							      width="100">
							    </el-table-column>
							    <el-table-column
							      prop="listDate"
							      label="生成榜单时间"
							      width="160">
							    </el-table-column>
							     <el-table-column
							      prop="releaseState"
							      label="发布状态"
							      width="100">
							    </el-table-column>
							     <el-table-column
							      prop="releaseTime"
							      label="发布时间"
							      width="180">
							    </el-table-column>
							    <el-table-column
							      prop="cmsUserName"
							      label="发布人"
							      width="120">
							    </el-table-column>
							    <el-table-column label="操作" width="180%" fixed="right">
							        <template scope="scope">
							        	<el-button
								            size="small"
								            type="warning"
								            @click="switchList(scope.row)">编辑</el-button>
								        <el-button
								        	v-if = "scope.row.releaseState ==='未发布'"
								        	size="small"
								        	type="info"
								            @click="ReleasePop(scope.row)">发布</el-button>
							        </template>
							    </el-table-column>
							</el-table>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="20" class="table">
							<el-pagination class="label"
					        @current-change="handleCurrentChange"
					        :current-page="currentPage"
					        :page-size="reportSize"
					        layout="prev, pager, next, jumper"
					        :total="reportElements">
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
	import {SWITCHone} from "../../../../store/operationManagement/popList.js"
	export default{
		name:"selectedList",
		created(){
			this.POPLIST()
    	},
		data(){
			return{
				//当前页
				currentPage:1,
			}
			
		},
		computed:{
	    	...mapState("popList",["reportSize","reportElements","reportIndex","popList"]),
	    },
		methods:{
			...mapMutations("popList",["SWITCHone","getReportSize","getpopList"]),
			...mapActions("popList",["POPLIST","TELEASEPOP"]),
			handleCurrentChange(val) {
	      		this.currentPage = this.reportIndex
        		this.getReportSize(val)
        		this.REOPRTLIST()
        	},
        	switchList(row){
        		this.SWITCHone()
        		this.getpopList(row)
        	},
        	ReleasePop(row){
        		if (row.coverUrl === "") {
		    		this.$message({
			          showClose: true,
			          message: '没有流行榜封面不能发布',
			          type: 'warning'
			        });
			       	return
		    	}
		    	if (row.title === "") {
		    		this.$message({
			          showClose: true,
			          message: '没有标题',
			          type: 'warning'
			        });
			       	return
		    	}
        		this.TELEASEPOP({
        			id:row.id,
        			title:row.title,
        			coverUrl:row.coverUrl
        		})
        	}
		}
	}
</script>
<style scoped>
	.center{
		margin-top: 20px;
		text-align: center;
	}
	.img{
		height: 80px;width: 120px;
		border-style: none ;margin-top: 6px;
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