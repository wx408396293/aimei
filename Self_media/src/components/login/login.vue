<template>
	<div id="maix">
		<header>
			公司Logo
		</header>
		<div class="mingst">
			<div class="maive">
				<div class="diest">
					<el-input placeholder="请输入手机号码" :maxlength= 11 v-model="PhoneNumber" @blur="blurs">
					    <template slot="prepend" >手机号</template>
					</el-input>
					<el-button @click="" @click="VerificationButton" type="primary">发送验证码</el-button>
				</div>
				<div>
					<el-input type="text" placeholder="请输入验证码" :maxlength= 16 v-model="smsCode">
					    <template slot="prepend">验证码</template>
					</el-input>	
				</div>
				<div class="denglu">
					<el-button @click="loginst" type="primary">登录</el-button>
					<el-button @click="" type="primary">取消</el-button>
				</div>
			</div>
		</div>
		<footer>
			公司信息
		</footer>
	</div>
	
</template>
<script>
	// import router from "../../router/index.js"
	import {mapMutations,mapActions} from "vuex"
	// import {LOGIN} from "../../store/login/login.js"
	export default {
		name:"login",
		data(){
			return{
				"PhoneNumber":"",
				"smsCode":"",
				button:false
			}
		},
		methods:{
			
			blurs(){
				if(/^(((13[4-9])|147|(15[0-27-9])|178|(18[2-47-8]))[0-9]{8})|((170[356])[0-9]{7})|(((13[0-2])|145|(15[56])|(18[56])|17[16])[0-9]{8})|((170[4789])[0-9]{7})|((133|153|(18[019])|177)[0-9]{8})|((170[0-2])[0-9]{7})$/.test(this.PhoneNumber) === false){
					this.$message({
			            showClose: true,
			            message: '请输入正确的电话号码',
			            type: 'warning'
			        });
			        this.button = false
				}else {
					 this.button = true
				}
			},
			VerificationButton(){
				if (this.button) {
					this.VURIFICATION(this.PhoneNumber)
				}else {
					this.$message({
			            showClose: true,
			            message: '请输入正确的电话号码',
			            type: 'warning'
			        });
				}
			},
			loginst(){
				if (this.PhoneNumber ==="") {
					this.$message({
			            showClose: true,
			            message: '请输入电话号码',
			            type: 'warning'
			        });
			        return
				}
				if (this.smsCode ==="") {
					this.$message({
			            showClose: true,
			            message: '请输入验证码',
			            type: 'warning'
			        });
			        return
				}
				this.LOGIN({
					PhoneNumber:this.PhoneNumber,
					smsCode:this.smsCode,
					// smsCode:parseInt(this.smsCode),
				})
			},
			...mapActions("login",["VURIFICATION","LOGIN"]),
		}	
	}

</script>
<style scoped>
	.diest{
		display: flex;
	}
	.diest .jiset{
		margin-left: 20px;
	}
	#maix{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		min-height: 100vh;
	}
	header, footer{
		width: 100%;
		height: 80px;
		background-color: #e9ecf3;
		line-height: 80px;
		text-align: center;
	}
	.mingst{
		width: 400px;
		display: flex;
		flex-wrap: wrap;
		/* justify-content: center; */
		flex-direction:  row;
		align-items: center;
	}
	.maive{
		width: 260px;
		display: flex;
		flex-direction: column;
		/* flex-wrap: wrap; */
		justify-content: center;
		/* flex-direction:  row; */
		/* align-items: center; */

	}
	.denglu{
		display: flex;
		justify-content: center;
	}
	.maive >div{
		margin-bottom: 10px;
	}
</style>