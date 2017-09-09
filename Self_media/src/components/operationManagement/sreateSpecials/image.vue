<!--加图片 -->
<template>
	<div class="li">
      <div class="file imagest" id="imagestr" >
        <input type="file" id="fenye" @change="previewFile"/>
      </div>
      <div class="button">
        <el-button size="small" @click="detls">删除</el-button>
<!--         <el-button size="small" @click=""  >上移</el-button>
        <el-button size="small" @click="" >下移</el-button> -->
      </div>
    </div>
</template>
<script>
import Md5 from 'js-md5';
import browserMD5File  from 'browser-md5-file'
import {mapMutations,mapActions, mapState} from "vuex"
	export default{
		name:"worksList",
		props:["index"],
		created(){
			 this.$forceUpdate()
			// if (this.index === 0) {
			// 	this.shang = false
			// }else {
			// 	this.shang = true
			// }
			// if (this.index ===this.jiazaiList.length-1) {
			// 	this.xia = false
			// }else {
			// 	this.xia = true
			// }
		},
		data(){
			return{
				textarea:'',
				shang:true,
				xia:true
			}
		},
		computed:{
	    	...mapState("createSpecial",["content","url1"])
	    },
		methods:{
			...mapMutations("createSpecial",["uploadPicture","dataURItoBlob","cleartjiazaiList"]),
			...mapActions("createSpecial",["GETTUPIAN1"]),
			detls(){
				this.content.forEach( (item,index) => {
					if (this.index ===index) {
						this.cleartjiazaiList(index)
					}
				});
			},
			//图片
	        previewFile(event) {
	        	var width,height 
	        	var pjist = document.getElementsByClassName("imagest")
		        var thist =this
		        let UploadPicture={}
		        var file = event.target.files[0];
		        var  readers = new FileReader()
		        var reader  = new FileReader();
		        reader.onload = function(event) {
		        	var Index =thist.index
		        	var image = new Image();
	                image.onload = function () {
	                    width = this.width;
	                    height = this.height;
	                    
		            	browserMD5File(file, function (err, md5) {
				            UploadPicture.md5s = md5
				            UploadPicture.fsize = file.size
				            UploadPicture.fileext = file.type
				            UploadPicture.sign = Md5(`${UploadPicture.md5s}key`)
				            UploadPicture.width = width
		            		UploadPicture.height = height
				            thist.uploadPicture(UploadPicture)
				            thist.GETTUPIAN1(thist.index)
				        });
	                };
	                image.src = event.target.result;
		            // pjist[Index].style.backgroundImage= `url(${reader.result})`;
		        };
		        readers.onload = function(event) {
		          thist.dataURItoBlob(readers.result)
		        };
		        if (file) {
		            reader.readAsDataURL(file);
		            readers.readAsArrayBuffer(file)
	            }
	            var preview = document.getElementById("imagestr")
	      	},
		}
	}
</script>
<style scoped>
.li{
	display: flex;align-items: center;
	margin-bottom: 20px;
}
.button{
    display: flex;
    align-items: center;
    margin-left: 20px;
}
.file{
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 300px;
    height: 150px;
    cursor: pointer;
    vertical-align: top;
    background-size:100% 100% ;
  }
 .file input{
    position: relative;
    top: 0px;
    height: 100%;width: 100%;
    opacity: 0;
    cursor: pointer;
  }
</style>