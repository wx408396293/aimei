<!--待审核艺人 -->
<template>
	<div>
		<p class="jisp">机构审核-基本资料</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="24">
					<div class="cantent">
						<div class="namens">
							<div class="names_maix">
								<label>机构名称</label>
								<span>{{mechanism_A.enterpriseName}}</span>
							</div>
							<div class="names_maix">
								<label>营业执照注册号</label>
								<span>{{mechanism_A.registerNumber}}</span>
							</div>
							<div class="names_maix">
								<label>社会信用代码</label>
								<span>{{mechanism_A.creditCode}}</span>
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>法人/企业负责人</label>
								<span>{{mechanism_A.legalPerson}}</span>
							</div>
							<div class="names_maix">
								<label>经营范围</label>
								<span>{{mechanism_A.scopeOfBusiness}}</span>
							</div>
							<div class="names_maix">
								<label>联系方式</label>
								<span>{{mechanism_A.contactWay}}</span>
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>证件照片</label>
								<img :src="mechanism_A.license" >
								<img :src="mechanism_A.frontPicture" >
								<img :src="mechanism_A.oppositePicture" >
							</div>
						</div>
						<div class="namens">
							<p>机构审核-附加资料</p>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>作品链接</label>
								<div class="p">
									<p v-for="(item,index) in mechanism_A.worksLink" key="index">{{item.worksLink}}</p>
								</div>
								
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>附加照片</label>
								<img v-for="(item,index) in mechanism_A.pictureUrl" key="index" :src="item.pictureUrl" >
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>大赛奖项</label>
								<div class="textarea">
									<p>{{mechanism_A.awards}}</p>
								</div>
								
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>附加描述</label>
								<div class="textarea">
									<p>{{mechanism_A.description}}</p>
								</div>
								
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>申请记录</label>
								<div >
									<el-table
										border
									    :data="mechanismLIST_list"
									    style="width: 100%">
									    <el-table-column
									      prop="type"
									      label="申请类型"
									      width="100">
									    </el-table-column>
									    <el-table-column
									      prop="typeName"
									      label="申请身份"
									      width="100">
									    </el-table-column>
									    <el-table-column
									      prop="createTime"
									      label="审核时间"
									      width="160">
									    </el-table-column>
									     <el-table-column
									      prop="auditUseUserName"
									      label="审核人"
									      width="110">
									    </el-table-column>
									     <el-table-column
									      prop="auditStatus"
									      label="审核结果"
									      width="160">
									    </el-table-column>
									     <el-table-column
									      prop="auditReason"
									      label="理由"
									      width="100">
									    </el-table-column>
									    <el-table-column label="操作" width="170">
									        <template scope="scope">
										        <el-button
										          size="small"
										          @click="toExamine(scope.row)">查看资料</el-button>
									        </template>
									    </el-table-column>
									</el-table>
								</div>
								
							</div>
						</div>
					</div>
					<div class="button">
						<div>
							<el-button size="small"  @click="adoptButton">通过</el-button>
							<el-button size="small"  @click="refuseButton">拒绝</el-button>
							<el-button size="small"  @click="temporaryBUtton">暂不处理</el-button>
						</div>
					</div>
					<el-dialog
						v-if=""
						title="申请成功提示"
						:visible.sync="adopt"
						:before-close="handleClose"
						size="tiny">
						<p class="pp">申请成功，请确认!</p>
						<span slot="footer">
						    <el-button type="primary" @click="handleClose">确 定</el-button>
						</span>
					</el-dialog>
		    		<el-dialog
						v-if=""
						title="拒绝提示"
						:visible.sync="dialogVisible"
						:before-close="refuseButton"
						size="tiny">
						<el-input
						class="label"
						type="textarea"
							:rows="2"
							placeholder="请输入原因"
							v-model="textarea">
						</el-input>
						<span slot="footer">
						    <el-button @click="refuseButton">取 消</el-button>
						    <el-button type="primary" @click="refuseButtonlist">确 定</el-button>
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

		name:"artistBasic",
	    created(){
	    	if (this.mechanism_A.id !== undefined) {
	    		this.GETMECHANISM({
		    		id:this.mechanism_A.id,
		    		userId:this.mechanism_A.userId,
		    		typeId:this.mechanism_A.typeId
		    	})
	    	}else {
	    		router.push("/info/artistManagement/Auditmechanism")
	    	}
	    },
		data(){
			return{
				//拒绝弹窗
				textarea:"",
			}
		},
		computed:{
	      ...mapState("mechanismList",["mechanism_A","mechanismLIST_list","jumphomepage"]),
	      adopt:{
	      	get(){
	      		return this.$store.state.mechanismList.adopt
	      	},
	      	set(){}
	      },
	      dialogVisible:{
	      	get(){
	      		return this.$store.state.mechanismList.dialogVisible
	      	},
	      	set(){}
	      },
	    },
		methods:{
			...mapActions("mechanismList",["GETMECHANISM","GETADOPT","GETREFUSE"]),
			...mapMutations("mechanismList",["mechanism_details","getadopt","getdialogVisible"]),
			toExamine(row) {
				this.mechanism_details(row)
	        },
	        //通过
	        adoptButton(){
	        	this.GETADOPT(this.mechanism_A.id)
	        },
	        handleClose(){
	        	this.getadopt()
	        	router.push("/info/artistManagement/Auditmechanism")
	        },
	        //拒绝
	        refuseButton(){
	        	this.textarea = "",
	        	this.getdialogVisible();
	        },

	        refuseButtonlist(){
	        	this.GETREFUSE({
	        		id:this.mechanism_A.id,
	        		reason:this.textarea
	        	})
	        },
	        //暂不处理
	        temporaryBUtton(){
	        	router.push("/info/artistManagement/Auditmechanism")
	        }
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