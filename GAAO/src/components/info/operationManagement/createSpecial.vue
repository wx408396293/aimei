<template>
  <el-row>
    <el-col :span="24">
      <p class="jisp">创建专题</p>
      <div class="div">
        <div class="tematiche">
          <label>专题封面:</label>
          <div class="file" id="Tematichesr">
            <input type="file" id="zuye" @change="previewFile"/>
          </div>
        </div>
        <div  class="tematiche">
          <label>专题名:</label>
           <el-input placeholder="请输入内容" style="width: 300px" :maxlength="48"  v-model="title"></el-input>
        </div>
        <!-- <div  class="tematiche">
          <label>描述:</label>
           <el-input placeholder="请输入内容" style="width: 300px" :maxlength="48"   v-model="description"></el-input>
        </div> -->
        <div  class="tematiche">
          <el-button size="small" type="info" @click="addTextaraa">+ 文字</el-button>
          <el-button size="small"  type="info" @click="Addimagt">+ 图片</el-button>
          <el-button size="small"  type="info" @click="addAdduorks">+ 作品</el-button>
        </div>
        <div class="content">
            <div v-for ="(item, index) in content" :key="index">
                <textaraa v-if="item.type === 0" :index = "index"/>
                <imaget v-if="item.type === 1" :index= "index"/>
                <adduorks v-if="item.type === 2 || item.type === 3" :index = "index" />
            </div>
            <el-dialog
                title="作品选择" size="large"
                :visible.sync="dialogVisible"
                :before-close="handleClose">
                <div class="button">
                  <el-button size="small" @click="worksMethod">精选池</el-button>
                  <el-button size="small" @click="selectedMethod">作品列表</el-button>
                </div>
                <works v-if="worksChoice && !selectedChoice" />
                <selected v-if="!worksChoice && selectedChoice" />
            </el-dialog>
          <el-button class="stert" type="success"size="small"  style="width:70px;font-size:16px"  @click="getspecial" >提交</el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import Md5 from 'js-md5';
import browserMD5File  from 'browser-md5-file'
import {mapMutations,mapActions, mapState} from "vuex"
import textaraa from "./sreateSpecials/textaraa.vue"
import imaget from "./sreateSpecials/image.vue"
import adduorks from "./sreateSpecials/Addworks.vue"
import works from "./addWorks/works.vue"
import selected from "./addWorks/selected.vue"
  export default {
    name:"createSpecial",
    components: {
      textaraa,
      imaget,
      adduorks,
      works,
      selected
    },
    created(){
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
              selectedChoice:false,
              w:0,
              ww:0,
          };
      },
      computed:{
        ...mapState("createSpecial",["content","dialogVisible","url"]),
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
      handleClose(){
        this.dialogVisiblefalse()
      },
      worksMethod(){

      },
      getspecial(){
         if (!this.url) {
            this.$message({
              message: '封面不能为空',
              type: 'warning'
            });
            return
        }
        if (!this.title) {
            this.$message({
              message: '专题名不能为空',
              type: 'warning'
            });
            return
        }
        // if (!this.description) {
        //     this.$message({
        //       message: '描述不能为空',
        //       type: 'warning'
        //     });
        //     return
        // }
        if (this.content.length === 0) {
            this.$message({
              message: '内容不能为空',
              type: 'warning'
            });
            return
        }
        this.GETcreater({
          title:this.title,
          // description:this.description,
        })
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