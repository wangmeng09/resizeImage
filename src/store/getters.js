export default {
	roleId (state){
		if (state.currentRole){
			return state.currentRole.RoleEntityid
		} else {
			return null
		}
	},
  	isLogedIn (state) {

	    state.USER_LOG_IN = s3.istore.get('USER_LOG_IN')
	    state.USER_FIRST_LOGIN = !!s3.istore.get('USER_FIRST_LOGIN')
	    state.currentUser = s3.istore.get('currentUser')

	    return state.USER_LOG_IN && state.currentUser
  	}
}
