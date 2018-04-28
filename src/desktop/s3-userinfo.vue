<template>
	<el-dropdown trigger="click" v-if="user" @command="clickHander">
		<span class="el-dropdown-link">
			<i class="iconfont icon-yonghuming"></i>{{user.RoleEntityname}}
			<i class="el-icon-arrow-down el-icon--right"></i>
		</span>
		<el-dropdown-menu slot="dropdown">
			<el-dropdown-item command="userinfo"><i style="left:-5px" class="iconfont icon-yonghuming"></i>用户信息</el-dropdown-item>
			<el-dropdown-item command="changePwd"><i style="left:-5px;top:2px;" class="iconfont icon-xiugaimima"></i>修改密码</el-dropdown-item>
			<el-dropdown-item command="logout"><i style="left:-5px;top:1px;" class="iconfont icon-tuichu"></i>退出</el-dropdown-item>
		</el-dropdown-menu>
	</el-dropdown>
</template>
<script>
export default {
	name: 's3-userinfo',
	data () {
		return {
		}
	},
	computed: {
		user () {
			return this.$store.state.currentRole
		}
	},
  	methods: {
  		clickHander (cmd) {
  			switch(cmd){
  				case 'logout':
  					this.$store.commit('USER_LOG_OUT')
  					break
  				case 'changePwd':
  					this.$router.push('/user/changePwd')
  					break
  				default:
  					this.$router.push('/user/info')
  			}
  		}
 	 }
}
</script>

<style>
	.el-dropdown{cursor: pointer;}
</style>
