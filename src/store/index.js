import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    page:{
      title:'',
      backState:'',
      goHome: false
    },
    theme: 'blue',

    APPID: 's3Core',
    USER_FIRST_LOGIN:false,
    USER_LOG_IN: false,
    currentUser: null, // 当前登录用户
    roles: null, // 当前用户的所有角色
    currentRole: null, //当前用户的当前角色
    currentDealer: null,  //当前经销商
    currentCompany: null //当前分公司
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
  modules: {
  }
})

export default store
