<template>
	<div>
		<p class="jisp">艺人列表</p>	
	    <div class="div">
			<el-row>
				<el-col :span="24">
						<el-button size="small" @click="hottestListMethod">最热艺人</el-button>
						<el-button size="small" @click="NewestListMethod">最新艺人</el-button>
					<el-row>
						<el-col :span="24">
							<HotteStList v-if="hottestList && !newestList" />
							<NewestList v-if="!hottestList && newestList" />
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	import HotteStList from "./ArtistListClip/HottestList.vue"
	import NewestList from "./ArtistListClip/NewestList.vue"
	export default{
		name:"ArtistList",
		components:{
			HotteStList,
			NewestList
		},
		data(){
			return{
				hottestList:true,
				newestList:false,	
			}
		},
		methods:{
			hottestListMethod(){
				this.hottestList = true
				this.newestList = false
			},
			NewestListMethod(){
				this.hottestList = false
				this.newestList = true
			}
		}
	}
</script>
<style scoped>
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