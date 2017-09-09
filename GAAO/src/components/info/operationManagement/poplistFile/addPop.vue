<template>
	<div>
		<p class="jisp">第{{worksCount}}期流行榜单作品</p>	
	    <div class="div">
			<el-row>
				<el-col :span="24">
					<el-row>
						<el-col :span="24">
							<div class="upload_label">
								<div class="mian">
									<label>流行榜封面</label>
									<div class="file" id="Tematichesr">
							            <input type="file" id="zuye" name="file" @change="previewFile"/>
							        </div>
								</div>
								<div class="mian">
									<label>流行榜标题</label>
									<el-input
									  type="textarea"
									  :rows="2"
									  placeholder="请输入内容"
									  v-model="title">
									</el-input>
								</div>
							</div>
							<div class="upload_label">
								<el-input placeholder="请输入内容" style="width: 240px"  v-model="queryCriteria.type">
								    <el-select slot="prepend" placeholder="查询类型" style="width: 110px" v-model="queryCriteria.typeValue">
								        <el-option label="专题ID" value="专题ID"></el-option>
								        <el-option label="专题名" value="专题名"></el-option>
								        <el-option label="创建人" value="创建人"></el-option>
								    </el-select>
							    </el-input>
							    <div class="type">	
							    	<label>状态</label>
							    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 100px">
								        <el-option label="上架" value="上架"></el-option>
								        <el-option label="下架" value="下架"></el-option>
								    </el-select>
								    <label>类别</label>
							    	<el-select v-model="queryCriteria.typeName" slot="prepend" placeholder="类型" style="width: 100px">
								        <el-option label="用户" value="用户"></el-option>
								        <el-option label="艺人" value="艺人"></el-option>
								    </el-select>
							    </div>
							    <el-button class="button" type="primary" @click="QueryCriteria">查询</el-button>
								<el-button type="danger" @click="reset">清除</el-button>
							</div>
							<el-row>
					    		<el-col :span="18" class="table">
							    	<el-table
										border
										stripe
									    :data="audioMaterial"
									    style="width: 100%">
									    <el-table-column
									      prop="id"
									      label="作品ID"
									      width="100">
									    </el-table-column>
									    <el-table-column
									      prop="materialName"
									      label="作品名"
									      width="100">
									    </el-table-column>
									    <el-table-column
									      prop="type"
									      label="类型(minik/原创)"
									      width="180">
									    </el-table-column>
									     <el-table-column
									      prop="releaseName"
									      label="发布用户"
									      width="110">
									    </el-table-column>
									     <el-table-column
									      prop="releaseDate"
									      label="发布时间"
									      width="180">
									    </el-table-column>
									     <el-table-column
									      prop="information"
									      label="地理位置"
									      width="100">
									    </el-table-column>
									     <el-table-column
									      prop="publiCworks"
									      label="机器信息(minik信息/无)"
									      width="200">
									    </el-table-column>
									    <el-table-column label="操作" width="200%">
									        <template scope="scope">
										        <el-button
										            size="small"
										            @click="biangeng(scope.$index, scope.row)">变更排序</el-button>
										        <el-button
										            size="small"
										            @click="biangeng(scope.$index, scope.row)">撤销排序</el-button>
									        </template>
									    </el-table-column>
									</el-table>
									<!-- 排序提提示 -->
									<el-dialog
										v-if=""
										title="排序提示"
										:visible.sync="sort"
										size="tiny">
										<label>将该条数据排序到第：</label>
										 <el-input placeholder="请输入内容" style="width: 100px"  v-model="sorts"></el-input>
										 <label>名</label>
										<span slot="footer" class="dialog-footer">
										    <el-button @click="sort = false">取 消</el-button>
										    <el-button type="primary" @click="sortsMethod ">确 定</el-button>
										</span>
									</el-dialog>
						    	</el-col>
							</el-row> 		
				    		<el-row>
						    	<el-col :span="18" class="table">
						    		<el-pagination
								        @size-change="handleSizeChange"
								        @current-change="handleCurrentChange"
								        :current-page="currentPage"
								        :page-size="10"
								        layout="prev, pager, next, jumper"
								        :total="100">
								    </el-pagination>
						    	</el-col>
				    		</el-row>
						</el-col>
					</el-row>
					<el-button size="small" @click="SubmitButton">提交</el-button>
					<el-button size="small" @click="cancelButton">取消</el-button>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	//MD5
	import Md5 from 'js-md5';
	import browserMD5File  from 'browser-md5-file'

	import {mapMutations,mapActions, mapState} from "vuex"
	import {SWITCHtwo} from "../../../../store/operationManagement/popList.js"
	export default{
		name:"selectedList",
    	//当未插入到HTML中对数据进行处理
		beforeMount(){
			this.title = this.getPopList.title
			this.coverUrl = this.getPopList.coverUrl
			this.id = this.getPopList.id
		},
		mounted(){
			let preview = document.getElementById("Tematichesr")
			preview.style.backgroundImage= `url(${this.coverUrl})`;
		},
		data(){
			return{
				imageUrl: '',
				 //查询条件
				queryCriteria:{
					type:"",
					typeValue:"",
					typeName:"",
					sharedState:"",
					grade:"",
					platform:"",
					nameType:""
				},
				//当前页
				currentPage:1,
				//弹出框设置
				dialogVisible: false,
				//排序
				sort:false,
				sorts:"",
				//排序前名次
				sortsFront:"",
				//排序后名次
				sortsAfter :"",
				//排序的条目
				sortsEntry :{},
				//弹窗输入内容
				textarea:"",
				audioMaterial:[{
					id:"1",
					materialName:"素材1",
					type:"原创",
					releaseName:"用户1",
					releaseDate:"2017-8-1 15:36:26",
					sharedState:"是",
					publiCworks :"是",
					position:"四川",
					information:"成都",
					just:"上架",
					akes:"用户"
				}],
				//提交数据
				title:"",
				coverUrl:"",
				id:"",

			}
			
		},
		computed:{
	    	...mapState("popList",["getPopList","url"]),
	    	worksCount:{
		      	get(){
		      		return this.$store.state.popList.getPopList.worksCount
		      	},
		      	set(){}
		    },
	    },
		methods:{
			...mapMutations("popList",["SWITCHtwo","uploadPicture","dataURItoBlob","setAddPop"]),
			...mapActions("popList",["GETTUPIAN","EDITPOP"]),
			handleSizeChange(val) {
        		console.log(`每页 ${val} 条`);
        	},
        	handleCurrentChange(val) {
        		console.log(`当前页: ${val}`);
        	},
        	SubmitButton(){
        		if (this.url !== "") this.coverUrl = this.url
        		
        		if (this.coverUrl === "") {
		    		this.$message({
			          showClose: true,
			          message: '没有流行榜封面不能发布',
			          type: 'warning'
			        });
			       	return
		    	}
		    	if (this.title === "") {
		    		this.$message({
			          showClose: true,
			          message: '没有标题',
			          type: 'warning'
			        });
			       	return
		    	}
		    	this.EDITPOP({
		    		coverUrl:this.coverUrl,
		    		title:this.title,
		    		id:this.id
		    	})
        	},
        	cancelButton(){
        		this.title = ""
        		this.setAddPop()
        		this.SWITCHtwo()
        	},
		    QueryCriteria(){
        		console.log(this.queryCriteria)
        	}, 
        	reset(){
        		let qreryCriterias={
					type:"",
					typeValue:"",
					typeName:"",
					sharedState:"",
				}
				this.queryCriteria = qreryCriterias
        	},
        	 biangeng(index,row){
		    	this.sortsFront = index
		    	this.sortsEntry = row
		    	this.sort = true
		    	// this.audioMaterial.splice(3,0,row)
		    	// console.log(index,row)
		    },
        	sortsMethod(){
		    	this.audioMaterial.splice(`parseInt(this.sorts)-1`,0,this.sortsEntry)
		    	this.sort = false
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
		justify-content: flex-end;
	}
	.mian{
		display: flex;
		margin-right: 30px;
		width: 450px;
	}
	.mian > label{
		white-space: nowrap;
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