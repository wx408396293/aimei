<!--待审核艺人 -->
<template>
	<div>
		<p class="jisp">艺人审核-基本资料</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="24">
					<div class="cantent">
						<div class="namens">
							<div class="names_maix">
								<label>真实姓名</label>
								<span>{{pendingList_details.name}}</span>
							</div>
							<div class="names_maix">
								<label>申请身份</label>
								<span>{{pendingList_details.typeName}}</span>
							</div>
							<div class="names_maix">
								<label>申请时间</label>
								<span>{{pendingList_details.createTime}}</span>
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>证件号码</label>
								<span>{{pendingList_details.certificateNo}}</span>
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>证件照片</label>
								<img :src="pendingList_details.frontPicture" >
								<img :src="pendingList_details.oppositePicture" >
								<img :src="pendingList_details.holdPicture" >
							</div>
						</div>
						<div class="namens">
							<p>艺人审核-附加资料</p>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>作品链接</label>
								<div class="p">
									<p v-for="(item,index) in pendingList_details.worksLink" key="index">{{item.worksLink}}</p>
								</div>
								
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>附加照片</label>
								<img v-for="(item,index) in pendingList_details.pictureUrl" key="index" :src="item.pictureUrl" >
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>大赛奖项</label>
								<div class="textarea">
									<p>{{pendingList_details.awards}}</p>
								</div>
								
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>附加描述</label>
								<div class="textarea">
									<p>{{pendingList_details.description}}</p>
								</div>
								
							</div>
						</div>
					</div>
					<div class="button">
						<el-button size="small"  @click="toExamine">返回</el-button>
					</div>
		    		
		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import router from "@/router/index.js"
	export default{
		name:"artistbasiclist",
		data(){
			return{
				userID:"wwe"
			}
		},
		 created(){
	    	if (this.pendingList_details.id === undefined) {
	    		router.push("/info/artistManagement/pendingAudit")
	    	}
	    },
	    computed:{
	      ...mapState("pendingList",["pendingList_details"])
	    },
		methods:{
			...mapMutations("pendingList",[""]),
			toExamine() {
				router.push(`/info/artistManagement/basicData/artistBasic`)
	        },
		}
	}
</script>
<style scoped>
.cantent{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.namens,.button,.names_maix{
	display: flex;
	align-items:flex-start;
}
.namens{
	margin-bottom: 20px;
}
.names_maix{
	margin-right: 40px;
}
.names_maix > span{
	border-bottom: 1px solid #333;
}
.names_maix > label{
	margin-right: 6px;
}
.p> p,.namens >p,.textarea >p{
	padding: 0px;
	margin: 0;
	margin-bottom: 10px;
}
.names_maix >img{
	height: 140px;
	width: 220px;
	margin-right: 20px;
}
.textarea{
	border: 1px solid #999;
	height: 60px;width: 460px;
}
.textarea >p{
	 word-wrap: break-word;
	 line-height: 1.2em;
}
.button >*{
	margin-right: 20px;
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