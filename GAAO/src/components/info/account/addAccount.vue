<template>
	<div>
		<p class="jisp">信息填写</p>	
	    <div class="div">
	    <el-row>
	    	<el-col :span="8">
				<el-form :model="form" :ref="form" :rules="rules1" ref="form"  label-width="80px" class="demo-ruleForm">
					<el-form-item label="账户名" prop="userName">
		    			<el-input size="small" style="width: 210px;" :maxlength="16"  placeholder="字母开头、数字及英文符号组合" v-model="form.userName"></el-input>
		  			</el-form-item>
		  			<el-form-item label="密码" prop="password">
		    			<el-input size="small" type="password" :maxlength="16"  placeholder="数字及英文符号组合" style="width: 210px;" v-model="form.password"></el-input>
		  			</el-form-item>
		  			<el-form-item label="真实姓名"  prop="realName">
		    			<el-input style="width: 210px;" v-model="form.realName"></el-input>
		  			</el-form-item>
		  			<el-form-item label="性别">
						<el-radio-group v-model="form.gender">
						    <el-radio label="1">男</el-radio>
						    <el-radio label="2">女</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="手机号"  prop="phoneNumber">
		    			<el-input style="width: 210px;" v-model="form.phoneNumber"></el-input>
		  			</el-form-item>
		  			<el-form-item label="邮件" >
		    			<el-input type="email" style="width: 210px;" v-model="form.email"></el-input>
		  			</el-form-item>
		  			<el-form-item label="所属部门"  v-if="rolesJudge">
					    <el-select v-model="form.department" placeholder="请选择部门" @change="bumen" style="width: 210px;">
						    <el-option
						      v-for="item in departmentw"
						      :key="item.value"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						 </el-select>
				  	</el-form-item>
				  	<el-form-item label="部门主管" v-if="rolesJudge" >
					  	<el-checkbox-group v-model="jies" @change="qunxuan">
						    <el-checkbox label="是" true-label="111" name="type"></el-checkbox>
					    </el-checkbox-group>
					</el-form-item>
					<p>权限选择</p>
					<div class="quanxian">
						<div class="flxie" v-if="judge1.judge3">
							<el-checkbox-group v-model="resets[0]">
							    <el-checkbox label="用户列表" true-label="3" :checked = "wholes.whole3" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[0]">
							    <el-checkbox label="权限1" true-label="2" v-if="judge2.judgeLet2" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[1]">
							    <el-checkbox label="权限2" true-label="3" v-if="judge2.judgeLet3" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge4">
							<el-checkbox-group v-model="resets[1]">
							    <el-checkbox label="封号列表" true-label="4" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[2]">
							    <el-checkbox label="权限1" true-label="4" v-if="judge2.judgeLet4" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge5">
							<el-checkbox-group v-model="resets[2]">
							    <el-checkbox label="自媒体艺人列表" true-label="5" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[3]">
							    <el-checkbox label="权限1" true-label="5" v-if="judge2.judgeLet5" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge6">
							<el-checkbox-group v-model="resets[3]">
							    <el-checkbox label="好友关系" true-label="6" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge7">
							<el-checkbox-group v-model="resets[4]">
							    <el-checkbox label="资产列表" true-label="7" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge8">
							<el-checkbox-group v-model="resets[5]">
							    <el-checkbox label="作品列表" true-label="8" name="type"></el-checkbox>
						    </el-checkbox-group>
						     <el-checkbox-group v-model="resourcesList[4]">
							    <el-checkbox label="权限1" true-label="6" v-if="judge2.judgeLet6" name="type"></el-checkbox>
						    </el-checkbox-group>
						     <el-checkbox-group v-model="resourcesList[5]">
							    <el-checkbox label="权限2" true-label="7" v-if="judge2.judgeLet7" name="type"></el-checkbox>
						    </el-checkbox-group>
						     <el-checkbox-group v-model="resourcesList[6]">
							    <el-checkbox label="权限3" true-label="8" v-if="judge2.judgeLet8" name="type"></el-checkbox>
						    </el-checkbox-group>
						     <el-checkbox-group v-model="resourcesList[7]">
							    <el-checkbox label="权限4" true-label="9" v-if="judge2.judgeLet9" name="type"></el-checkbox>
						    </el-checkbox-group>
						     <el-checkbox-group v-model="resourcesList[8]">
							    <el-checkbox label="权限5" true-label="10" v-if="judge2.judgeLet10" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge9">
							<el-checkbox-group v-model="resets[6]">
							    <el-checkbox label="精选池" true-label="9" name="type"></el-checkbox>
						    </el-checkbox-group>
						     <el-checkbox-group v-model="resourcesList[9]">
							    <el-checkbox label="权限1" true-label="11" v-if="judge2.judgeLet11" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge10">
							<el-checkbox-group v-model="resets[7]">
							    <el-checkbox label="专题池" true-label="10" name="type"></el-checkbox>
						    </el-checkbox-group>
						     <el-checkbox-group v-model="resourcesList[10]">
							    <el-checkbox label="权限1" true-label="12" v-if="judge2.judgeLet12" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge11">
							<el-checkbox-group v-model="resets[8]">
							    <el-checkbox label="滤镜表" true-label="11" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge12">
							<el-checkbox-group v-model="resets[9]">
							    <el-checkbox label="贴纸表" true-label="12" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge13">
							<el-checkbox-group v-model="resets[10]">
							    <el-checkbox label="字体表" true-label="13" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge14">
							<el-checkbox-group v-model="resets[11]">
							    <el-checkbox label="音频素材列表" true-label="14" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[11]">
							    <el-checkbox label="权限1" true-label="13" v-if="judge2.judgeLet13" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge15">
							<el-checkbox-group v-model="resets[12]">
							    <el-checkbox label="标签列表" true-label="15" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[12]">
							    <el-checkbox label="权限1" true-label="14" v-if="judge2.judgeLet14" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge16">
							<el-checkbox-group v-model="resets[13]">
							    <el-checkbox label="创建标签" true-label="16" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge26">
							<el-checkbox-group v-model="resets[14]">
							    <el-checkbox label="专题列表" true-label="26" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[13]">
							    <el-checkbox label="权限1" true-label="17" v-if="judge2.judgeLet17" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[14]">
							    <el-checkbox label="权限2" true-label="18" v-if="judge2.judgeLet18" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[15]">
							    <el-checkbox label="权限3" true-label="19" v-if="judge2.judgeLet19" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[16]">
							    <el-checkbox label="权限4" true-label="20" v-if="judge2.judgeLet20" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[17]">
							    <el-checkbox label="权限5" true-label="26" v-if="judge2.judgeLet26" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge27">
							<el-checkbox-group v-model="resets[15]">
							    <el-checkbox label="创建专题" true-label="27" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge28">
							<el-checkbox-group v-model="resets[16]">
							    <el-checkbox label="精选列表" true-label="28" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[18]">
							    <el-checkbox label="权限1" true-label="21" v-if="judge2.judgeLet21" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[19]">
							    <el-checkbox label="权限2" true-label="22" v-if="judge2.judgeLet22" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge29">
							<el-checkbox-group v-model="resets[17]">
							    <el-checkbox label="创建精选" true-label="29" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge30">
							<el-checkbox-group v-model="resets[18]">
							    <el-checkbox label="流行榜单表" true-label="30" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[20]">
							    <el-checkbox label="权限1" true-label="23" v-if="judge2.judgeLet23" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[21]">
							    <el-checkbox label="权限2" true-label="24" v-if="judge2.judgeLet24" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge31">
							<el-checkbox-group v-model="resets[19]">
							    <el-checkbox label="艺人榜列表" true-label="31" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[22]">
							    <el-checkbox label="权限1" true-label="25" v-if="judge2.judgeLet25" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge32">
							<el-checkbox-group v-model="resets[20]">
							    <el-checkbox label="Banner列表" true-label="32" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[23]">
							    <el-checkbox label="权限1" true-label="27" v-if="judge2.judgeLet27" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[24]">
							    <el-checkbox label="权限2" true-label="28" v-if="judge2.judgeLet28" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[25]">
							    <el-checkbox label="权限3" true-label="29" v-if="judge2.judgeLet29" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[26]">
							    <el-checkbox label="权限4" true-label="30" v-if="judge2.judgeLet30" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[27]">
							    <el-checkbox label="权限5" true-label="31" v-if="judge2.judgeLet31" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge22">
							<el-checkbox-group v-model="resets[21]">
							    <el-checkbox label="礼物列表" true-label="22" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge23">
							<el-checkbox-group v-model="resets[22]">
							    <el-checkbox label="创建礼物" true-label="23" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge35">
							<el-checkbox-group v-model="resets[23]">
							    <el-checkbox label="生日礼物列表" true-label="35" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge36">
							<el-checkbox-group v-model="resets[24]">
							    <el-checkbox label="创建生日礼物" true-label="36" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge37">
							<el-checkbox-group v-model="resets[25]">
							    <el-checkbox label="积分查询" true-label="37" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge38">
							<el-checkbox-group v-model="resets[26]">
							    <el-checkbox label="积分兑换优惠卷" true-label="38" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie"  v-if="judge1.judge39">
							<el-checkbox-group v-model="resets[27]">
							    <el-checkbox label="积分说明描述" true-label="39" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge17">
							<el-checkbox-group v-model="resets[28]">
							    <el-checkbox label="充值列表" true-label="17" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge18">
							<el-checkbox-group v-model="resets[29]">
							    <el-checkbox label="消费列表" true-label="18" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge19">
							<el-checkbox-group v-model="resets[30]">
							    <el-checkbox label="咪币套餐列表" true-label="19" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[28]">
							    <el-checkbox label="权限1" true-label="15" v-if="judge2.judgeLet15" name="type"></el-checkbox>
						    </el-checkbox-group>
						    <el-checkbox-group v-model="resourcesList[29]">
							    <el-checkbox label="权限2" true-label="16" v-if="judge2.judgeLet16" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge20">
							<el-checkbox-group v-model="resets[31]">
							    <el-checkbox label="创建咪币套餐" true-label="20" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge24">
							<el-checkbox-group v-model="resets[32]">
							    <el-checkbox label="待审核艺人列表" true-label="24" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge25">
							<el-checkbox-group v-model="resets[33]">
							    <el-checkbox label="已审核艺人列表" true-label="25" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>

						<div class="flxie" v-if="judge1.judge41">
							<el-checkbox-group v-model="resets[38]">
							    <el-checkbox label="待审核机构列表" true-label="41" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge42">
							<el-checkbox-group v-model="resets[39]">
							    <el-checkbox label="已审核机构列表" true-label="42" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>

						<div class="flxie" v-if="judge1.judge21">
							<el-checkbox-group v-model="resets[34]">
							    <el-checkbox label="通知列表" true-label="21" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge40">
							<el-checkbox-group v-model="resets[35]">
							    <el-checkbox label="创建通知" true-label="40" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge33">
							<el-checkbox-group v-model="resets[36]" >
							    <el-checkbox label="反馈列表" true-label="33" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
						<div class="flxie" v-if="judge1.judge34">
							<el-checkbox-group v-model="resets[37]">
							    <el-checkbox label="举报列表" true-label="34" name="type"></el-checkbox>
						    </el-checkbox-group>
						</div>
					</div>
					<el-button type="primary" :plain="true" @click="getForm(form)">提交</el-button>
					<el-button type="danger" @click="resetLid">重置</el-button>
				</el-form>
	    	</el-col>
	    	</el-col :span="16">
				<p>头像</p>
				<el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="form.avatarUrl" :src="form.avatarUrl" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
				<el-dialog
						v-if=""
						title="注册提示"
						:visible.sync="dialogVisible"
						size="tiny">
						<p class="p">注册成功</p>
						
						<span slot="footer">
						    <el-button type="primary" @click="setDialogVIsible">确 定</el-button>
						</span>
					</el-dialog>
	    	</el-col>
	    </el-row>
	    </div>
	</div>

	
</template>
<script>
	import {mapMutations,mapActions, mapState,mapGetters} from "vuex"
	import {DEPARTMENT,SETACCOUNT,DIALOGVIDIBLE} from "../../../store/account/account.js"
	export default{
		name:"addAccount",
		created(){
			let rolesString="1"
			//用户id
			this.userId = localStorage.userId
			//可分配的权限
			var det = localStorage.department
			if (this.userId === "1") {
				this.rolesJudge =true
				this.departments()
			}
			if (rolesString === det) {
					this.rolesList = det.split(",") 
			}else {
				this.rolesList =localStorage.roles.split(",") 
			}

			this.dengtee(this.rolesList)
			var resourcesString = ""
			resourcesString = localStorage.resources
			//三级权限
			resourcesString.split(",").forEach( (element) => {
						if (element === "2" || element ==="1") this.judge2.judgeLet2 = true
						if (element === "3" || element ==="1") this.judge2.judgeLet3 = true
						if (element === "4" || element ==="1") this.judge2.judgeLet4 = true
						if (element === "5" || element ==="1") this.judge2.judgeLet5 = true
						if (element === "6" || element ==="1") this.judge2.judgeLet6 = true
						if (element === "7" || element ==="1") this.judge2.judgeLet7 = true
						if (element === "8" || element ==="1") this.judge2.judgeLet8 = true
						if (element === "9" || element ==="1") this.judge2.judgeLet9 = true
						if (element === "10" || element ==="1") this.judge2.judgeLet10 = true
						if (element === "11" || element ==="1") this.judge2.judgeLet11 = true
						if (element === "12" || element ==="1") this.judge2.judgeLet12 = true
						if (element === "13" || element ==="1") this.judge2.judgeLet13 = true
						if (element === "14" || element ==="1") this.judge2.judgeLet14 = true
						if (element === "15" || element ==="1") this.judge2.judgeLet15 = true
						if (element === "16" || element ==="1") this.judge2.judgeLet16 = true
						if (element === "17" || element ==="1") this.judge2.judgeLet17 = true
						if (element === "18" || element ==="1") this.judge2.judgeLet18 = true
						if (element === "19" || element ==="1") this.judge2.judgeLet19 = true
						if (element === "20" || element ==="1") this.judge2.judgeLet20 = true
						if (element === "21" || element ==="1") this.judge2.judgeLet21 = true
						if (element === "22" || element ==="1") this.judge2.judgeLet22 = true
						if (element === "23" || element ==="1") this.judge2.judgeLet23 = true
						if (element === "24" || element ==="1") this.judge2.judgeLet24 = true
						if (element === "25" || element ==="1") this.judge2.judgeLet25 = true
						if (element === "26" || element ==="1") this.judge2.judgeLet26 = true
						if (element === "27" || element ==="1") this.judge2.judgeLet27 = true
						if (element === "28" || element ==="1") this.judge2.judgeLet28 = true
						if (element === "29" || element ==="1") this.judge2.judgeLet29 = true
						if (element === "30" || element ==="1") this.judge2.judgeLet30 = true
						if (element === "31" || element ==="1") this.judge2.judgeLet31 = true
			});
		},
		data(){
			let judge1_1 = {}
			let judge1_2 = {} 
			let whole= {}
			for (let i = 3; i <= 42; i++) {
				judge1_1[`judge${i}`] = false
			}
			for (let i = 2; i < 32; i++) {
				judge1_2[`judgeLet${i}`] = false
			}
			for (let i = 3; i <= 42; i++) {
				whole[`whole${i}`] = false
			}

			//匹配规则
			var UserName = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入账户'));
	        } else {
		          if (this.form.userName!== '') {
		          	//6到6位字符由字母开头、数字及英文符号组合
		          	if (/^[a-zA-Z][a-zA-Z0-9_.@~!?]{5,15}$/.test(this.form.userName)) {
		          		callback();
		          	}else {
		          		 callback(new Error('账户由6到16位字符由字母开头、数字及英文符号组合'));
		          	}
		          }
		        }
		    };
		    var Password = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
		          if (this.form.password!== '') {
		          	//5到17位字符由字母开头、数字及英文符号组合
		          	if (/^[a-zA-Z0-9_.@~!?]{6,16}$/.test(this.form.password)) {
		          		callback();
		          	}else {
		          		 callback(new Error('密码由6到16位字符由字母、数字及英文符号组合'));
		          	}
		          }
		        }
		    };
		    var RealName = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入姓名'));
	        } else {
		          callback()
		        }
		    };
		    var PhoneNumber = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入电话号码'));
	        } else {
		          if (this.form.phoneNumber!== '') {
		          	//5到17位字符由字母开头、数字及英文符号组合
		          	if (/^(((13[4-9])|147|(15[0-27-9])|178|(18[2-47-8]))[0-9]{8})|((170[356])[0-9]{7})|(((13[0-2])|145|(15[56])|(18[56])|17[16])[0-9]{8})|((170[4789])[0-9]{7})|((133|153|(18[019])|177)[0-9]{8})|((170[0-2])[0-9]{7})$/.test(this.form.phoneNumber)) {
		          		callback();
		          	}else {
		          		 callback(new Error('请输入正确的电话号码'));
		          	}
		          }
		        }
		    };
			return{

				// dialogVisible:false,
				isIndeterminate:false,
				//加载判断
				//主
				judge1:judge1_1,
				//次
				judge2:judge1_2,
				wholes:whole,
				userId:"",
				//三级菜单
				resourcesList:["","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				//二级菜单
				resets:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
				//二级权限加载
				rolesList:[],
				//权限设置
				rolesJudge:false,
				jies:"",
				form:{
					//账户名
					userName:"",
					//账号密码
					password:"",
					//三级权限
					resources:"",
					//部门iD
					department:"",
					//二级权限
					roles:"",
					//真实姓名
					realName:"",
					//性别
					gender:"",
					//邮件
					email:"",
					//电话号码
					phoneNumber:"",
					//图片
					avatarUrl: '',
				},
				rules1: {
					userName: [
			            { validator: UserName, trigger: 'blur' }
			        ],
			        password: [
			            { validator: Password, trigger: 'blur' }
			        ],
			        realName: [
			            { validator: RealName, trigger: 'blur' }
			        ],
			        phoneNumber: [
			            { validator: PhoneNumber, trigger: 'blur' }
			        ],
				},		
			}
		},
		computed:{
	      ...mapState("account",["departmentw","dateuse","dialogVisible","Gataccount"]),
	      dialogVisible: {
		    // getter
		    get: function () {
		    	//account是你状态机名称，dialogVisible是状态机中的值
		     	return this.$store.state.account.dialogVisible
		    },
		    // setter
		    set: function (newValue) {
		      console.log(newValue)
		    }
		  }
	    },
		methods:{
			dengtee(juset){
				//二级权限
		    	juset.forEach((item) => {
					if (item ==="3" || item ==="1") this.judge1.judge3 = true
					if (item ==="4" || item ==="1") this.judge1.judge4 = true
					if (item ==="5" || item ==="1") this.judge1.judge5 = true	
					if (item ==="6" || item ==="1") this.judge1.judge6 = true	
					if (item ==="7" || item ==="1") this.judge1.judge7 = true	
					if (item ==="8" || item ==="1") this.judge1.judge8 = true	
					if (item ==="9" || item ==="1") this.judge1.judge9 = true	
					if (item ==="10" || item ==="1") this.judge1.judge10 = true		
					if (item ==="11" || item ==="1") this.judge1.judge11 = true	
					if (item ==="12" || item ==="1") this.judge1.judge12 = true	
					if (item ==="13" || item ==="1") this.judge1.judge13 = true	
					if (item ==="14" || item ==="1") this.judge1.judge14 = true	
					if (item ==="15" || item ==="1") this.judge1.judge15 = true	
					if (item ==="16" || item ==="1") this.judge1.judge16 = true	
					if (item ==="17" || item ==="1") this.judge1.judge17 = true	
					if (item ==="18" || item ==="1") this.judge1.judge18 = true
					if (item ==="19" || item ==="1") this.judge1.judge19 = true	
					if (item ==="20" || item ==="1") this.judge1.judge20 = true
					if (item ==="21" || item ==="1") this.judge1.judge21 = true
					if (item ==="22" || item ==="1") this.judge1.judge22 = true
					if (item ==="23" || item ==="1") this.judge1.judge23 = true
					if (item ==="24" || item ==="1") this.judge1.judge24 = true
					if (item ==="25" || item ==="1") this.judge1.judge25 = true
					if (item ==="26" || item ==="1") this.judge1.judge26 = true
					if (item ==="27" || item ==="1") this.judge1.judge27 = true
					if (item ==="28" || item ==="1") this.judge1.judge28 = true
					if (item ==="29" || item ==="1") this.judge1.judge29 = true
					if (item ==="30" || item ==="1") this.judge1.judge30 = true
					if (item ==="31" || item ==="1") this.judge1.judge31 = true
					if (item ==="32" || item ==="1") this.judge1.judge32 = true	
					if (item ==="33" || item ==="1") this.judge1.judge33 = true	
					if (item ==="34" || item ==="1") this.judge1.judge34 = true	
					if (item ==="35" || item ==="1") this.judge1.judge35 = true	
					if (item ==="36" || item ==="1") this.judge1.judge36 = true	
					if (item ==="37" || item ==="1") this.judge1.judge37 = true	
					if (item ==="38" || item ==="1") this.judge1.judge38 = true
					if (item ==="39" || item ==="1") this.judge1.judge39 = true		
					if (item ==="40" || item ==="1") this.judge1.judge40 = true	
					if (item ==="41" || item ==="1") this.judge1.judge41 = true		
					if (item ==="42" || item ==="1") this.judge1.judge42 = true				
				});
		    },
			bumen(event){
				var thist = this
				for (let i = 3; i <= 42; i++) {
					this.judge1[`judge${i}`] = false
				}
				this.departmentw.forEach( function(item) {
					if (item.id === event) {
						thist.rolesList = item.adminRoles.split(",")
					}
				});
				this.dengtee(this.rolesList)
			},
			qunxuan(event){
				let buset = []
				let busets = []
				if (this.form.department === 2) {
					buset = ["3","4","5","6","7","8","9","10","11","12","13","14","15","16","26","27","28","29","30","31","32","22","23","35","36","37","38","39","17","18","19","20","24","25","21","40","33","34","41","42","2"]
					busets = ["2","3","4","5","6","7","8","9","10","11","12","13","14","17","18","19","20","26","21","22","23","24","25","27","28","29","30","31","15","16"]
				}else if (this.form.department === 3) {
					buset = ["3","4","5","6","7","8","9","10","11","12","13","14","15","16","","","","","","","","","","","","","","","17","18","19","20","","","21","","","","","","2"]

					busets = ["2","3","4","5","6","7","8","9","10","11","12","13","14","","","","","","","","","","","","","","","","15","16"]
				}
				if (event === "111" ) {
					this.resets = buset
					this.resourcesList = busets
				}else {
					this.resets = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
					this.resourcesList=["","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
				}
			},
			resetLid(){
				let forms={
					userName:"",
					password:"",
					resources:"",
					department:"",
					roles:"",
					realName:"",
					gender:"",
					email:"",
					phoneNumber:"",
					avatarUrl: '',
				}
				this.jies = ""
				this.form =forms
				this.resets =[]
				this.resourcesList= []
			} ,
			getForm(form){
				this.$refs[form].validate((valid) => {
		            if (valid) {
		            	if (this.form.department ==="" && localStorage.department !=="1" ) {
							this.form.department = localStorage.department
						}
						let strings=[]
						let resourcesListji =[]
						this.resets.forEach((item) => {
							if (item !== undefined && item !== "") {
								
								strings.push(item)
							}
						});
						this.resourcesList.forEach((item) => {
							if (item !== undefined && item !== "") {
								resourcesListji.push(item)
							}
						});
						this.form.roles=strings.join(",")
						this.form.resources=resourcesListji.join(",")
						console.log(this.form.roles)
						console.log(this.form.resources)
						if (this.form.roles === "") {
							this.$message({
					          message: '权限不能是空',
					          type: 'warning'
					        });
						}
						else{
							this.SETACCOUNT(this.form)
						}
		            } else {
		            	return false;
		            }
		        });
			},
			handleAvatarSuccess(res, file) {
		        this.form.avatarUrl = URL.createObjectURL(file.raw);
		    },

		    beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		    },
		    departments(){
		    	this.DEPARTMENT()
		    },
		    setDialogVIsible(){
		    	this.DIALOGVIDIBLE()
		    	this.resetLid()
		    },
		    ...mapMutations("account",["DIALOGVIDIBLE"]),
		    ...mapActions("account",["DEPARTMENT","SETACCOUNT"]),
		}
	}
</script>
<style scoped>
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #20a0ff;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	.quanxian{
		margin-bottom: 20px;
	}
	.flxie{
		display: flex;
	}
	.flxie >*{
		margin-right: 10px;
	}
	.p{
		width: 100%;
		text-align: center;
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
		padding-left: 30px;
	}
</style>