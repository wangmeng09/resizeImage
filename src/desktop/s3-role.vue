<template>
  <el-select style="width:100px;margin-right:20px;" size="mini" v-model="selectValue" v-on:change="changeRole">
    <el-option v-for="role in roles" :key="role.RoleEntityid" :label="role.RoleEntityname" :value="role.RoleEntityname"></el-option>
  </el-select>
</template>
<script>
export default {
  name:'s3-role',
	data () {
		return {

		}
	},
	mounted(){

	},
	computed: {
		roles () {
      return this.$store.state.roles
    },
    selectValue: {
	    get: function(){
				return this.currentRole ?  this.currentRole.RoleEntityname : ''
			},
			set: function(){
				return this.currentRole.RoleEntityname
			}
    },
		currentRole: {
			get: function(){
				return this.$store.state.currentRole
			},
			set: function(role){
				this.$store.commit("setCurrentRole",role)
			}
		}
	},
	methods: {
		changeRole (role) {
			this.roles.forEach(rrole =>{
				if(rrole.RoleEntityname == role){
					this.currentRole = rrole
				}
			})
			console.log('role changed to: ' + role )
		}
	}
}
</script>
