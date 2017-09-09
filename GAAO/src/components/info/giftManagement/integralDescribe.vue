<template>
	<div>
		<p class="jisp">积分说明描述</p>	
	    <div class="div">
			<el-row>
				<el-col :span="24">
					<el-row>
						<el-col :span="24">
							<div class="upload_label1 upload_label">
								<label>获取途径-咪币消费</label>
							    <el-input  type="textarea" :rows="2" placeholder="请输入内容" style="width: 400px" v-model="textarea" :maxlength="20"></el-input>
							</div>
							<div class="upload_label1 upload_label">
								<label>获取途径-费充值消费</label>
								 <el-input  type="textarea" :rows="2" placeholder="请输入内容" style="width: 400px" v-model="textarea2" :maxlength="20"></el-input>
							</div>
							<div class="upload_label1 upload_label">
								<label>用途</label>
							     <el-input  type="textarea" :rows="2" placeholder="请输入内容" style="width: 400px" v-model="textarea3" :maxlength="20"></el-input>
							</div>
						</el-col>
					</el-row>

					<el-button size="small" @click="">提交</el-button>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>

	export default{
		name:"integralQuery",
		data(){
			return{
				textarea:"",
				textarea2:"",
				textarea3:"",
			}
			
		},
		methods:{
		    changeMethod(event){
		    	console.log(event)
		    },
		}
	}
</script>
<style scoped>
  .upload_label{
  	display: flex;
  	margin-bottom: 20px;
  }
  .upload_label1{
  	align-items: center;
  }
  .upload_label >*{
  	margin-right: 20px;
  }
  .upload_label >label{
  	margin-right: 20px;
  }
  .table{
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
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