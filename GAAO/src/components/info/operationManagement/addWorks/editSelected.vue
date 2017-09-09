<template>
	<div>
		<p class="jisp">编辑精选</p>	
	    <div class="div">
			<el-row>
				<el-col :span="24">
					<el-row>
						<el-col :span="14">
							<label>发布时间</label>
							<el-date-picker
						      v-model="value2"
						      align="right"
						      placeholder="选择日期"
						      :picker-options="pickerOptions0">
						    </el-date-picker>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24">
							<el-button size="small" @click="dialogVisible=true">+ 作品</el-button>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24">
							<el-table
								border
								stripe
								highlight-current-row
							    :data="SelectedsLIST"
							    style="width: 100%">
							    <el-table-column
							      prop="opusId"
							      label="作品ID"
							      width="auto">
							    </el-table-column>
							    <el-table-column
							      prop="title"
							      label="作品名"
							      width="auto">
							    </el-table-column>
							    <el-table-column
							      prop="userName"
							      label="发布用户"
							      width="auto">
							    </el-table-column>
							     <el-table-column
							      prop="releaseTime"
							      label="发布时间"
							      width="auto">
							    </el-table-column>
							     <el-table-column
							      prop="type"
							      label="视频/音频"
							      >
							    </el-table-column>
							     <el-table-column
							      prop="tagst"
							      label="标签"
							     >
							    </el-table-column>
							     <el-table-column
							      prop="type"
							      label="地理位置"
							     >
							    </el-table-column>
							    <el-table-column
							      prop="description"
							      label="描述"
							      >
							    </el-table-column>
							    <el-table-column
							      prop="audioName"
							      label="音频素材"
							     >
							    </el-table-column>
							    <el-table-column
							      prop="state"
							      label="公开/私密"
							      >
							    </el-table-column>
							    <el-table-column
							      prop="play"
							      label="播放数"
							      >
							    </el-table-column>
							    <el-table-column
							      prop="store"
							      label="收藏数"
							      >
							    </el-table-column>
							    <el-table-column
							      prop="comment"
							      label="评论数"
							     >
							    </el-table-column>
							    <el-table-column
							      prop="forward"
							      label="转发数"
							     >
							    </el-table-column>
							    <el-table-column
							      prop="videoAppVersion"
							      label="APP版本"
							     >
							    </el-table-column>
							    <el-table-column
							      prop="videoAppVersion"
							      label="移动平台"
							      >
							    </el-table-column>
							    <el-table-column
							      prop="dataState"
							      label="状态"
							     >
							    </el-table-column>
							    <el-table-column label="操作" width="250%">
							        <template scope="scope">
							            <el-button size="small" @click="deleteSelecteds(scope.$index)">删除</el-button>
							            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">变更排序</el-button>
							            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">撤销排序</el-button>
							        </template>
							    </el-table-column>
							</el-table>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24">
							<el-button size="small" @click="getselected">保存修改</el-button>
							<el-button size="small" @click="SETEdit">取消</el-button>
						</el-col>
					</el-row>
					<el-dialog
						title="作品选择" size="large"
						:before-close="handleClose"
						:visible.sync="dialogVisible">
						<div class="button">
							<el-button size="small" @click="worksMethod">精选池</el-button>
							<el-button size="small" @click="selectedMethod">作品列表</el-button>
						</div>
						<selection v-if="worksChoice && !selectionChoice" />
						<works v-if="!worksChoice && selectionChoice" />
					</el-dialog>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	import works from './selectedsAdd_works.vue'
	import selection from "./selectedAdd_selection.vue"
	import {mapMutations,mapActions, mapState} from "vuex"
	export default{
		name:"selectedList",
		components: {
		    works,
		    selection
		},
		created(){
			this.WORKSLIST()
		},
		data(){
			return{
				// value2:Date.now()- 8.64e7,
				value2:"",
				dialogVisible: false,
				pickerOptions0: {
		        	disabledDate(time) {
		            	return time.getTime() < Date.now() -8.64e7;
		        	}
        		},
        		worksChoice:true,
        		selectionChoice:false,
			}	
		},
		computed:{
	    	...mapState("addSelecteds",["SelectedsLIST"]),
	    },
		methods:{
			...mapActions("Selected",["WORKSLIST"]),
			...mapMutations("selecteds",["setEdit"]),
			...mapMutations("addSelecteds",["delete"]),
			...mapActions("addSelecteds",["ADDSELECTEDS"]),
			
			handleClose(){
				this.dialogVisible = false
				// this.$get(this.SelectedsLIST)
			},
			deleteSelecteds(index){
				this.delete(index)
			},
			worksMethod(){
				this.worksChoice = true
        		this.selectionChoice = false
			},
			selectedMethod(){
				this.worksChoice = false
        		this.selectionChoice = true
			},
			handleEdit(index,row){
				console.log(index,row)
			},
			SETEdit(){
				this.setEdit()
			},
			//提交
			getselected(){
				let date = new Date(this.value2);
    			let Month = ""
				//月份
				if (date.getMonth()+1 <10) {
					Month = `0${date.getMonth()+1}`
				}else {
					Month =  date.getMonth()+1
				}
    			let currentDate = parseInt(`${date.getFullYear()}${Month}${date.getDate()}`);
    			let worksIds =[]
    			if (this.value2 === "") {
    				this.$message({
			            showClose: true,
			            message: '时间不能为空',
			            type: 'warning'
			        });
    			}else {
    				// console.log(currentDate.toString())
					if (this.SelectedsLIST.length < 10 ) {
						this.$message({
				            showClose: true,
				            message: '数据必须等于10条',
				            type: 'warning'
				        });
					}else {
						this.SelectedsLIST.forEach( (item) => {
							if (item.id !== undefined && item.opusId === undefined) {
								worksIds.push(item.id)
							}
						});
						this.SelectedsLIST.forEach( (item) => {
							if (item.opusId !== undefined) {
								worksIds.push(item.opusId)
							}
						});
						this.ADDSELECTEDS({
							worksIds:worksIds,
							publishDate:currentDate.toString()
						})
					}
    			}
    			
			}
		}
	}
</script>
<style scoped>
	.el-col{
		margin-bottom: 20px;
	}
	.button{
		margin-bottom: 20px;
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