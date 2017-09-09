<template>
	<div>
		<p class="jisp">创建礼物</p>	
	    <div class="div">
			<el-row>
				<el-col :span="24">
					<el-row>
						<el-col :span="24">
							<div class="upload_label">
								<label>礼物图片</label>
								<div class="file" id="Tematichesr">
						            <input type="file" id="zuye" name="file" @change="previewFile"/>
						        </div>
							</div>
							<div class="upload_label1 upload_label">
								<label>礼物名称</label>
								<el-input v-model="input" placeholder="请输入内容" size="small" style="width:180px;"></el-input>
							</div>
							<div class="upload_label1 upload_label">
								<label>支付类型</label>
								<el-select v-model="typeName" slot="prepend" placeholder="类型" style="width: 100px" size="small" @change="changeMethod($event)">
							        <el-option label="专题" value="专题"></el-option>
							    </el-select>
							</div>
							<div class="upload_label1 upload_label">
								<label>礼品价格</label>
							    <el-input v-model="money" placeholder="请输入内容" size="small" style="width:180px;"></el-input>
							</div>
							<div class="upload_label1 upload_label">
								<label>礼品分</label>
							    <el-input v-model="branch" placeholder="请输入内容" size="small" style="width:180px;"></el-input>
							</div>
						</el-col>
					</el-row>

					<el-button size="small" @click="">提交</el-button>
					<el-button size="small" @click="">取消</el-button>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script> 
import {mapMutations,mapActions, mapState} from "vuex"
import {GETUPLOADIP,GETTUPIAN} from "../../../store/giftManagement/addgift.js"

//MD5
import Md5 from 'js-md5';
import browserMD5File  from 'browser-md5-file'
	export default{
		name:"addGift",
		created(){
      		// this.GETUPLOADIP()
    	},
		data(){
			return{
				imageUrl: '',
				input:"",
				typeName:"",
				money:"",
				branch:""
			}
		},
		computed:{
	    	...mapState("addgift",[])

	    },
		methods:{
			...mapActions("addgift",["GETUPLOADIP","GETTUPIAN"]),
			...mapMutations("addgift",["uploadPicture","dataURItoBlob"]),
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
		    changeMethod(event){
		    	console.log(event)
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
	.upload_label{
	  	display: flex;
	  	margin-bottom: 20px;
	}
	.upload_label1{
	  	align-items: center;
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