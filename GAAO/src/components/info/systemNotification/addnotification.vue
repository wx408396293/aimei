<!--待审核艺人 -->
<template>
	<div>
		<p class="jisp">创建通知</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="24">
					<div class="cantent">
						<div class="namens">
							<div class="names_maix">
								<label>通知内容</label>
								<div class="textarea">
									<el-input type="textarea" autosize  placeholder="请输入内容" :autosize="{ minRows: 4, maxRows: 6}" v-model="from.content"></el-input>
								</div>
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>发送时间</label>
								<el-date-picker
							      v-model="from.date"
							      type="datetime"
							      placeholder="选择日期"
							      size="small"
							      :picker-options="pickerOptions0">
							    </el-date-picker>
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>接收用户</label>
								<el-select v-model="from.UserName" slot="prepend" placeholder="类型" size="small" style="width: 140px" @change="dropdownButton">
							        <el-option label="全部用户" value="-1"></el-option>
							        <el-option label="普通用户" value="0"></el-option>
							        <el-option label="艺人用户" value="1"></el-option>
							        <el-option label="指定接收用户" value="2"></el-option>
							    </el-select>
							</div>
							<div class="names_maix textarea" v-if="displaytextarea">
								<label>输入用户ID</label>
								<div class="textaretst">
									<el-input type="textarea" autosize  placeholder="请输入内容" :autosize="{ minRows: 4, maxRows: 6}" v-model="from.userId"></el-input>
								</div>
								
							</div>
						</div>
						<div class="namens">
							<div class="names_maix">
								<label>链接类型</label>
								<el-select v-model="from.type" slot="prepend" placeholder="类型" size="small" style="width: 140px" @change="dropdownButtontu">
							        <el-option label="视频" value="视频"></el-option>
							        <el-option label="音频" value="音频"></el-option>
							        <el-option label="专题" value="专题"></el-option>
							        <el-option label="专辑" value="专辑"></el-option>
							        <el-option label="榜单" value="榜单"></el-option>
							        <el-option label="标签详情" value="标签详情"></el-option>
							        <el-option label="素材详情" value="素材详情"></el-option>
							        <el-option label="个人主页" value="个人主页"></el-option>
							        <el-option label="活动详情" value="活动详情"></el-option>
							        <el-option label="链接" value="链接"></el-option>
							    </el-select>
							</div>
							<div class="names_maix textarea" v-if="displaytextareaList">
								<label v-if="from.type ==='视频' ">输入视频Id</label>
								<label v-if="from.type ==='音频' ">输入音频Id</label>
								<label v-if="from.type ==='专题' ">输入专题Id</label>
								<label v-if="from.type ==='专辑' ">输入专辑Id</label>
								<label v-if="from.type ==='榜单' ">输入榜单Id</label>
								<label v-if="from.type ==='标签详情' ">输入标签Id</label>
								<label v-if="from.type ==='素材详情' ">输入素材Id</label>
								<label v-if="from.type ==='个人主页' ">输入个人主页Id</label>
								<label v-if="from.type ==='活动详情' ">输入活动详情Id</label>
								<label v-if="from.type ==='链接' ">输入链接地址</label>
								<div class="textaretst">
									<el-input type="textarea" autosize  placeholder="请输入内容" :autosize="{ minRows: 4, maxRows: 6}" v-model="from.getId"></el-input>
								</div>
							</div>
						</div>
					</div>
					<div class="button">
						<el-button size="small" type="info" @click="SubmitButton">提交</el-button>
					</div>
		    		
		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
	export default{
		name:"addnotification",
		data(){
			return{
				pickerOptions0: {
			        disabledDate(time) {
			        	return time.getTime() < Date.now() - 8.64e7;
			        }
        		},
        		from:{
        			//内容
        			content:"",
        			//时间
					date:"",
					//接收用户
					UserName:"",
					//链接类型
					type:"",
					//用户id
					userId:"",
					//类型id
					getId:"",
        		},
        		getFrom:{
        			targetIds:"",
        			content:"",
        			type:null,
        			date:"",
        		},
				//输入框显示
				displaytextarea:false,
				displaytextareaList:false,
			}
		},
		created(){
			
		},
		methods:{
			...mapActions("addnotification",["ADDNOTIFICATION"]),
			dropdownButton(event){
				if (event ==="2") {
					this.displaytextarea =true
				}else {
					this.from.userId = ""
					this.displaytextarea =false
				}
			},
			dropdownButtontu(event){
				if (event !=="无") {
					this.from.getId = ""
					this.displaytextareaList = true
				}else {
					this.displaytextareaList = false
				}
			},
			SubmitButton(){
				if (this.from.content ==="") {
					this.$message({
				        message: '通知内容不能为空',
				        type: 'warning'
			        });
			        return
				}
				if (this.from.date ==="") {
					this.$message({
				        message: '发送时间不能为空',
				        type: 'warning'
			        });
			        return
				}
				if (this.from.UserName ==="") {
					this.$message({
				        message: '接收用户不能为空',
				        type: 'warning'
			        });
			        return
				}
				if (this.from.type ==="") {
					this.$message({
				        message: '连接类型不能为空',
				        type: 'warning'
			        });
			        return
				}
				if (this.from.getId ==="") {
					this.$message({
				        message: '连接类型id不能为空',
				        type: 'warning'
			        });
			        return
				}
				//0=视频 1=音频 2=专题 3=专辑 4=榜单 5=标签详情 6=素材详情 7=个人主页 8=活动详情 9=链接
			    this.getFrom.content = this.from.content
			    switch(this.from.type) {
				   	case "视频": this.getFrom.type = 0 
				   		break;
				   	case "音频": this.getFrom.type = 1 
				   		break;
				   	case "专题": this.getFrom.type = 2 
				   		break;
				   	case "专辑": this.getFrom.type = 3 
				   		break;
				   	case "榜单": this.getFrom.type = 4 
				   		break;
				   	case "标签详情": this.getFrom.type = 5 
				   		break;
				   	case "素材详情": this.getFrom.type = 6 
				   		break;
				   	case "个人主页": this.getFrom.type = 7 
				   		break;
				   	case "活动详情": this.getFrom.type = 8 
				   		break;
				   	case "链接": this.getFrom.type = 9 
				   		break;
			    }
				let date = new Date(this.from.date);
				//年
				let y = date.getFullYear()
				//月份
				let m = date.getMonth()+1 <10? `0${date.getMonth()+1}`: date.getMonth()+1
				//日期
				let d = date.getDate()<10 ? `0${date.getDate()}`: date.getDate()
				//时
				let h = date.getHours();  
				let minute = date.getMinutes();
				minute = minute < 10 ? ('0' + minute) : minute;  
    			this.getFrom.date = y + '-' + m + '-' + d+' '+h+':'+minute
				if (this.from.UserName === "-1") this.getFrom.targetIds = this.from.UserName
				else  this.getFrom.targetIds = this.from.userId

				if (this.getFrom.type >= 0 && this.getFrom.type <=8) this.getFrom.linkId = parseInt(this.from.getId)
				else this.getFrom.linkUrl = this.from.getId
				this.ADDNOTIFICATION(this.getFrom)
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
	margin-right: 10px;
}
.textarea{
	width: 400px;
}
.textarea > label{
	width: 100px;
}
.textaretst{
	width: 300px;
}
.p> p,.namens >p{
	padding: 0px;
	margin: 0;
	margin-bottom: 10px;
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