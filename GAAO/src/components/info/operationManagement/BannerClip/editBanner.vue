<template>
	<div>
		<p class="jisp">编辑Banner</p>	
	    <div class="div">
			<el-row>
				<el-col :span="24">
					<div class="label">
						<label>类型</label>
				    	<el-select v-model="type" slot="prepend" placeholder="类型" style="width: 100px" size="small" @change="changeMethod">
					         <el-option label="专题" value="专题"></el-option>
					        <el-option label="作品" value="作品"></el-option>
					        <el-option label="艺人" value="艺人"></el-option>
					    </el-select>
					</div>
					<el-row>
						<el-col :span="24">
							<div class="upload_label">
								<label>流行榜封面</label>
								<div class="file" id="Tematichesr">
						            <input type="file" id="zuye" name="file" @change="previewFile"/>
						        </div>
							</div>
						</el-col>
					</el-row>
					<el-row class="label">
						<el-col :span="24">
							<label>内容</label>
							<el-button size="small" @click="addBanners" :disabled="addbanner" v-if="!controlButton">添加</el-button>
							<el-row v-if="controlButton">
								<el-col :span="16" v-if="specialList && !worksList && !artistList">
									<el-table
										border
										stripe
									    :data="centent"
									    style="width: 100%">
									    <el-table-column
									      prop="coverUrl"
									      label="专题封面" >
									      <template scope="scope">
										       <img :src="scope.row.coverUrl" class="img" alt="">
									        </template>
									    </el-table-column>
									    <el-table-column
									      prop="id"
									      label="专题ID"
									      width="100">
									    </el-table-column>
									    <el-table-column
									      prop="title"
									      label="专题名"
									      width="100">
									    </el-table-column>
									     <el-table-column
									      prop="createuserName"
									      label="创建人"
									      width="110">
									    </el-table-column>
									     <el-table-column
									      prop="type"
									      label="创建人类别"
									      width="160">
									    </el-table-column>
									     <el-table-column
									      prop="createTime"
									      label="创建时间"
									      width="100">
									    </el-table-column>
									     <el-table-column
									      prop="cmsEditoruserName"
									      label="修改人"
									      width="100">
									    </el-table-column>
									    <el-table-column
									      prop="updateTime"
									      label="修改时间"
									      width="100">
									    </el-table-column>
									    <el-table-column
									      prop="dataState"
									      label="状态"
									      width="100">
									    </el-table-column>
									    <el-table-column label="操作" width="100%"  fixed="right">
									        <template scope="scope">
									            <el-button size="small" @click="deleteButton">删除</el-button>
									        </template>
									    </el-table-column>
									</el-table>
								</el-col>
								<el-col :span="24" class="table" v-if="!specialList && worksList && !artistList">
							    	<el-table
										<el-table
										border
										highlight-current-row
									    :data="centent"
									    style="width: 100%">
									    <el-table-column
									      prop="id"
									      label="作品ID"
									       width="120">
									    </el-table-column>
									    <el-table-column
									      prop="title"
									      label="作品名"
									      width="120">
									    </el-table-column>
									    <el-table-column
									      prop="userName"
									      label="发布用户"
									      width="120">
									    </el-table-column>
									     <el-table-column
									      prop="releaseTime"
									      label="发布时间"
									      width="150">
									    </el-table-column>
									     <el-table-column
									      prop="type"
									      label="视频/音频"
									      width="120">
									    </el-table-column>
									     <el-table-column
									      prop="tagst"
									      label="标签"
									     width="120">
									    </el-table-column>
									     <el-table-column
									      prop="type"
									      label="地理位置"
									      width="120">
									    </el-table-column>
									    <el-table-column
									      prop="description"
									      label="描述"
									       width="120">
									    </el-table-column>
									    <el-table-column
									      prop="audioName"
									      label="音频素材"
									      width="180">
									    </el-table-column>
									    <el-table-column
									      prop="state"
									      label="公开/私密"
									       width="120">
									    </el-table-column>
									    <el-table-column
									      prop="play"
									      label="播放数"
									       width="120">
									    </el-table-column>
									    <el-table-column
									      prop="store"
									      label="收藏数"
									       width="120">
									    </el-table-column>
									    <el-table-column
									      prop="comment"
									      label="评论数"
									      width="120">
									    </el-table-column>
									    <el-table-column
									      prop="forward"
									      label="转发数"
									      width="120">
									    </el-table-column>
									    <el-table-column
									      prop="videoAppVersion"
									      label="APP版本"
									      width="120">
									    </el-table-column>
									    <el-table-column
									      prop="videoAppOs"
									      label="移动平台"
									       width="120">
									    </el-table-column>
									    <el-table-column
									      prop="dataState"
									      label="状态"
									      width="120">
									    </el-table-column>
									    <el-table-column label="操作" width="100"  fixed="right">
									        <template scope="scope">
										        <el-button
										          size="small"
										          @click="deleteButton">删除</el-button>
									        </template>
									    </el-table-column>
									</el-table>
						    	</el-col>
						    	<el-col :span="18"  class="table" v-if="!specialList && !worksList && artistList">
					    			<el-table
										border
									    :data="centent"
									    style="width: 100%">
									    <el-table-column
									      prop="headPortrait"
									      label="头像"
									      width="100%">
									        <template scope="scope">
										       <img :src="scope.row.avatarUrl" class="img" alt="">
									        </template>
									    </el-table-column>
									    </el-table-column>
									    <el-table-column
									      prop="userId"
									      label="用户ID"
									      width="100%">
									    </el-table-column>
									    <el-table-column
									      prop="userName"
									      label="用户名"
									      width="100%">
									    </el-table-column>
									     <el-table-column
									      prop="gender"
									      label="性别"
									      width="100%">
									    </el-table-column>
									     <el-table-column
									      prop="phoneNumber"
									      label="手机号"
									      width="130%">
									    </el-table-column>
									     <el-table-column
									      prop="bio"
									      label="签名"
									      width="100%">
									    </el-table-column>
									     <el-table-column
									      prop="createTime"
									      label="注册时间"
									      width="170%">
									    </el-table-column>
									    <el-table-column
									      prop="updateTime"
									      label="上次登录时间"
									      width="170%">
									    </el-table-column>
									    <el-table-column
									      prop="identity"
									      label="身份"
									      width="100%">
									    </el-table-column>
									    <el-table-column
									      prop="userLevel"
									      label="用户等级"
									      width="100%">
									    </el-table-column>
									    <el-table-column label="操作" width="100%" fixed="right">
									        <template scope="scope">
										        <el-button
										          size="small"
										          @click="deleteButton">删除</el-button>
									        </template>
									    </el-table-column>
									</el-table>
					    		</el-col>
							</el-row>
								
						</el-col>
					</el-row>
					<el-dialog
						title="添加内容" size="large"
						:visible.sync="popControl">
						<special v-if="specialList && !worksList && !artistList" :popControl="popControl" @PopController="getdialogVisibles"/>
						<works v-if="!specialList && worksList && !artistList"  :popControl="popControl" @PopController="getdialogVisibles"/>
						<artist v-if="!specialList && !worksList && artistList" :popControl="popControl" @PopController="getdialogVisibles"/>
					</el-dialog>
					<el-button size="small" @click="getBanner">确定修改</el-button>
					<el-button size="small" @click="cancelButton">取消</el-button>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script> 
	import {mapMutations,mapActions, mapState} from "vuex"
	import {SWITCHone,SWITCHtwo, SWITCHthree} from "../../../../store/operationManagement/addBanner.js"
	import {controlSWITCHtwo} from "../../../../store/operationManagement/bannerList.js"
	import special from "./BannerClass/special.vue"
	import works from "./BannerClass/works.vue"
	import artist from "./BannerClass/artist.vue"
	//时间转换
	import getLocalTime from "../../../../store/getLocalTimes.js"

	//MD5
	import Md5 from 'js-md5';
	import browserMD5File  from 'browser-md5-file'
	export default{
		name:"selectedList",

		//当未插入到HTML中对数据进行处理
		beforeMount(){
			var obj ={}
			this.type = this.EDITBanner.type
			//选择的数据进行渲染
			if (this.type !=="") {
		    		this.addbanner = false
		    	}	

			if (this.type ==="专题") {
				this.getControlButton()
				this.SWITCHone()
				console.log(this.EDITBanner)
				let obj ={
					//图片
					coverUrl:this.EDITBanner.topicInfo.coverUrl,
					//专题id
					id:this.EDITBanner.topicInfo.id,
					//创建时间
					createTime:getLocalTime(this.EDITBanner.topicInfo.createTime),
					//专题名
					title:this.EDITBanner.topicInfo.title,
					//创建人
					createuserName:this.EDITBanner.topicInfo.cmsCreatorInfo.userName,
					//修改人
					cmsEditoruserName:this.EDITBanner.topicInfo.cmsEditorInfo === undefined ? "" :this.EDITBanner.topicInfo.cmsEditorInfo.userName,
					//修改时间
					updateTime:getLocalTime(this.EDITBanner.topicInfo.updateTime),
					//状态
					//0删除，1已下架2正常
					dataState:this.EDITBanner.topicInfo.dataState === 0 ? "已删除" : this.EDITBanner.topicInfo.dataState === 1? "已下架" : "正常",
					//类别
					//0是后台1自媒体
					type:this.EDITBanner.topicInfo.type === 0 ? "后台" : "自媒体",
				}
				this.getCemtent(obj)
			}
			if (this.type ==="作品") {
				let obj ={
					//作品id
					id : this.EDITBanner.worksInfo.id,
					//作品名
					title : this.EDITBanner.worksInfo.title,
					//发布用户
					userName : this.EDITBanner.worksInfo.userBaseInfo.userName,
					// avatarUrl: item.userBaseInfo.avatarUrl,
					// userId: item.userBaseInfo.userId,
					//发布时间
					releaseTime : getLocalTime(this.EDITBanner.worksInfo.releaseTime),
					//视频/音频0视频1是音频
					type : this.EDITBanner.worksInfo.type === 0 ?  "视频" : "音频",
					//标签
					tags:this.EDITBanner.worksInfo.tags === undefined ? [] : this.EDITBanner.worksInfo.tags ,
					//地理位置
					// address : item.
					//描述
					description : this.EDITBanner.worksInfo.description,
					//音频素材
					audioName : this.EDITBanner.worksInfo.type === 0 ? this.EDITBanner.worksInfo.videoInfo.audioInfo.audioName : this.EDITBanner.worksInfo.audioInfo.audioInfo.audioName,
					//公开/私有0私有1公开
					state : this.EDITBanner.worksInfo.state === 0 ? "私有" : "公开",
					//播放次数
					play : this.EDITBanner.worksInfo.type === 0 ? this.EDITBanner.worksInfo.videoInfo.scoreInfo.play : this.EDITBanner.worksInfo.audioInfo.scoreInfo.play,
					//收藏数
					store : this.EDITBanner.worksInfo.type === 0 ? this.EDITBanner.worksInfo.videoInfo.scoreInfo.store : this.EDITBanner.worksInfo.audioInfo.scoreInfo.store,
					//评价数
					comment : this.EDITBanner.worksInfo.type === 0 ? this.EDITBanner.worksInfo.videoInfo.scoreInfo.comment : this.EDITBanner.worksInfo.audioInfo.scoreInfo.comment,
					//转发数
					forward : this.EDITBanner.worksInfo.type === 0 ? this.EDITBanner.worksInfo.videoInfo.scoreInfo.forward : this.EDITBanner.worksInfo.audioInfo.scoreInfo.forward, 
					//App版本 视频有，音频没有
					videoAppVersion : this.EDITBanner.worksInfo.type === 0 ? this.EDITBanner.worksInfo.videoInfo.videoAppVersion : "", 
					//移动平台 视频有，音频没有
					videoAppOs: this.EDITBanner.worksInfo.type === 0 ? this.EDITBanner.worksInfo.videoInfo.videoAppOs === 0 ? "Android" : "IOS" : "", 
					//状态o已删除1冻结2正常
					dataState : this.EDITBanner.worksInfo.dataState === 0 ? "已删除" :  this.EDITBanner.worksInfo.dataState === 1 ? "冻结" : "正常",
					//作品
					worksId : this.EDITBanner.worksInfo.type === 0 ?  this.EDITBanner.worksInfo.videoInfo.worksId : this.EDITBanner.worksInfo.audioInfo.worksId, 
					//作品图片
					urlCover:this.EDITBanner.worksInfo.urlCover,
					userBaseInfo:this.EDITBanner.worksInfo.userBaseInfo
				}
				let arr =[]
				obj.tags.forEach((element) => {
					arr.push(element.name)
				});
				obj.tagst = arr.join(",")
				this.getControlButton()
				this.SWITCHtwo()
				this.getCemtent(obj)
			}
			if (this.type ==="艺人") {
				let obj={	
					//头像
					avatarUrl:this.EDITBanner.userInfo.avatarUrl,
					//用户ID
					userId:this.EDITBanner.userInfo.userId,
					//用户名
					userName:this.EDITBanner.userInfo.userId,
					//性别0未知1男2女
					gender:this.EDITBanner.userInfo.gender === 0 ? "未知" : this.EDITBanner.userInfo.gender === 1 ? "男" : "女",
					//用户名
					userName:this.EDITBanner.userInfo.userName,
					//手机号
					phoneNumber:this.EDITBanner.userInfo.phoneNumber,
					//签名。可能有可能没有
					bio:this.EDITBanner.userInfo.bio === undefined ? "" : this.EDITBanner.userInfo.bio,
					//注册时间
					createTime: getLocalTime(this.EDITBanner.userInfo.createTime),
					//上次登录时间
					updateTime:getLocalTime(this.EDITBanner.userInfo.updateTime),
					//身份
					//用户等级
				}
				this.getControlButton()
				this.SWITCHthree()
				this.getCemtent(obj)
			}
		},
		mounted(){

			let preview = document.getElementById("Tematichesr")
			preview.style.backgroundImage= `url(${this.EDITBanner.coverUrl})`;
			this.GETURL(this.EDITBanner.coverUrl)
		},
		components: {
			special,
			works,
			artist
		},
		computed:{
	      ...mapState("addBanner",["specialList","worksList","artistList","dialogVisible","centent","controlButton","url"]),
	      ...mapState("bannerList",["EDITBanner"])
	    },
		data(){
			return{
				imageUrl: '',
				 //查询条件
				type:"",
				//添加按键
				addbanner:true,
				//弹窗控制
				popControl:false,
				dialogVisibles:false,
			}
		},
		methods:{
			...mapActions("addBanner",["GETUPLOADIP","GETTUPIAN","GETBNANER"]),
			...mapMutations("addBanner",["SWITCHone","SWITCHtwo","SWITCHthree","SWITCHDELETE","uploadPicture","dataURItoBlob","setControlButton","setCentent","GETURL","getControlButton","getCemtent"]),
			...mapMutations("bannerList",["controlSWITCHtwo"]),
        	handleAvatarSuccess(res, file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		    },
		    getdialogVisibles(data){
		    	this.popControl =data
		    },
		    changeMethod(){
		    	this.setControlButton()
		    	this.setCentent()
		    	if (this.type !=="") {
		    		this.addbanner = false
		    	}
		    },
		    addBanners(){
		    	this.popControl = true
		    	// this.ControlButton()
		    	switch(this.type) {
		    		case "专题":
		    			this.SWITCHone()
		    			break;
		    		case "作品":
		    			this.SWITCHtwo()
		    			break;
		    		case "艺人":
		    			this.SWITCHthree()
		    			break;
		    	}
		    },
		    //删除
		    deleteButton(){
		    	this.setCentent()
		    	this.setControlButton()
		    },
		    getBanner(){
		    	console.log(this.type)
		    	var preview = document.getElementById("Tematichesr")
		    	let id = null

		    	if (this.type === "") {
		    		this.$message({
			          showClose: true,
			          message: '请选择类型',
			          type: 'warning'
			        });
			       	return
		    	}
		    	if (this.url === "") {
		    		this.$message({
			          showClose: true,
			          message: '请选择图片',
			          type: 'warning'
			        });
			       	return
		    	}
		    	if (this.centent.length === 0) {
		    		this.$message({
			          showClose: true,
			          message: '请选择内容',
			          type: 'warning'
			        });
			       	return
		    	}
		    	if (this.centent[0].id !== undefined && this.centent[0].userId ===undefined) {
						id = this.centent[0].id
				}
				if (this.centent[0].id === undefined && this.centent[0].userId !==undefined) {
					id = this.centent[0].userId
				}
				if (this.type === "艺人") {this.type = 0}
				if (this.type === "作品") {this.type = 1}
				if (this.type === "专题") {this.type = 2}
		    	this.GETBNANER({
		    		type:this.type,
		    		contentId:id,
		    		coverUrl:this.url,
		    	})
		    	this.setCentent()
		    	this.type =""
		    	preview.style.backgroundImage= "";
		    	this.SWITCHDELETE()
		    	this.controlSWITCHtwo()
		    },
		    //取消
		    cancelButton(){
		    	let preview = document.getElementById("Tematichesr")
		    	this.setCentent()
		    	this.type =""
		    	preview.style.backgroundImage= "";
		    	this.SWITCHDELETE()
		    	this.controlSWITCHtwo()
		    },


		    //图片上传
		    previewFile(event) {
        		var thist =this
        	    let UploadPicture={}
		        var file = event.target.files[0];
		      	var  readers = new FileReader()
		      	var reader  = new FileReader();
				reader.onload = function(event) {
					preview.style.backgroundImage= `url(${reader.result})`;
				};
				readers.onload = function(event) {
					thist.dataURItoBlob(readers.result)
				};
				if (file) {
		        	reader.readAsDataURL(file);
		      		readers.readAsArrayBuffer(file)
		        }
		      	var preview = document.getElementById("Tematichesr")
		      	browserMD5File(file, function (err, md5) {
				    UploadPicture.md5s = md5
				    UploadPicture.fsize = file.size
		      		UploadPicture.fileext = file.type
		      		UploadPicture.sign = Md5(`${UploadPicture.md5s}key`)
		      		thist.uploadPicture(UploadPicture)
		      		thist.GETTUPIAN()
				});
			      	
			},
		}
	}
</script>
<style scoped>
	.file,.centent{
	    background-color: #fbfdff;
	    border: 1px dashed #c0ccda;
	    border-radius: 6px;
	    box-sizing: border-box;
	    width: 300px;
	    height: 150px;
	    cursor: pointer;
	    line-height: 146px;
	    vertical-align: top;
	    background-size:100% 100% ;
    }
    .file input{
	    position: relative;
	    top: -70px;
	    height: 100%;width: 100%;
	    opacity: 0;
	    cursor: pointer;
	}
	.center{
		margin-top: 20px;
		text-align: center;
	}
	.label{
		margin-bottom: 20px;
	}
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
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .upload_label{
  	display: flex;
  	margin-bottom: 20px;
  }
  .upload_label >*{
  	margin-right: 20px;
  }
  .upload_label >label{
  	margin-right: 20px;
  }
  .table{
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.img{
		height: 50px;width: 50px;margin-top: 6px;
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