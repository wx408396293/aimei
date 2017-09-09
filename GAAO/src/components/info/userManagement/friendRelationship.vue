<template>
	<div>
		<p class="jisp">好友关系表</p>	
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
								<el-button type="success" size="small"  style="width:70px;font-size:16px"  @click="search">查询</el-button>
							</div>
							<p>{{userName}}</p>
						</el-col>
					</el-row>
					<el-row v-if="searchList">
						<el-col :span="24">
							<el-row>
								<el-col :span="24">
									<el-button type="info" size="small" @click="attention">关注表 {{GetFollowListtotal}}</el-button>
									<el-button type="info" size="small" @click="fans">粉丝表 {{GetFanListotal}}</el-button>
								</el-col>
							</el-row>
							<el-row class="table">
						    	<el-col :span="24">
						    			<attention v-if="attentionAndFans" />
						    			<fans v-else />
						    	</el-col>
				    		</el-row>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	import router from "../../../router/index.js"
	import {mapMutations,mapActions, mapState} from "vuex"
	import {GETFANLIST,GETFOLLOWLIST,USERID} from "../../../store/userManagement/friendRelationship.js"
	import attention from "../userManagement/attentionAndFans/attention.vue"
	import fans from "../userManagement/attentionAndFans/fans.vue"
	export default{
		name:"friendRelationships",
		created(){
			if (this.userId === null) {
				return
			}else {
				this.GETFANLIST()
				this.GETFOLLOWLIST()
				this.userID = this.userId				
			}
		},
		components: {
		    attention,
		    fans
		},
		data(){
			return{
				attentionAndFans:true,
				userID: "",
			}
		},
		computed:{
	    	...mapState("friendRelationship",["userId","userName","searchList","GetFanListotal","GetFollowListtotal"]),
	    },
		methods:{
			...mapActions("friendRelationship",["GETFANLIST","GETFOLLOWLIST","USERID"]),
			...mapMutations("friendRelationship",["getUser"]),
			//搜索
			search(){
				if (this.userID !== "") {
					this.USERID(parseInt(this.userID))
				}else {
					console.log("空格")
				}
	
			},
        	attention(){
        		this.attentionAndFans= true
        	},
        	fans(){
        		this.attentionAndFans= false
        	}
		},
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