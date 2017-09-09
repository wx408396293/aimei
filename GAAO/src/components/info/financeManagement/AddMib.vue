<template>
	<el-row>
		<el-col :span="24">
			<p class="jisp">创建咪币套餐</p>	
	    	<div class="div">
				<div class="maine">
					<label>咪币数量</label>
					<el-input v-model="formList.input1" class="b" placeholder="请输入内容"></el-input>
				</div>
				<div class="maine">
					<label>售价</label>
					<el-input v-model="formList.input2" class="b" placeholder="请输入内容"></el-input>
				</div>
				<div class="maine">
					<label>折后售价</label>
					<el-input v-model="formList.input3" class="b" placeholder="请输入内容"></el-input>
					<label>(普通用户)</label>
					<el-input v-model="formList.input4" class="b" placeholder="请输入内容"></el-input>
					<label>(黄金用户)</label>
					<el-input v-model="formList.input5" class="b" placeholder="请输入内容"></el-input>
					<label>(钻石用户)</label>
					<el-input v-model="formList.input6" class="b" placeholder="请输入内容"></el-input>
					<label>(至尊用户)</label>
					<el-input v-model="formList.input7" class="b" placeholder="请输入内容"></el-input>
				</div>
				<div class="maine">
					<label>生效时间</label>
					<el-date-picker
				      v-model="formList.value1"
				      type="date"
				      placeholder="选择日期"
				      :picker-options="pickerOptions0">
				    </el-date-picker>
				    <label>至</label>
				    <el-date-picker
				      v-model="formList.value2"
				      type="date"
				      placeholder="选择日期"
				      :picker-options="pickerOptions0">
				    </el-date-picker>
				</div>
				<el-button type="primary" class="button"  @click="">提 交</el-button>
				<el-button class="button"  @click="">取 消</el-button>
			</div>	
		</el-col>
	</el-row>
</template>
<script>
	export default{
		name:"selectedList",
		data(){
			return{
				input:"",
				formList:{
					input1:"",
					input2:"",
					input3:"",
					input4:"",
					input5:"",
					input6:"",
					input7:"",
					value1:"",
					value2:"",
				},
				//时间
		         pickerOptions0: {
		          disabledDate(time) {
		            return time.getTime() < Date.now() - 8.64e7;
		          }
		        },
			}
			
		},
		methods:{
			formLists(){
				console.log(formList)
			}
		}
	}
</script>
<style scoped>
	.maine{
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
	.maine> *{
		margin-right: 20px;
	}
	.b{
		width: 150px;
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

