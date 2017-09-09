<!--滤镜表 -->
<template>
	<div>
		<p class="jisp">滤镜表</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="24">
			    	<el-row>
			    		<el-col :span="8" class="table">
					    	<el-table
								border
								stripe
							    :data="audioMaterial"
							    style="width: 100%">
							    <el-table-column
							      prop="id"
							      label="滤镜ID"
							      width="170%">
							    </el-table-column>
							    <el-table-column
							      prop="materialName"
							      label="滤镜名"
							      width="170%">
							    </el-table-column>
							    <el-table-column
							      prop="type"
							      label="使用次数"
							      width="178%">
							    </el-table-column>
							</el-table>
				    	</el-col>
			    	</el-row> 		
		    		<el-row>
				    	<el-col :span="8" class="table">
				    		<el-pagination
						        @size-change="handleSizeChange"
						        @current-change="handleCurrentChange"
						        :current-page="currentPage"
						        :page-size="10"
						        layout="prev, pager, next, jumper"
						        :total="100">
						    </el-pagination>
				    	</el-col>
		    		</el-row>
		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>
<script>
	export default{
		name:"filterList",
		data(){
			return{
				//当前页
				currentPage:1,
				audioMaterial:[{
					id:"1",
					materialName:"素材1",
					type:"原创",
				},{
					id:"1",
					materialName:"素材1",
					type:"原创",
				}],
				multipleSelection:[]
			}
		},
		methods:{
	      	handleSizeChange(val) {
        		console.log(`每页 ${val} 条`);
        	},
        	handleCurrentChange(val) {
        		console.log(`当前页: ${val}`);
        	},
		}
	}
</script>
<style scoped>
	.table{
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
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

</style>