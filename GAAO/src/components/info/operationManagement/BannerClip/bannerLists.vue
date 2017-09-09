<!--Banner列表 -->
<template>
	<div>
		<p class="jisp">Banner列表</p>	
	    <div class="div">
			<el-row>
		    	<el-col :span="24">
			    	<el-row>
			    		<el-col :span="24">
							<div class="newButton">
								<el-button  @click="SubmitButton">新建</el-button>
							</div>
			    		</el-col>
			    	</el-row>
			    	<el-row>
			    		<el-col :span="22" class="table">
					    	<el-table
								border
								stripe
							    :data="BannerList"
							    style="width: 100%">
							    <el-table-column
							      prop="id"
							      label="封面图" >
							        <template scope="scope">
								       <img :src="scope.row.coverUrl" class="img" alt="">
							        </template>
							    </el-table-column>
							    <el-table-column
							      prop="type"
							      label="类型"
							      width="140">
							    </el-table-column>
							    <el-table-column
							      prop="title"
							      label="对应名称"
							      width="190">
							    </el-table-column>
							     <el-table-column
							      prop="creatuserName"
							      label="创建人"
							      width="120">
							    </el-table-column>
							     <el-table-column
							      prop="createTime"
							      label="创建时间"
							      width="180">
							    </el-table-column>
							     <el-table-column
							      prop="editoruserName"
							      label="修改人"
							      width="120">
							    </el-table-column>
							     <el-table-column
							      prop="updateTime"
							      label="修改时间"
							      width="180">
							    </el-table-column>
							    <el-table-column
							      prop="dataState"
							      label="状态"
							      width="100">
							    </el-table-column>
							    <el-table-column label="操作" width="280"  fixed="right">
							        <template scope="scope">
							        	<el-button
								            size="small"
								            type="warning"
								            @click="SubmitButton1(scope.row)">编辑</el-button>
								        <el-button
								        	size="small"
								        	type="danger"
								            @click="dialogVisibles(scope.row)">删除</el-button>
								        <el-button
								            size="small"
								            type="info"
								            v-if="scope.row.dataState ==='正常'"
								            @click="disableBannenr(scope.row)">下架</el-button>
								        <el-button
								            size="small"
								            type="info"
								            v-if="scope.row.dataState ==='已下架'"
								            @click="enableBannenr(scope.row)">上架</el-button>
								        <el-button
								            size="small"
								            type="info"
								            @click="biangeng(scope.$index, scope.row)">变更排序</el-button>
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
		    	</el-col>
		    </el-row>
		</div>
	</div>
</template>
<script>
	import {mapMutations,mapActions, mapState} from "vuex"
	import {controlSWITCHone,controlSWITCHone1} from "../../../../store/operationManagement/bannerList.js"
	export default{
		name:"bannerLists",
		created(){
			this.BANNERLIST()
		},
		data(){
			return{
				//排序
				sort:false,
				sorts:"",
				//排序前名次
				sortsFront:"",
				//排序后名次
				sortsAfter :"",
				//排序的条目
				sortsEntry :{},
				// //弹窗输入内容
				// textarea:"",
				// //删除按键判断
				// detejs:null,
			}
		},
		computed:{
	    	...mapState("bannerList",["BannerList"])
	    },
		methods:{
			...mapMutations("bannerList",["controlSWITCHone","controlSWITCHone1"]),
			...mapActions("bannerList",["BANNERLIST","DELETEBANNER","DISABLEBANNER","ENABLEBANNER"]),
			SubmitButton(){
        		this.controlSWITCHone()
        	},
        	SubmitButton1(row){
        		this.controlSWITCHone1(row)
        	},
        	selectList(val) {
		        this.multipleSelection = val;
		        console.log(this.multipleSelection)
		    },
		    //删除
		    dialogVisibles(row){
		    	this.DELETEBANNER(row.id)
		    },
		    //下架
		    disableBannenr(row){
        		this.DISABLEBANNER(row.id)
        	},
        	//上架
		    enableBannenr(row){
        		this.ENABLEBANNER(row.id)
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
		    }
		}
	}
</script>
<style scoped>
	.type{
		display: inline-block;
	}
	.type > label{
		padding-left: 20px;
	}
	.button{
		margin-left: 20px;
	}
	.table{
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.label{
		margin-top: 20px
	}
	.newButton{
		margin-bottom: 20px;
	}
	.img{
		height: 50px;width: 50px;
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