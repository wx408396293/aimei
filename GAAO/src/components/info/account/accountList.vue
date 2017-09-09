<template>
	<div>
		<accountLists v-if ="accountLists && !Modifyaccount" />
		<modifyaccount v-if ="!accountLists && Modifyaccount"  />
	</div>
</template>
<script>
	import accountLists from "./accountLists.vue"
	import modifyaccount from "./modifyaccount.vue"
	import {mapState} from "vuex"
	export default{
		name:"account",
		created(){

		},
		data(){
			return{}
		},
		components:{
			accountLists,
			modifyaccount
		},
		computed:{
	      ...mapState("account",["accountLists","Modifyaccount"]),
	    }
	}
</script>
<style>
</style>