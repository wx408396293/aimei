<template>
  <el-row>
    <el-col :span="24">
        <p>发布作品</p>
        <div>
  		    <div class="tematiche">
            <!-- <label>上传作品:</label> -->
            <div class="fleis">
            	<label>上传作品</label>
            	<input type="file" id="zuye" @change="previewFiles"/>
            </div>
          </div>
          <div class="video">
            <video src="" preload="auto" id="video"></video >
          </div>
	        <div  class="tematiche">
	        	<div class="jindu">
	        		<span>上传作品名：{{from.mvsName}}</span>
          		<progress id='progressBar'class="clad" :value='value' :max='max'> </progress>
	        	</div>
          		
          		<el-button
	            size="small"
	            type="danger"
	            @click="">删除</el-button>
            </div>
	        <div class="tematiche">
	          <div class="file" id="Tematichesr">
	          	<label>上传封面</label>
	            <input type="file" id="zuye" @change="previewFile"/>
	          </div>
	          <div>
	          <div class="mian">
	          	<label>作品名</label>
						  <el-input v-model="from.mvname" :maxlength="30" size="small" placeholder="请输入内容"></el-input>
	          </div>
	          <div class="mian">
	          	<label>描述</label>
						  <el-input v-model="from.lable" :maxlength="200" size="small" placeholder="请输入内容"></el-input>
	          </div>
	          <div class="mian">
	          	<label>标签</label>
						  <el-input v-model="from.input" :maxlength="20" size="small" placeholder="请输入内容"></el-input>
	          </div>
	          <div class="mian">
	          	<label>公开/私有</label>
				    	<el-select v-model="from.state" size="small" placeholder="类型"  style="width: 100px">
					        <el-option label="保密" value="0"></el-option>
					        <el-option label="公开" value="1"></el-option>
					    </el-select>
	          </div>
	          </div>
	        </div>
	        <div  class="tematiche">
	           <el-button size="small" @click="getvideo">发布</el-button>
             <div class="">
               <div>
                 
               </div>
             </div>
	        </div>
        </div>
    </el-col>
  </el-row>
</template>
<script>
import Md5 from 'js-md5';
import browserMD5File  from 'browser-md5-file'
import {mapMutations,mapActions, mapState} from "vuex"
  export default {
    name:"PublishWorks",
    components: {
    },
    created(){
    },
    data() {
        return {
          from:{
            mvsName:"",
            mvname:"",
            lable:"",
            input:"",
            //公开还是私有
            state:"",
          }
        };
      },
      computed:{
        ...mapState("publishworks",["content","dialogVisible","url","value","max"]),
        dialogVisible:{
          get:function(){
            return this.$store.state.publishworks.dialogVisible
          },
          set:function(){

          }
        }

      },
    methods: {
      ...mapMutations("publishworks",["uploadPicture","dataURItoBlob","dataURItoBlobs","uploadPictures"]),
      ...mapActions("publishworks",["GETTUPIAN","GETcreater","GETTUPIANS","GETVIDEO"]),
      //上传视频
      previewFiles(event) {
        var thist =this
        let UploadPicture={}
        var file = event.target.files[0];
        console.log(file)
       
        this.mvsName =file.name
        var reader  = new FileReader();
        var readers  = new FileReader();
        readers.onload = function(event) {
          video.src= `${readers.result}`;
         
        };
        reader.onload = function(event) {
          thist.dataURItoBlob(reader.result)
        };
        if (file) {
          readers.readAsDataURL(file);
          reader.readAsArrayBuffer(file)
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
      //上传作品
      getvideo(){
         var video = document.getElementById("video") 
         this.from.videoDuration = Math.ceil(video.duration)
         console.log(typeof parseInt( this.from.state) )
         this.GETVIDEO(this.from)
      },
      //上传图片
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
          thist.dataURItoBlobs(readers.result)
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
          thist.uploadPictures(UploadPicture)
          thist.GETTUPIANS()
        });
      },
    },
    mounted(){
    }
  }
</script>
<style scoped>
  .tematiche{
    display: flex;
    margin-bottom: 20px;
  }
  label{
    width: 80px;
    text-align: right;
  }
  .fleis{
  	height: 30px;
  	width: 100px;
  	position: relative;
  	cursor: pointer;
  }
  .video{
    height: 100px;
    display: none
  }
  .video > video{
    height: 100px;
    width: 100px;
    display: none;
  }
  .fleis >input{
  	position: absolute;
    top: px;
    height: 100%;width: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 101;
  }
  .fleis >label {
  	background-color: #999;
  	display: inline-block;
  	position: absolute;
    top: 0px;
    height: 100%;width: 100%;
    z-index: 100;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
  }
  .file{
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 300px;
    height: 150px;
    position: relative;
    cursor: pointer;
    vertical-align: top;
    background-size:100% 100% ;
    margin-right: 40px;
  }
  .file input{
    position: absolute;
    top: 0px;
    height: 100%;width: 100%;
    opacity: 0;
    cursor: pointer;
  }
  #zuye{
    z-index: 100;
  }
  .file >label{
  	display: inline-block;
  	position: absolute;
    top: 0px;
    height: 100%;width: 100%;
    z-index: 100;
    cursor: pointer;
    text-align: center;
    line-height: 150px;
  }
  .jindu{
  	display: flex;
    justify-content: space-between;
    align-items: center;
  	margin-right: 30px;
  }
  .jindu >span{
    margin-right: 20px;
  }
  .clad{
    height: 18px;
  }
  .mian{
  	display: flex;
  	margin-bottom: 20px;
  }
  .mian > label{
  	margin-right: 20px;
  	text-align: left;
  }
  .button{
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .stert{
    margin-top: 20px;
  }
</style>