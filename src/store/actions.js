import router from '.././router'

export default {
    getUserState (context,appid) {
      if(s3.istore.get('USER_LOG_IN')){
        s3.ajax('/user/info',{},appid).then(result => {
        if(result.retCode == '500') {
          context.commit('USER_LOG_OUT')
        } else {
          let user = result.user
          context.commit('USER_LOG_IN')
          context.commit('setCurrentUser',user)
          if(user.UserEntityroles){
            context.commit('setRoles',user.UserEntityroles)
            let role = user.UserEntityroles[0]
            context.commit('setCurrentRole',role)
          }
           router.push('/')
        }
        }).catch(error => {
          context.commit('USER_LOG_OUT')
        })
      }else{
          router.push('/login')
      }
    },
    getBranchCompany (context,appid) {

    },
    getCurrentDealer (context,cutomerId){

    }
}
