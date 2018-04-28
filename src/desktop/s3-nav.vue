<template>

	<div class="nav-bar">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handSelect" router>
			<el-menu-item v-for="(item,index) in navList"  :index="item.menuUrl" :key="item.menuId">
				<!-- <router-link :to="item.menuUrl">{{item.menuName}}</router-link> -->
				{{item.menuName}}
			</el-menu-item>
		</el-menu>
		<div class="line"></div>
	</div>
</template>

<script>
export default{
	name: 's3-nav',
	data () {
		return {
			activeIndex: '1'
		}
	},
	props: {
		nav: {
			type: Array,
			required: true
		}
	},
	computed:{
		navList () {
			let home = {
		      	parentId: 4,
		     		menuUrl: '/main/home',
		      	enable: 1,
		      	menuId: 0,
		      	type: 1,
		      	menuName: '首页'
		    }
      		this.nav.unshift(home)
      		return this.nav
		},
		path () {
			console.log(this.$route.path)
			return this.$route.path
		}
	},
	methods:{
		handSelect (key,path) {
			console.log(key+path)
		}
	},
	watch:{
		path () {
			let self = this
			this.navList.forEach(function(item){
				if(self.path.indexOf(item.menuUrl) > -1){
					self.activeIndex = self.path
				}
			})
		}
	} 
}
</script>

<style scoped>
.nav-bar{
	margin-bottom: 1rem;
}
</style>