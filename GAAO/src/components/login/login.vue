<template>
	<div id="maix">
		<div class="signin ">
			<div class="signins">
				<img src="../../assets/LOGO.png" height="70" width="70" alt="">
				<p>咪哒运营后台</p>
				<div class="loginname" id="userName" >
					<div class="personal">
						<img src="../../assets/personal.png" height="16" width="16" alt="">
					</div>
					<input type="text" name="userName" maxlength="16" @focus="userNamefocus" @blur="userNameblur" @keyup="userNamefocus" v-model="username" placeholder="账户">
					<div class="personals">
						<img class="img1" id="img1"  src="../../assets/mark.png" height="20" width="20" alt="">
					</div>
				</div>
				<div class="loginname" id="password">
					<div class="personal">
						<img src="../../assets/locks.png" height="16" width="16" alt="">
					</div>
					<input type="password" name="password" maxlength="16"  @focus="passwordfocus" @blur="passwordNameblur" @keyup="passwordfocus" v-model="password"  placeholder="密码">
					<div class="personals">
						<img class="img2" id="img2" src="../../assets/mark.png" height="20" width="20" alt="">
					</div>
				</div>
				<button type="" @click="loginst" id="button" disabled = "true"  @mouseover.stop="colours" @mouseout="setColours" class="button">登录</button>
			</div>
			
		</div>
	</div>
	
</template>
<script>
	import router from "../../router/index.js"
	import {mapMutations,mapActions, mapState} from "vuex"
	import {LOGIN} from "../../store/login/login.js"
	export default {
		name:"login",
		computed:{
	      ...mapState("login",["warning"])
	    },
		data(){
			return{
				username:"",
				password:"",
			}
		},
		methods:{
			colors(){
				let button  = document.getElementById("button")
				if (this.username !== "" && this.password !== "") {
					button.disabled =false
					button.style.backgroundColor = '#56c66b'
				}else {
					button.disabled =true
					button.style.backgroundColor =  '#ace2b7'
				}
			},
			userNamefocus(){
				let inputuserName  = document.getElementById("userName")
				inputuserName.style.borderColor = ' #82d192';
				let img1 = document.getElementById("img1")
				img1.style.display = 'none'
				this.colors()

			},
			userNameblur(){
				let inputuserName  = document.getElementById("userName")
				inputuserName.style.borderColor = ' transparent';
				this.colors()
				
			},
			passwordfocus(){
				let inputpassword  = document.getElementById("password")
				inputpassword.style.borderColor = ' #82d192';
				let img1 = document.getElementById("img2")
				img1.style.display = 'none'
				this.colors()

			},
			passwordNameblur(){
				let inputpassword  = document.getElementById("password")
				inputpassword.style.borderColor = ' transparent';
				this.colors()
			},
			colours(){
				let button  = document.getElementById("button")
				button.style.backgroundColor =  '#459e57'
			},
			setColours(){
				let button  = document.getElementById("button")
				button.style.backgroundColor =  '#56c66b'
			},
			loginst(){
				if (this.username !=="") {
					if (this.password !== "") {
						this.LOGIN({
							username:this.username,
							password:this.password})
						}else {
							this.$message({
					          showClose: true,
					          message: '密码不能为空',
					          type: 'warning'
					        });
						}
				}else {
					let inputuserName  = document.getElementById("userName")
					inputuserName.style.borderColor = ' red'
					this.$message({
			          showClose: true,
			          message: '账号不能为空',
			          type: 'warning'
			        });
				}
			},

			// cancel(){
			// 	this.username="",
			// 	this.password=""
			// },
			...mapActions("login",["LOGIN"]),
		}	
	}

</script>
<style scoped>
	#maix{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		height: 100%;


	}
	.signin{
		width: 470px;
		height: 544px;
		background-color: #fff;
		box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.2);
		border-radius: 10px;
	}
	.signins{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: auto;
		margin: 68px;
	}
	.signins >img{
		height: 80px;
		width: 80px;
		border-radius: 50%;
	}
	.signins >p{
		width: 100%;
		font-size: 20px;
		font-family:微软雅黑;
		margin: 20px 0 50px;
		color: #353535;
		text-align: center;
		letter-spacing: 1px; 
	}
	.loginname{
		margin-bottom: 15px;
		height: 52px;
		width: 344px;
		/* border: 2px solid transparent; */
		border: 2px solid;
		border-color: transparent;
		/* border-color:  #82d192; */
		border-radius: 10px;
		display: flex;flex-direction: row;
		align-items: center;
		background-color: #f3f3f3
	}
	.button{
		height: 52px;
		width: 344px;
		/* background-color: #56c66b; */
		background-color: #ace2b7;
		border: none;
		outline: none;
		border-radius: 10px;
		color: #fff;
		font-size: 20px;
		margin-top: 42px;
		cursor: pointer;
	}
	.personal{
		padding: 5px 0; 
		width: 64px;
		border-right: 1px solid #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.personals{
		padding: 10px 0; 
		/* width: 64px; */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.personal >img, .personals >img{
		height: 20px;
		width: 20px;
	}
	.img1, .img2{
		display: none;
	}
	.loginname >input{
		height: 46px;
		width: 250px;
		font-size: 18px;
		border-style: none;
		background-color: #f3f3f3;
		text-indent: 1em;
		outline: none;
		color: #b2b2b2;
	/* 	word-spacing: 6px; */
		/* letter-spacing: 2px;  */
	}
</style>