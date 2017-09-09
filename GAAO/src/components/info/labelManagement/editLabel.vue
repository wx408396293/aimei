<!--标签列表 -->
<template>
	<el-row>
		<el-col :span="24">
			<p class="jisp">修改标签</p>	
			<div class="forms div">
				<div>
					<label >标签名：</label>
					<el-input v-model="form.name" placeholder="请输入内容" :disabled="true" style="width: 300px"></el-input>
				</div>
				<div class="formst">
					<label >描述：</label>
					<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.content" style="width: 300px"> </el-input>
				</div>
				<div class="formsts">
					<el-button type="primary" @click="getForm">修改</el-button>
					<el-button type="danger" @click="reset">取消</el-button>
				</div>
			</div>
		</el-col>
	</el-row>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import {ADDLABEL} from "../../../store/labelmanagement/labelList.js"
	export default{
		naem:"editLabel",
		created(){
			this.form.name = this.recommend_list.name
			this.form.content = this.recommend_list.content
		},
		data(){
			return{
				form:{
					name:"",
					content:""
				}
			}
		},
		computed:{
	    	...mapState("labelList",["recommend_list"])
	    },
		methods:{
			...mapActions("labelList",["GETLABEL"]),
			...mapMutations("labelList",["setRecommend"]),
			reset(){
				this.setRecommend()
			} ,
			getForm(){
				this.setRecommend()
				this.GETLABEL(this.form)
			}
		}
	}
</script>
<style scoped>
	.forms{
		width: 400px;
		display: flex;
		flex-direction: column;
	}
	.formst{
		display: flex;
		align-items:flex-start; 
	}
	.formsts{
		text-align: center;
	}
	label{
		display: inline-block;
		width: 80px;
		text-align: right;
	}
	div{
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