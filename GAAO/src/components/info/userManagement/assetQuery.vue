<!-- 资产 -->
<template>
	<div>
		<p class="jisp">资产列表</p>	
	    <div class="div">
			<el-row>
				<el-col :span="24">
					<el-row>
						<el-col :span="24">
							<div class="search">
								<div>
									<label class="label">用户ID:</label>
									<el-input v-model="userID" placeholder="请输入内容"  style="width: 200px" ></el-input>
								</div>
								<el-button type="primary" @click="search">查询</el-button>
							</div>
							
						</el-col>
					</el-row>
					<div v-if ="searchButton">
						<el-row v-if="searchList">
							<el-col :span="16">
								<div class="bottom">
									<label  class="label">用户ID:</label><label>{{userName}}</label>
								</div>
								<el-table
									border
									stripe
								    :data="assetquery"
								    style="width: 100%">
								    <el-table-column
								      prop="goldNum"
								      label="咪币"
								      width="100">
								    </el-table-column>
								    <el-table-column
								      prop="score"
								      label="积分"
								      width="100">
								    </el-table-column>
								     <el-table-column
								      prop="giftList.0.value"
								      label="礼物(鲜花)"
								      width="130">
								    </el-table-column>
								     <el-table-column 
								      prop="giftList.1.value"
								      label="礼物(棉花糖)"
								      width="130">
								    </el-table-column>
								     <el-table-column
								      prop="giftList.2.value"
								      label="礼物(八音盒)"
								      width="140">
								    </el-table-column>
								     <el-table-column
								      prop="giftList.3.value"
								      label="礼物(晴天娃娃)"
								      width="140">
								    </el-table-column>
								    <el-table-column
								      prop="giftList.4.value"
								      label="礼物(龙猫)"
								      width="140">
								    </el-table-column>
								    <el-table-column
								      prop="giftList.5.value"
								      label="礼物(咪哒小黑人)"
								      width="160">
								    </el-table-column>
								</el-table>
							</el-col>
						</el-row>
						<el-row v-if="searchList">
							<el-col :span="11">
								<el-row>
									<el-col :span="24">
										<p>优惠卷(12)</p>
										<el-table
											border
										    :data="gift"
										    style="width: 100%">
										    <el-table-column
										      prop="headPortrait"
										      label="优惠卷类别"
										      width="170%">
										    </el-table-column>
										    <el-table-column
										      prop="id"
										      label="优惠卷ID"
										      width="170%">
										    </el-table-column>
										    <el-table-column
										      prop="userName"
										      label="优惠卷名"
										      width="170%">
										    </el-table-column>
										     <el-table-column
										      prop="gender"
										      label="有效时间"
										      width="210%">
										    </el-table-column>
										</el-table>
									</el-col>
								</el-row>
								<el-row>
							    	<el-col :span="24" class="table">
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
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
	export default{
		name:"assetQuery",
		created(){
			if (this.userId === null) {
				return
			}else {
				this.userID = this.userId	
				this.SEARCHASSET(this.userID)			
			}
		},
		data(){
			return{
				userID:"",
				searchList: true,
				//当前页
				currentPage:1,
				gift:[{
					headPortrait:'231' ,
					id:"124",
					userName:"352",
					gender:"43",
					number:"23523", 
					autograph:"33232",
					registerDate:"2233233",
					loginDate:"232343",
					identity:"23243433",
				}]
			}
		},
		computed:{
	    	...mapState("assetQuery",["pageSize","GetFanListotal","searchButton","userId","userName","assetquery"])
	    },
		methods:{
			...mapMutations("assetQuery",["getUserId","assetsearchfalse"]),
			...mapActions("assetQuery",["SEARCHASSET"]),
			search(){
				this.assetsearchfalse()
				this.getUserId(this.userID)
				this.SEARCHASSET()
			},
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
	.search{
		width: 380px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
	}
	.label{
		margin-right: 20px;
	}
	.table{
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
	}
	.bottom{
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