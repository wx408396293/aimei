<template>
	<el-row>
		<el-col :span="24">
			<p class="jisp">咪币套餐列表</p>	
			<div class="div">
				<el-row>
					<el-col :span="18">
						<el-table
							border
							stripe
						    :data="audioMaterial"
						    style="">
						    <el-table-column
						      prop="id"
						      label="咪币数量"
						      width="100">
						    </el-table-column>
						    <el-table-column
						      prop="materialName"
						      label="售价"
						      width="100">
						    </el-table-column>
						    <el-table-column
						      prop="type"
						      label="折后价格"
						      width="100">
						    </el-table-column>
						     <el-table-column
						      prop="releaseName"
						      label="生效日期段"
						      width="200">
						    </el-table-column>
						     <el-table-column
						      prop="releaseDate"
						      label="创建人"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="releaseDate"
						      label="创建时间"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="releaseDate"
						      label="修改人"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="releaseDate"
						      label="修改时间"
						      width="120">
						    </el-table-column>
						    <el-table-column label="操作" width="174">
						        <template scope="scope">
						        	<el-button
							            size="small"
							            type="warning"
							            @click="">编辑</el-button>
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
					<el-col :span="18" class="center">
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
			</div>
		</el-col>
	</el-row>
</template>
<script>
	export default{
		name:"MibPackage",
		data(){
			return{
				//当前页
				currentPage:1,
				audioMaterial:[{
					id:"2017-8-4 21:23:40",
					materialName:"23",
					type:"张胜男",
					releaseName:"2017年8月4日21:24:31",
					releaseDate:"已发布"}]
			}
			
		},
		methods:{
			handleSizeChange(val) {
        		console.log(`每页 ${val} 条`);
        	},
        	handleCurrentChange(val) {
        		console.log(`当前页: ${val}`);
        	},
        	dialogVisibles(row){
        		console.log(row)
        	}
		}
	}
</script>
<style scoped>
	.center{
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
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