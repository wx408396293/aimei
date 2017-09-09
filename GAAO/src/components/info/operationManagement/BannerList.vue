<template>
	<el-row>
		<el-col :span="24">
			<bannerLists v-if="bannerlist && !addBanner && !editBanner"/>
			<AddBanner v-if="!bannerlist && addBanner && !editBanner"/>
			<editBanner v-if="!bannerlist && !addBanner && editBanner"/>
		</el-col>
	</el-row>
</template>
<script>
	import bannerLists from "./BannerClip/bannerLists.vue"
	import AddBanner from "./BannerClip/AddBanner.vue"
	import editBanner from "./BannerClip/editBanner.vue"
	import {mapState} from "vuex"
	export default{
		name:"BannerList",
		components: {
		    bannerLists,
		    AddBanner,
		    editBanner
		},
		computed:{
	      ...mapState("bannerList",["bannerlist","addBanner","editBanner"])
	    },
	}
</script>
<style scoped>

</style>