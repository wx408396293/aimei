<template>
	<div class="mains">
		<el-row >
		  	<el-col :span="24">
			  	<div class="header">
			  		<div class="logo">
			  			<div class="logos">
			  				<img src="../../assets/LOGO.png" alt="">
			  			</div>
			  			<p>咪哒运营后台</p>
			  		</div>
			  		<div class="user" @mouseover.stop="drop_down">
			  			<img src="../../assets/logo_03.png" height="32" width="32" alt="">
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
			  		<el-menu :default-active="$route.name" class="el-menu-vertical-demo nav" unique-opened  @select="handleSelect">
			  			<el-submenu index="0" v-if="this.LevelMenu.levelMenu0">
				        	<template slot="title">
				        	<i class=" icon"><img src="../../assets/account.png"></i>账户管理
				        	</template>
				        	<el-menu-item index="0-1" v-if="this.Roles.Roles0" style="line-height: 70px">创建账户</el-menu-item>
				            <el-menu-item index="0-2" v-if="this.Roles.Roles0" style="line-height: 70px" >编辑账户</el-menu-item>
				        </el-submenu>
				        <el-submenu index="1" v-if="this.LevelMenu.levelMenu1">
				        	<template slot="title"><i class=" icon"><img src="../../assets/users.png"></i>用户管理</template>
				            <el-menu-item index="1-1" v-if="this.Roles.Roles1" style="line-height: 70px">用户列表</el-menu-item>
				            <el-menu-item index="1-2" v-if="this.Roles.Roles2" style="line-height: 70px">封号列表</el-menu-item>
				            <el-menu-item index="1-3" v-if="this.Roles.Roles3" style="line-height: 70px">自媒体艺人</el-menu-item>
				            <el-menu-item index="1-4" v-if="this.Roles.Roles4" style="line-height: 70px">好友关系表</el-menu-item>
				            <el-menu-item index="1-5" v-if="this.Roles.Roles5" style="line-height: 70px">资产表</el-menu-item>
				        </el-submenu>
				        <el-submenu index="2" v-if="this.LevelMenu.levelMenu2">
							<template slot="title"><i class=" icon"><img src="../../assets/works.png"></i>作品管理</template>
							<el-menu-item index="2-1" v-if="this.Roles.Roles6" style="line-height: 70px">作品列表</el-menu-item>
				            <el-menu-item index="2-2" v-if="this.Roles.Roles7" style="line-height: 70px">精选池</el-menu-item>
				            <el-menu-item index="2-3" v-if="this.Roles.Roles8" style="line-height: 70px">专题池</el-menu-item>
				            <el-menu-item index="2-4" v-if="this.Roles.Roles9" style="line-height: 70px">滤镜表</el-menu-item>
				            <el-menu-item index="2-5" v-if="this.Roles.Roles10" style="line-height: 70px">贴纸表</el-menu-item>
				            <el-menu-item index="2-6" v-if="this.Roles.Roles11" style="line-height: 70px">字体表</el-menu-item>
				        </el-submenu>
				        <el-submenu index="3" v-if="this.LevelMenu.levelMenu3">
				        	<template slot="title"><i class=" icon"><img src="../../assets/material.png"></i>音频素材管理</template>
				        	<el-menu-item index="3-1" v-if="this.Roles.Roles12" style="line-height: 70px">音频素材列表</el-menu-item>
				        </el-submenu>
				        <el-submenu index="4" v-if="this.LevelMenu.levelMenu4">
				        	<template slot="title"><i class=" icon"><img src="../../assets/label.png"></i>标签管理</template>
				        	<el-menu-item index="4-1" v-if="this.Roles.Roles13" style="line-height: 70px">标签列表</el-menu-item>
				            <el-menu-item index="4-2" v-if="this.Roles.Roles14" style="line-height: 70px">创建标签</el-menu-item>
				        </el-submenu>
				         <el-submenu index="5" v-if="this.LevelMenu.levelMenu5">
				        	<template slot="title"><i class=" icon"><img src="../../assets/operate.png"></i>运营管理</template>
				        	<el-menu-item index="5-1" v-if="this.Roles.Roles15" style="line-height: 70px">专题列表</el-menu-item>
				            <el-menu-item index="5-2" v-if="this.Roles.Roles16" style="line-height: 70px">创建专题</el-menu-item>
				            <el-menu-item index="5-3" v-if="this.Roles.Roles17" style="line-height: 70px">精选列表</el-menu-item>
				            <el-menu-item index="5-4" v-if="this.Roles.Roles18" style="line-height: 70px">创建精选</el-menu-item>
				            <el-menu-item index="5-5" v-if="this.Roles.Roles19" style="line-height: 70px">流行榜列表</el-menu-item>
				            <el-menu-item index="5-6" v-if="this.Roles.Roles20" style="line-height: 70px">艺人榜列表</el-menu-item>
				            <el-menu-item index="5-7" v-if="this.Roles.Roles21" style="line-height: 70px">Banner列表</el-menu-item>
				        </el-submenu>
				        <el-submenu index="6" v-if="this.LevelMenu.levelMenu6">
				        	<template slot="title"><i class=" icon"><img src="../../assets/gift.png"></i>礼物管理</template>
				        	<el-menu-item index="6-1" v-if="this.Roles.Roles22" style="line-height: 70px">礼物列表</el-menu-item>
				            <el-menu-item index="6-2" v-if="this.Roles.Roles23" style="line-height: 70px">创建礼物</el-menu-item>
				            <el-menu-item index="6-3" v-if="this.Roles.Roles24" style="line-height: 70px">生日礼物列表</el-menu-item>
				            <el-menu-item index="6-4" v-if="this.Roles.Roles25" style="line-height: 70px">创建生日礼物</el-menu-item>
				            <el-menu-item index="6-5" v-if="this.Roles.Roles26" style="line-height: 70px">积分查询</el-menu-item>
				            <el-menu-item index="6-6" v-if="this.Roles.Roles27" style="line-height: 70px">积分兑换优惠卷</el-menu-item>
				            <el-menu-item index="6-7" v-if="this.Roles.Roles28" style="line-height: 70px">积分说明描述</el-menu-item>
				        </el-submenu>
				        <el-submenu index="7" v-if="this.LevelMenu.levelMenu7">
				       		<template slot="title"><i class=" icon"><img src="../../assets/consumption.png"></i>充值消费管理</template>
				       		<el-menu-item index="7-1" v-if="this.Roles.Roles29" style="line-height: 70px">充值列表</el-menu-item>
				            <el-menu-item index="7-2" v-if="this.Roles.Roles30" style="line-height: 70px">消费列表</el-menu-item>
				            <el-menu-item index="7-3" v-if="this.Roles.Roles31" style="line-height: 70px">咪币套餐列表</el-menu-item>
				            <el-menu-item index="7-4" v-if="this.Roles.Roles32" style="line-height: 70px">创建咪币套餐</el-menu-item>
				        </el-submenu>
				         <el-submenu index="8" v-if="this.LevelMenu.levelMenu8">
				        	<template slot="title"><i class=" icon"><img src="../../assets/artist.png"></i>艺人管理</template>
				        	<el-menu-item index="8-1" v-if="this.Roles.Roles33" style="line-height: 70px">待审核艺人列表</el-menu-item>
				            <el-menu-item index="8-2" v-if="this.Roles.Roles34" style="line-height: 70px">已审核艺人列表</el-menu-item>
				            <el-menu-item index="8-3" v-if="this.Roles.Roles39" style="line-height: 70px">待审核机构列表</el-menu-item>
				            <el-menu-item index="8-4" v-if="this.Roles.Roles40" style="line-height: 70px">已审核机构列表</el-menu-item>
				        </el-submenu>
				        <el-submenu index="9" v-if="this.LevelMenu.levelMenu9">
				        	<template slot="title"><i class=" icon"><img src="../../assets/notice.png"></i>系统通知公告</template>
				        	<el-menu-item index="9-1" v-if="this.Roles.Roles35" style="line-height: 70px">通知列表</el-menu-item>
				        	<el-menu-item index="9-2" v-if="this.Roles.Roles36" style="line-height: 70px">创建通知</el-menu-item>
				        </el-submenu>
				        
				        <el-submenu index="10" v-if="this.LevelMenu.levelMenu10">
				        	<template slot="title"><i class=" icon"><img src="../../assets/feedback.png"></i>反馈与举报</template>
				        	<el-menu-item index="10-1" v-if="this.Roles.Roles37" style="line-height: 70px">反馈列表</el-menu-item>
				            <el-menu-item index="10-2" v-if="this.Roles.Roles38" style="line-height: 70px">举报列表</el-menu-item>
				        </el-submenu>
				       
				       
				    </el-menu>
			  	</div>
		  	</el-col>
			<el-col :span="20" class="overflow">
			<div class="right">
				<router-view class="rights" ></router-view>
			</div></el-col>
		</el-row>
	</div>
	
</template>
<script>
	import router from "../../router/index.js"
	import {mapMutations} from "vuex"
	export default{
		created(){
			// console.log(JSON.parse(localStorage.getItem("UserRoles")))
			// console.log(localStorage)
			this.userName = localStorage.userName
			var UserRoles =[]
			JSON.parse(localStorage.getItem("UserRoles")).forEach((item) => {	
				if (item.path == "0") this.Roles.Roles0 = true
				else if(item.path === "1-1") this.Roles.Roles1 = true 
				else if(item.path === "1-2") this.Roles.Roles2 = true
				else if(item.path === "1-3") this.Roles.Roles3 = true
				else if(item.path === "1-4") this.Roles.Roles4 = true
				else if(item.path === "1-5") this.Roles.Roles5 = true
				else if(item.path === "2-1") this.Roles.Roles6 = true
				else if(item.path === "2-2") this.Roles.Roles7 = true
				else if(item.path === "2-3") this.Roles.Roles8 = true
				else if(item.path === "2-4") this.Roles.Roles9 = true
				else if(item.path === "2-5") this.Roles.Roles10 = true
				else if(item.path === "2-6") this.Roles.Roles11 = true
				else if(item.path === "3-1") this.Roles.Roles12 = true
				else if(item.path === "4-1") this.Roles.Roles13 = true
				else if(item.path === "4-2") this.Roles.Roles14 = true
				else if(item.path === "5-1") this.Roles.Roles15 = true
				else if(item.path === "5-2") this.Roles.Roles16 = true
				else if(item.path === "5-3") this.Roles.Roles17 = true
				else if(item.path === "5-4") this.Roles.Roles18 = true
				else if(item.path === "5-5") this.Roles.Roles19 = true
				else if(item.path === "5-6") this.Roles.Roles20 = true
				else if(item.path === "5-7") this.Roles.Roles21 = true
				else if(item.path === "6-1") this.Roles.Roles22 = true
				else if(item.path === "6-2") this.Roles.Roles23 = true
				else if(item.path === "6-3") this.Roles.Roles24 = true
				else if(item.path === "6-4") this.Roles.Roles25 = true
				else if(item.path === "6-5") this.Roles.Roles26 = true
				else if(item.path === "6-6") this.Roles.Roles27 = true
				else if(item.path === "6-7") this.Roles.Roles28 = true
				else if(item.path === "7-1") this.Roles.Roles29 = true
				else if(item.path === "7-2") this.Roles.Roles30 = true
				else if(item.path === "7-3") this.Roles.Roles31 = true
				else if(item.path === "7-4") this.Roles.Roles32 = true
				else if(item.path === "8-1") this.Roles.Roles33 = true
				else if(item.path === "8-2") this.Roles.Roles34 = true
				else if(item.path === "9-1") this.Roles.Roles35 = true
				else if(item.path === "9-2") this.Roles.Roles36 = true
				else if(item.path === "10-1") this.Roles.Roles37 = true
				else if(item.path === "10-2") this.Roles.Roles38 = true
				else if(item.path === "8-3") this.Roles.Roles39 = true
				else if(item.path === "8-4") this.Roles.Roles40 = true
				else {return}
				
			});
			if (this.Roles.Roles0 === true) {this.LevelMenu.levelMenu0 = true}
			if (this.Roles.Roles1 === true || this.Roles.Roles2 === true || this.Roles.Roles3 === true || this.Roles.Roles4 === true || this.Roles.Roles5=== true) {this.LevelMenu.levelMenu1 = true}
			if (this.Roles.Roles6 === true || this.Roles.Roles7 === true || this.Roles.Roles8 === true || this.Roles.Roles9 === true || this.Roles.Roles10=== true || this.Roles.Roles11=== true) {this.LevelMenu.levelMenu2 = true}
			if (this.Roles.Roles12 === true) {this.LevelMenu.levelMenu3 = true}
			if (this.Roles.Roles13 === true || this.Roles.Roles14 === true) {this.LevelMenu.levelMenu4 = true}
			if (this.Roles.Roles15 === true || this.Roles.Roles16 === true || this.Roles.Roles17 === true || this.Roles.Roles18 === true || this.Roles.Roles19 === true || this.Roles.Roles20=== true || this.Roles.Roles21=== true) {this.LevelMenu.levelMenu5 = true}
			if (this.Roles.Roles22 === true || this.Roles.Roles23 === true || this.Roles.Roles24 === true || this.Roles.Roles25 === true || this.Roles.Roles26 === true || this.Roles.Roles27=== true || this.Roles.Roles28=== true) {this.LevelMenu.levelMenu6 = true}
			if (this.Roles.Roles29 === true || this.Roles.Roles30 === true || this.Roles.Roles31 === true || this.Roles.Roles32 === true) {this.LevelMenu.levelMenu7 = true}
			if (this.Roles.Roles33 === true || this.Roles.Roles34 === true || this.Roles.Roles39 === true || this.Roles.Roles40 === true) {this.LevelMenu.levelMenu8 = true}
			if (this.Roles.Roles35 === true || this.Roles.Roles36 === true) {this.LevelMenu.levelMenu9 = true}	
			if (this.Roles.Roles37 === true || this.Roles.Roles38 === true) {this.LevelMenu.levelMenu10 = true}
		},
		name:"info",
		data(){
				var roles = {}
				var levelMenu = {} 
				for (let i = 0; i <= 40; i++) {
					roles[`Roles${i}`] = false
				}
				for (let j = 0; j < 12; j++) {
					levelMenu[`levelMenu${j}`] = false
				}
			return{
				//用户名
				userName:"",
				//权限
				Roles: roles,
				//一级菜单
				LevelMenu: levelMenu,
				//首页加载项目
				activeIndex: '',
				users:{
					userDetails:true,
					userDetailsDisplay:true
				},
			}
		},
		methods:{
			...mapMutations("account",["setGATTACCOUNT"]),
			drop_down(){
				this.users.userDetailsDisplay = false
			},
			drop_downtrue(){
				this.users.userDetailsDisplay = true
			},
			handleSelect(key){
				switch(key) {
					case "0-1":
						router.push("/info/account/addAccount")
						break;
					case "0-2":
					this.setGATTACCOUNT()
						router.push("/info/account/accountList")
						break;
					case "1-1":
						router.push("/info/userManagement/userList")
						break;
					case "1-2":
						router.push("/info/userManagement/titleList")
						break;
					case "1-3":
						router.push("/info/userManagement/selfMedia")
						break;
					case "1-4":
						router.push("/info/userManagement/friendRelationship")
						break;
					case "1-5":
						router.push("/info/userManagement/assetQuery")
						break;
					case "2-1":
						router.push("/info/worksManagement/worksList")
						break;
					case "2-2":
						router.push("/info/worksManagement/worksSelected")
						break;
					case "2-3":
						router.push("/info/worksManagement/worksSpecial")
						break;
					case "2-4":
						router.push("/info/worksManagement/filterList")
						break;
					case "2-5":
						router.push("/info/worksManagement/stickerList")
						break;
					case "2-6":
						router.push("/info/worksManagement/typefaceList")
						break;
					case "3-1":
						router.push("/info/audioMaterial/audioMaterial")
						break;
					case "4-1":
						router.push("/info/labelManagement/labelManagementList")
						break;
					case "4-2":
						router.push("/info/labelManagement/addLablManagement")
						break;
					case "5-1":
						router.push("/info/operationManagement/specialList")
						break;
					case "5-2":
						router.push("/info/operationManagement/createSpecial")
						break;
					case "5-3":
						router.push("/info/operationManagement/selectedList")
						break;
					case "5-4":
						router.push("/info/operationManagement/addSelected")
						break;
					case "5-5":
						router.push("/info/operationManagement/popLists")
						break;
					case "5-6":
						router.push("/info/operationManagement/ArtistList")
						break;
					case "5-7":
						router.push("/info/operationManagement/BannerList")
						break;
					case "6-1":
						router.push("/info/giftManagement/giftList")
						break;
					case "6-2":
						router.push("/info/giftManagement/addGift")
						break;
					case "6-3":
						router.push("/info/giftManagement/birthdayGiftList")
						break;
					case "6-4":
						router.push("/info/giftManagement/addBirthday")
						break;
					case "6-5":
						router.push("/info/giftManagement/integralQuery")
						break;
					case "6-6":
						router.push("/info/giftManagement/coupon")
						break;
					case "6-7":
						router.push("/info/giftManagement/integralDescribe")
						break;
					case "7-1":
						router.push("/info/financeManagement/rechargeQuery")
						break;
					case "7-2":
						router.push("/info/financeManagement/consumeQuery")
						break;
					case "7-3":
						router.push("/info/financeManagement/MibPackage")
						break;
					case "7-4":
						router.push("/info/financeManagement/AddMib")
						break;
					case "8-1":
						router.push("/info/artistManagement/pendingAudit")
						break;
					case "8-2":
						router.push("/info/artistManagement/auditedList")
						break;
					case "8-3":
						router.push("/info/artistManagement/Auditmechanism")
						break;
					case "8-4":
						router.push("/info/artistManagement/Auditedmechanism")
						break;
					case "9-1":
						router.push("/info/systemNotification/notificationList")
						break;
					case "9-2":
						router.push("/info/systemNotification/addnotification")
						break;
					case "10-1":
						router.push("/info/Reportandfeedback/feedbackList")
						break;
					case "10-2":
						router.push("/info/Reportandfeedback/reporlist")
						break;
				}
			},
		},
		// beforeUpdate:function(){
  //       	console.log(this.$route)
  //               this.activeIndex=this.$route.name
  //       }
        
	}
</script>
<style >

	.el-menu-item.is-active {
	    color: #57c56b !important;

	}
	.el-submenu__title{
		display: flex !important;align-items: center !important;
		color: #797979 !important;
	}
	.el-submenu .el-menu {
	    background-color: #f3f1f3 !important;
	}
	.el-menu{
		background-color: #fff !important;
	}
	.el-submenu [class^=el-icon-]{
		margin-right: 20px !important;
	}
	.overflow{
		overflow:hidden !important;
		height: 100% !important;
	}
	.el-menu-item{
		color: #888 !important;
	}
	.el-menu-item,.el-submenu__title{
		font-size: 18px !important;
		height: 70px !important;
	}
	.mains{
		height: 100%;
    	width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.main_centert{
		flex-grow: 1;
		height: calc(100% - 114px);
		margin-top: 14px;
	}
	.icon{
		display:flex;
		align-items: center;
		justify-content: center;
		height: 20px;
		width: 20px;
		padding-left: 10px;
		margin-right: 20px;

	}
	.icon >img{
		max-width: 20px;
		max-height: 20px;
	}
	.header{
		background-color: #e9ecf3;
		height: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 34px 0 0px;
		background-color: #fffeff ;
		
	}
	.logo{
		display: flex;align-items: center;
	}
	.logo >p{
		letter-spacing: 1px;
		color: #353535;
		margin-left: 14px;
		font-size: 20px;
		color: #009900
	}
	.logos{
		height: 100px;
		width: 147px;
		background: url('../../assets/logo_02.png') no-repeat center;
		/* background-position: -30px -10px; */
		display: flex;
		align-items: center;
	}
	.logos >img{
		height: 70px;
		width: 70px;
		border-radius: 50%;
		margin-left: 29px;
	}
	.Left, .right{
		margin-left: 15px;
		background-color: #fff;
		border-radius: 6px;

	}
	.Left{
		overflow: auto;
		height: 100%;
	}
	.right{
		height: auto;
		margin-right: 15px;
		overflow: auto;
		height: 100%;
	}
	.rights{
		margin-bottom: 20px;
		padding-bottom: 20px;
	}
	.Left::-webkit-scrollbar, .right::-webkit-scrollbar
	{  
	    width: 0px;  
	    height: 0px;  
	    background-color: #F5F5F5;  
	}  
	  
	.Left::-webkit-scrollbar-track ,.right::-webkit-scrollbar-track 
	{  
	    -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);  
	    border-radius: 10px;  
	    background-color: #F5F5F5;  
	}  
	.Left::-webkit-scrollbar-thumb,.right::-webkit-scrollbar-thumb    
	{  
	    border-radius: 10px;  
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
	    background-color: #555;  
	}  
	.user{
		display: flex;
		align-items: center;
		position: relative;
		height: 70px;
		width: auto;
		background-color: #fff;
		border-radius: 40px;
		cursor: pointer;
	}
	.user:hover{
		background-color: #e7e5e7;
	}
	.user > img{
		height: 60px;
		width: 60px;
		border-radius: 50%;
		padding:0 10px 0 6px;
	}
	.user >span{
		font-size: 20px;
		padding-right: 18px;
	}
	.nav{
		border-radius: 6px;
		overflow:hidden
	}
	.userDetails{
		position: absolute;
		top: 90px;
		right: 34px;
		background-color: #fff;
		z-index: 999;
		margin-top: 24px;
		height: 140px;
		width: 190px;
		opacity: 1;
		border-radius: 8px;
		box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.2);
	}
	.userDetailsDisplay{
		display: none;
		opacity: 0;
	}
	.userDetails p{
		padding: 0;
		margin: 0;
		height: 70px;
		line-height: 70px;
		text-align: center;
		font-size: 20px;
		cursor: pointer;
		display: flex;align-items: center;
	}
	.userDetails p:first-child{
		border-bottom: 1px solid #e6e6e6;
	}
	.lock{
		display: inline-block;
	    width: 20px;
	    height: 20px;
	    margin-right: 22px;
	    margin-left: 30px;
		background: url('../../assets/lock.png') no-repeat center;
	}
	.close{
		display: inline-block;
	    width: 20px;
	    height: 20px;
	    margin-right: 22px;
	    margin-left: 30px;
		background: url('../../assets/Close.png') no-repeat center;
	}
	.userDetails p:hover{
		background-color: #e7e5e7;
	}
	
	
</style>