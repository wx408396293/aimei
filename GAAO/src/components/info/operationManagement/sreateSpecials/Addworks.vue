<!--加作品 -->
<template>
	<div class="li">
      <div class="file imagest" id="imagestr">
        <img :src="url" alt="">
        <div class="filest">
        	<p>作品名： {{title}}</p>
        	<p>标签： {{tagst}}</p>
        </div>
      </div>
      <div class="button">
        <el-button size="small" @click="detls">删除</el-button>
       <!--  <el-button size="small" @click="">上移</el-button>
        <el-button size="small" @click="">下移</el-button> -->
      </div>
    </div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
	export default{
		name:"worksList",
		props:["index"],
		components: {
	   		
	    },
		created(){
			this.content.forEach( (item,index) => {
				if (this.index ===index) {
					this.url = item.coverUrl
					this.title = item.title
					this.tagst = item.tagst
				}
			});
			if (this.index === 0) {
				this.shang = false
			}else {
				this.shang = true
			}
			if (this.index ===this.content.length-1) {
				this.xia = false
			}else {
				this.xia = true
			}
		},
		data(){
			return{
				url:"",
				//作品名
				title:"",
				//标签
				tagst:"",
				//id
				ids:"",
				shang:true,
				xia:true
			}
		},
		computed:{
			...mapState("createSpecial",["content"])
	    },
		methods:{
			...mapMutations("createSpecial",["cleartjiazaiList"]),
			detls(){
				this.content.forEach( (item,index) => {
					if (this.index ===index) {
						this.cleartjiazaiList(index)
					}
				});
			},
			//下移
		    Down(event){
		        let position = 0
		        let contentul =document.getElementById("content_ul")
		        // console.log(contentul.childNodes)
		        let button =event.currentTarget
		        //当前文档
		        let currentli = event.currentTarget.parentNode.parentNode
		        //ul去重复
		        let contentulList = this.getChildNodes(contentul)
		        contentulList.forEach( function(item, index) {
		          if (currentli === item) {
		            position =index + 2
		          }
		        });
		        if (position !== (contentulList.length-1)*2) {
		          contentul.insertBefore(currentli,contentulList[position]);
		        }  
		        // console.log(contentul.childNodes)
		      },
		    //上移
		    Move(event){
		        let position = 0
		        let contentul =document.getElementById("content_ul")
		        console.log(contentul.childNodes)
		        let button =event.currentTarget
		        //当前文档
		        let currentli = event.currentTarget.parentNode.parentNode
		        //ul去重复
		        let contentulList = this.getChildNodes(contentul)
		        contentulList.forEach( function(item, index) {
		          if (currentli === item) {
		            position =index - 1
		          }
		        });
		        if (position !== -1) {
		          contentul.insertBefore(currentli,contentulList[position]);
		        }
		        console.log(contentul.childNodes)
		      },
		    //去重
		    getChildNodes(node){
		        var arr = [];
		        var ChildChilds = node.childNodes;
		          for (let i = 0; i < ChildChilds.length; i++) {
		            if (ChildChilds[i].nodeType !== 3 || ChildChilds[i].nodeValue.trim() !== ""  ) {
		              arr.push(ChildChilds[i]);
		            }
		          }
		        return arr;
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
    	display: flex;
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
    .filest{
    	display: flex;flex-direction: column;
    	justify-content:center;
    	height: 150px;
    	width: 150px;
    }
    .filest > p{
    	margin: 0;
    	padding: 10px 10px;
    	font-size: 12px;
    }
    .file >img{
    	height: 150px;
    	width: 150px;
    }
</style>