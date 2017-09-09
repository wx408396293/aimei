<!--礼物管理 -->
<template>
	<div>
		<p class="jisp">礼物列表</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="24">
			    	<el-row>
			    		<el-col :span="22" class="table">
					    	<el-table
								border
								stripe
							    :data="audioMaterial"
							    style="width: 100%">
							    <el-table-column
							      prop="id"
							      label="礼物图片"
							      width="140">
							    </el-table-column>
							    <el-table-column
							      prop="materialName"
							      label="礼物名"
							      width="100">
							    </el-table-column>
							    <el-table-column
							      prop="type"
							      label="支付类型"
							      width="100">
							    </el-table-column>
							     <el-table-column
							      prop="releaseName"
							      label="礼物价格"
							      width="110">
							    </el-table-column>
							     <el-table-column
							      prop="releaseDate"
							      label="礼物分"
							      width="160">
							    </el-table-column>
							     <el-table-column
							      prop="information"
							      label="创建时间"
							      width="200">
							    </el-table-column>
							     <el-table-column
							      prop="publiCworks"
							      label="修改人"
							      width="100">
							    </el-table-column>
							    <el-table-column
							      prop="akes"
							      label="修改时间"
							      width="200">
							    </el-table-column>
							    <el-table-column
							      prop="just"
							      label="状态"
							      width="100">
							    </el-table-column>
							    <el-table-column label="操作" width="200%">
							        <template scope="scope">
							        	<el-button
								            size="small"
								            type="warning"
								            @click="">编辑</el-button>
								        <el-button
								        	size="small"
								        	type="danger"
								            @click="dialogVisibles(scope.row)">删除</el-button>
								        <el-button
								            size="small"
								            type="info"
								            v-if="scope.row.just ==='上架'&& scope.row.just !=='下架'"
								            @click="handleEdit(scope.$index, scope.row)">下架</el-button>
								        <el-button
								            size="small"
								            type="info"
								            v-if="scope.row.just ==='下架'&& scope.row.just !=='上架'"
								            @click="handleEdit1(scope.$index, scope.row)">上架</el-button>
							        </template>
							    </el-table-column>
							</el-table>
							<el-dialog
								v-if=""
								title="删除提示"
								:visible.sync="dialogVisible"
								size="tiny">
								<p>确认删除</p>
								<span slot="footer" class="dialog-footer">
								    <el-button @click="dialogVisible = false">取 消</el-button>
								    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
								</span>
							</el-dialog>
				    	</el-col>
					</el-row> 		
		    		<el-row>
				    	<el-col :span="22" class="table">
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
		name:"giftList",
		data(){
			return{
				//当前页
				currentPage:1,
				//弹出框设置
				dialogVisible: false,
				
				//弹窗输入内容
				textarea:"",
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
					just:"上架",
					akes:"用户"
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
					just:"下架",
					akes:"艺人"
				},{
					id:"1",
					materialName:"素材1",
					type:"原创",
					releaseName:"用户1",
					releaseDate:"2017-8-1 15:36:26",
					sharedState:"是",
					publiCworks :"是",
					position:"四川",
					information:"重庆",
					just:"下架",
					akes:"艺人"
				},{
					id:"1",
					materialName:"素材1",
					type:"原创",
					releaseName:"用户1",
					releaseDate:"2017-8-1 15:36:26",
					sharedState:"是",
					publiCworks :"是",
					position:"四川",
					information:"大连",
					just:"下架",
					akes:"艺人"
				}],
				multipleSelection:[],
				//删除按键判断
				detejs:null,
			}
		},
		methods:{
			handleEdit(index, row) {
				this.audioMaterial[index].just = "下架"
	        	console.log(this.audioMaterial[index].just );
	        },
	        handleEdit1(index, row) {
				this.audioMaterial[index].just = "上架"
	        	console.log(this.audioMaterial[index].just );
	        },
	      	handleSizeChange(val) {
        		console.log(`每页 ${val} 条`);
        	},
        	handleCurrentChange(val) {
        		console.log(`当前页: ${val}`);
        	},
        	
        	selectList(val) {
		        this.multipleSelection = val;
		        console.log(this.multipleSelection)
		    },
		    dialogVisibles(row){
		    	this.dialogVisible  = true
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