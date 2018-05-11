<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
	  <el-breadcrumb-item  v-for="item in list" :key="item">{{item}}</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
export default{
	name: 's3-breadcrumb',
	props: {
		list: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
</style>
