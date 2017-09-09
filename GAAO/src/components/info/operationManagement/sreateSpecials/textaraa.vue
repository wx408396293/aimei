<!--加文字 -->
<template>
	<div class="li">
		<div class="imagest">
        	<el-input type="textarea" :rows="2" style="width: 300px" :maxlength="200"  placeholder="请输入内容" @blur="addtext" v-model="textarea"></el-input>
        </div>
        <div class="button">
	        <el-button size="small" @click="detls">删除</el-button>
	       <!--  <el-button size="small" @click="Move($event)" v-if="shang">上移</el-button>
	        <el-button size="small" @click="Down($event)" v-if= "xia">下移</el-button> -->
      </div>
    </div>
</template>
<script>
import {mapMutations,mapActions, mapState} from "vuex"
	export default{
		name:"worksList",
		props:["index"],
		created(){
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
	    	...mapState("createSpecial",["content"])
	    },
		methods:{
			...mapMutations("createSpecial",["cleartjiazaiList","shangye","addtexts"]),
			detls(){
				console.log(this.index)
				this.content.forEach( (item,index) => {
					if (this.index ===index) {
						this.cleartjiazaiList(index)
					}
				});
			},
			addtext(){
				this.addtexts({
					index:this.index,
					textarea:this.textarea

				})
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
		    	if (this.index !== 0) {
		    		this.shangye(this.index)
		    	}
		    	

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
</style>