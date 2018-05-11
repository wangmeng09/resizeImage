import router from '.././router'

export default {
  setAppId (state,appid){
    state.appid = appid
  },
  setCurrentUser (state, user) {
    s3.istore.set('currentUser',user)
    state.currentUser = user
  },
  setCurrentDealer (state, dealer) {
  	if (dealer !== undefined) {
  	  state.currentDealer = dealer
  	}
  },
  setCurrentCompany (state, company) {
  	if (company !== undefined) {
  	  state.currentCompany = company
  	}
  },
  setCurrentRole (state, role) {
  	if (role !== undefined) {
  	  state.currentRole = role
  	}
  },
  setRoles (state,roles){
    state.roles = roles
  },
  pageinfo (state,page){
    state.page = page
  },

  USER_LOG_IN (state) {
    s3.istore.set('USER_LOG_IN',true)
  	state.USER_LOG_IN = true
  },
  USER_LOG_OUT (state) {
    s3.istore.remove('currentUser')
    s3.istore.remove('USER_LOG_IN')
    s3.istore.remove('USER_FIRST_LOGIN')

  	state.USER_LOG_IN = false
    state.USER_FIRST_LOGIN = false
    state.currentUser = null
    state.roles = null
    state.currentRole = null
    state.currentDealer = null
    state.currentCompany = null

    router.push('/login')
  },
  USER_FIRST_LOGIN (state,firstLoginFlag) {
    let flag = !!firstLoginFlag
    s3.istore.set('USER_FIRST_LOGIN',flag)
    state.USER_FIRST_LOGIN = firstLoginFlag
  }
}
