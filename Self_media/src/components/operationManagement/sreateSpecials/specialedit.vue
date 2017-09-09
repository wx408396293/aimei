<template>
  <el-row>
    <el-col :span="24">
      <p>修改专题</p>
      <div>
        <div class="tematiche">
          <label>专题封面:</label>
          <div class="file" id="Tematichesr">
            <input type="file" id="zuye" @change="previewFile"/>
          </div>
        </div>
        <div  class="tematiche">
          <label>专题名:</label>
           <el-input placeholder="请输入内容" style="width: 300px"  v-model="title"></el-input>
        </div>
        <div  class="tematiche">
          <label>描述:</label>
           <el-input placeholder="请输入内容" style="width: 300px"  v-model="description"></el-input>
        </div>
        <div  class="tematiche">
          <el-button size="small" @click="addTextaraa">+ 文字</el-button>
          <el-button size="small" @click="Addimagt">+ 图片</el-button>
          <el-button size="small" @click="addAdduorks">+ 作品</el-button>
        </div>
        <div class="content">
            <div v-for ="(item, index) in content" key="index">
                <textaraa v-if="item.type === 0" :index = "index"/>
                <imaget v-if="item.type === 1" :index= "index"/>
                <adduorks v-if="item.type === 2" :index = "index" />
            </div>
            <el-dialog
                title="作品选择" size="large"
                :visible.sync="dialogVisible"
                :before-close="handleClose">
                <selected/>
            </el-dialog>
          <el-button class="stert" size="small" type="primary"  @click="getspecial" >修改</el-button>
           <el-button class="stert" size="small" type="primary"  @click="cancel" >取消</el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import Md5 from 'js-md5';
import browserMD5File  from 'browser-md5-file'
import {mapMutations,mapActions, mapState} from "vuex"
import textaraa from "./textaraa.vue"
import imaget from "./image.vue"
import adduorks from "./Addworks.vue"
import selected from "../addWorks/selected.vue"
  export default {
    name:"specialedit",
    components: {
      textaraa,
      imaget,
      adduorks,
      selected
    },
    created(){
      console.log(this.cmsCreatorlist)
    },
    data() {
        return {
              //专题名
              title:"",
              //描述
              description:"",
              type:0,
              id:0,
              //作品
              worksChoice:true,
              selectedChoice:false
          };
      },
      computed:{
        ...mapState("createSpecial",["content","dialogVisible","url"]),
        ...mapState("specialList",["cmsCreatorlist"]),
        dialogVisible:{
          get:function(){
            return this.$store.state.createSpecial.dialogVisible
          },
          set:function(){

          }
        }

      },
    methods: {
      ...mapMutations("createSpecial",["uploadPicture","dataURItoBlob","AddjiazaiList","dialogVisibletrue","dialogVisiblefalse","Addimages"]),
      ...mapActions("createSpecial",["GETTUPIAN","GETcreater"]),
      ...mapMutations("specialList",["editfalse"]),
      handleClose(){
        this.dialogVisiblefalse()
      },
      worksMethod(){

      },
      //确定修改
      getspecial(){
        this.editfalse()
        this.GETcreater({
          title:this.title,
          description:this.description,
        })
      },
      //取消
      cancel(){
        this.editfalse()
      },
      selectedMethod(){

      },
      //添加文字
      addTextaraa(){
        this.AddjiazaiList()
      },
      //添加图片
      Addimagt(){
        let type= 1
        this.Addimages()
      },
      //添加作品
      addAdduorks(){
        this.dialogVisibletrue()
      },
      //专题图片
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
      //添加作品
      worksMethod(){
        this.worksChoice = true
            this.selectedChoice = false
      },
      selectedMethod(){
        this.worksChoice = false
            this.selectedChoice = true
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
  .file{
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
   /*  width: 300px; */
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
  .button{
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .stert{
    margin-top: 20px;
  }
</style>