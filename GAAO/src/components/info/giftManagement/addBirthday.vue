<!-- 创建礼物 -->
<template>
	<div>
		<p class="jisp">创建生日礼物</p>	
	    <div class="div">
			<el-row>
				<el-col :span="24">
					<el-row>
						<el-col :span="24">
							<div class="upload_label1 upload_label">
								<label>礼物类型</label>
								<el-select v-model="input" slot="prepend" placeholder="类型" style="width: 100px" size="small" @change="changeMethod($event)">
							        <el-option label="积分" value="积分"></el-option>
							        <el-option label="礼物" value="礼物"></el-option>
							        <el-option label="优惠券" value="优惠券"></el-option>
							    </el-select>
							</div>
							<div class="upload_label1 upload_label">
								<label>礼物种类</label>
								<el-select v-model="typeName" slot="prepend" disabled placeholder="类型" style="width: 100px" size="small" @change="changeMethod($event)">
							        <el-option label="专题" value="专题"></el-option>
							    </el-select>
							</div>
							<div class="upload_label1 upload_label">
								<label>礼物数量</label>
							    <el-input v-model="quantity" placeholder="请输入内容" size="small" style="width:180px;"></el-input>
							</div>
							<div class="upload_label1 upload_label">
								<label>适用人群</label>
							    <el-select v-model="crowd" slot="prepend" placeholder="类型" style="width: 100px" size="small" @change="changeMethod($event)">
							        <el-option label="全部" value="全部"></el-option>
							        <el-option label="普通" value="普通"></el-option>
							        <el-option label="艺人" value="艺人"></el-option>
							    </el-select>
							</div>
						</el-col>
					</el-row>

					<el-button size="small" @click="">提交</el-button>
					<el-button size="small" @click="">取消</el-button>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script> 

	export default{
		name:"addBirthday",	
		data(){
			return{
				input:"",
				typeName:"",
				quantity:"",
				crowd :""
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