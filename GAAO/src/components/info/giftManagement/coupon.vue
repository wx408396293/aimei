<!--礼物管理 -->
<template>
	<div>
		<p class="jisp">积分兑换优惠卷</p>	
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
							      prop="coupon"
							      label="优惠卷"
							      width="140">
							    </el-table-column>
							    <el-table-column label="可否兑换" width="190">
							        <template scope="scope">
							        	<el-select v-model="audioMaterial[scope.$index].sharedState " size="mini" placeholder="类型" style="width: 100px">
									        <el-option label="是" value="是"></el-option>
									        <el-option label="否" value="否"></el-option>
									    </el-select>
							        </template>
							    </el-table-column>
							     <el-table-column label="所需积分" width="180">
							        <template scope="scope">
							        	<el-input style="width: 100px;" v-if="audioMaterial[scope.$index].sharedState === '是'"  v-model="audioMaterial[scope.$index].amount"></el-input>
							        	<label v-else>{{audioMaterial[scope.$index].amount}}</label>
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
						<el-col :span="24">
							<el-button type="info" @click="">提交</el-button>
						</el-col>
					</el-row>		
		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>
<script>
	export default{
		name:"birthdayGiftList",
		data(){
			return{
				//弹出框设置
				dialogVisible: false,
				//
				//弹窗输入内容
				audioMaterial:[{
					coupon:"优惠卷1",
					sharedState:"否",
					amount:0
				},{
					coupon:"优惠卷1",
					sharedState:"是",
					amount:140
				}],
				multipleSelection:[],
				//删除按键判断
				detejs:null,
			}
		},
		methods:{
		    dialogVisibles(row){
		    	this.dialogVisible  = true
		    },
		    handleEdit(index, row) {
	        	console.log(index, row);
	        },
		}
	}
</script>
<style scoped>
	.table{
		margin-bottom: 20px;
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