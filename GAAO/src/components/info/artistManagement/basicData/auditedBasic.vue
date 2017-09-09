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
								<span>{{audite_A.name}}</span>
							</div>
							<div class="names_maix">
								<label>申请身份</label>
								<span>{{audite_A.typeName}}</span>
							</div>
							<div class="names_maix">
								<label>申请时间</label>
								<span>{{audite_A.createTime}}</span>
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>证件号码</label>
								<span>{{audite_A.certificateNo}}</span>
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>证件照片</label>
								<img :src="audite_A.frontPicture" >
								<img :src="audite_A.oppositePicture" >
								<img :src="audite_A.holdPicture" >
							</div>
						</div>
						<div class="namens">
							<p>艺人审核-附加资料</p>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>作品链接</label>
								<div class="p">
									<p v-for="(item,index) in audite_A.worksLink" key="index">{{item.worksLink}}</p>
								</div>
								
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>附加照片</label>
								<img v-for="(item,index) in audite_A.pictureUrl" key="index" :src="item.pictureUrl" >
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>大赛奖项</label>
								<div class="textarea">
									<p>{{audite_A.awards}}</p>
								</div>
								
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>附加描述</label>
								<div class="textarea">
									<p>{{audite_A.description}}</p>
								</div>
								
							</div>
						</div>
					</div>
					<div class="button">
						<el-button size="small" v-if ="audite_A.auditStatus ==='审核通过'"  @click="RevokeButon">撤销</el-button>
						<el-button size="small"  @click="temporaryBUtton">返回</el-button>
					</div>
					<el-dialog
						v-if=""
						title="撤销提示"
						:visible.sync="RevokWhy"
						:before-close="RevokeButon"
						size="tiny">
						<el-input
						class="label"
						type="revokwhy"
							:rows="2"
							placeholder="请输入原因"
							v-model="reason">
						</el-input>
						<span slot="footer">
						    <el-button @click="RevokeButon">取 消</el-button>
						    <el-button type="primary" @click="RevokWhyList">确 定</el-button>
						</span>
					</el-dialog>
		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>adopt
<script>
import {mapMutations,mapActions, mapState} from "vuex"
import router from "@/router/index.js"
	export default{

		name:"auditedBasic",
	    created(){
	    	this.id =this.audite_A.id
	    	if (this.audite_A.id === undefined) {
	    		router.push("/info/artistManagement/auditedList")
	    	}
	    },
		data(){
			return{
				// RevokWhy:false,
				reason:"",
				id:"",
			}
		},
		computed:{
	      ...mapState("pendingList",["audite_A","jumphomepage"]),
	      RevokWhy:{
	      	get(){
	      		return this.$store.state.pendingList.RevokWhy
	      	},
	      	set(){}
	      },
	    },
		methods:{
			...mapActions("pendingList",["REVOKAUDITED"]),
			...mapMutations("pendingList",["pending_details","getadopt","getRevokWhy"]),
	        //撤销
	        RevokeButon(){
	        	this.getRevokWhy()
	        },
	        RevokWhyList(){
	        	this.REVOKAUDITED({
	        		id:this.id,
	        		reason:this.reason
	        	})
	        },
	        temporaryBUtton(){
	        	router.push("/info/artistManagement/auditedList")
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
	height: 60px;width: 460px;
}
.textarea >p{
	 word-wrap: break-word;
	 line-height: 1.2em;
}
.button >*{
	margin-right: 20px;
}
.pp{
	width: 100%;
	text-align: center;
	font-size: 20px;
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