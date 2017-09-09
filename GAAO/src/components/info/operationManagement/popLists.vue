<!-- 流行榜单 -->
<template>
	<el-row>
		<el-col :span="24">
			<popList v-if="poplist && !poplistEdit" />
			<addPop v-if="!poplist && poplistEdit" />
		</el-col>
	</el-row>
</template>
<script>
	import {mapState} from "vuex"
	import popList from "./poplistFile/popList.vue"
	import addPop from "./poplistFile/addPop.vue"
	export default{
		name:"selectedList",
		components: {
		    popList,
		    addPop
		},
		computed:{
	      ...mapState("popList",["poplist","poplistEdit"])
	    },
	}
</script>
<style scoped>
</style>