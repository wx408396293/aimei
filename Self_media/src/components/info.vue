<template>
	<div class="main">
		<el-row >
		  	<el-col :span="24">
			  	<div class="header">
			  		<div>公司Logo</div>
			  		<div class="user" @mouseover.stop="drop_down">
			  			<img :src="avatarUrl" height="32" width="32" alt="">
			  			<span>{{userName}}</span>
			  		</div>
			  		<div :class="{userDetails:users.userDetails, userDetailsDisplay:users.userDetailsDisplay}" @mouseleave.stop.prevent="drop_downtrue" >
		  				<p><i class="lock"></i>修改密码</p>
		  				<p><i class="close"></i>退出</p>
			  		</div>
			  	</div>
		  	</el-col>
		</el-row>
		<el-row :gutter="0" class="main_centert" >
		  	<el-col :span="4"  class="overflow">
			  	<div class="Left">
			  		<el-menu :default-active="$route.name" class="el-menu-vertical-demo nav" unique-opened @select="handleSelect">
			  			<el-submenu index="0">
				        	<template slot="title"><i class="el-icon-setting"></i>自媒体</template>
				        	<el-menu-item index="0-1" >发布作品</el-menu-item>
				        	<el-menu-item index="0-2" >发布专题</el-menu-item>
				            <el-menu-item index="0-3">专题列表</el-menu-item>
				        </el-submenu>
				    </el-menu>
			  	</div>
		  	</el-col>
			<el-col :span="20" class="overflow"><div class="right">
				<router-view ></router-view>
			</div></el-col>
		</el-row>
	</div>
	
</template>
<script>
	import router from "../router/index.js"
	import {mapMutations} from "vuex"
	export default{
		created(){
			this.userName = localStorage.userName
			this.avatarUrl = localStorage.avatarUrl
		},
		name:"info",
		data(){
			return{
				avatarUrl:"",
				//用户名
				userName:"",
				users:{
					userDetails:true,
					userDetailsDisplay:true
				},
			}
		},
		methods:{
			drop_down(){
				this.users.userDetailsDisplay = false
			},
			drop_downtrue(){
				this.users.userDetailsDisplay = true
			},
			handleSelect(key){
				switch(key) {
					case "0-1":
						router.push("/operationManagement/PublishWorks")
						break;
					case "0-2":
						router.push("/operationManagement/createSpecial")
						break;
					case "0-3":
						router.push("/operationManagement/specialList")
						break;
				}
			},
		},
	}
</script>
<style >
	.el-menu-item.is-active {
	    color: #57c56b;
	}
	.el-menu {
	    background-color: #fffeff ;
	}
	.el-submenu .el-menu {
	    background-color: #f3f1f3;
	}
/* 	.el-menu {
	    background-color: #f3f1f3;
	} */
	.overflow{
		height: calc(100% - 40px);
		overflow: auto;
		padding-bottom: 20px;
	}
	.main{
		height: 100%;
    	width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.main_centert{
		flex-grow: 1;
		height: 100%;
		margin-top: 14px;

	}
	.Left, .right{
		margin-left: 15px;
		background-color: #fff;
		border-radius: 6px;

	}
	.right{
		height: auto;
		margin-right: 15px;
		padding-left: 20px;
		margin-bottom: 20px;
	}
	.user{
		display: flex;
		align-items: center;
		position: relative;
		height: 44px;
		width: auto;
		background-color: #fff;
		border-radius: 22px;
		cursor: pointer;
	}
	.user:hover{
		background-color: #e7e5e7;
	}
	.user > img{
		height: 40px;
		width: 40px;
		border-radius: 50%;
		padding:0 10px 0 6px;
	}
	.user >span{
		font-size: 14px;
		padding-right: 10px;
	}
	.nav{
		border-radius: 6px;
		overflow:hidden
	}
	.userDetails{
		position: absolute;
		top: 60px;
		right: 34px;
		background-color: #fff;
		z-index: 2;
		margin-top: 24px;
		height: 88px;width: 160px;
		opacity: 1;
		border-radius: 8px;
		box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.2);
	}
	.userDetailsDisplay{
		display: none;
		opacity: 0;
	}
	.mains{
		border-radius: 10px;
	}
	.userDetails p{
		padding: 0;
		margin: 0;
		height: 44px;
		line-height: 44px;
		text-align: center;
		cursor: pointer;
		display: flex;align-items: center;
	}
	.userDetails p:first-child{
		border-bottom: 1px solid #e6e6e6;
	}
	.lock{
		display: inline-block;
	    width: 18px;
	    height: 18px;
	    margin-right: 22px;
	    margin-left: 30px;
		background: url('../assets/lock.png') no-repeat center;
	}
	.close{
		display: inline-block;
	    width: 18px;
	    height: 18px;
	    margin-right: 22px;
	    margin-left: 30px;
		background: url('../assets/Close.png') no-repeat center;
	}
	.userDetails p:hover{
		background-color: #e7e5e7;
	}

	.header{
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 60px 0 30px;
		background-color: #fffeff ;
	}
</style>