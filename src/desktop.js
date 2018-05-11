 
import { Filter,Directive,JSLoader,CSSLoader,CallbackHook } from './global';


import s3Firstlogin from './desktop/s3-firstlogin.vue'
import s3Login from './desktop/s3-login.vue'
import s3changPass from './desktop/s3-changePassword.vue'
import s3Header from './desktop/s3-header.vue'
import s3Footer from './desktop/s3-footer.vue'
import s3Userinfo from './desktop/s3-userinfo.vue'
import s3Role from './desktop/s3-role.vue'
import s3Table from './desktop/s3-table.vue'
import s3Breadcrumb from './desktop/s3-breadcrumb.vue'
import s3Nav from './desktop/s3-nav.vue'
import s3LeftMenu from './desktop/s3-leftMenu.vue'
import s3Page from './desktop/s3-page.vue'
import s3Search from './desktop/s3-search.vue'


const s3vue = function (Vue,options) {
  //component
  Vue.component(CSSLoader.name,CSSLoader);
  Vue.component(JSLoader.name,JSLoader);
  // Vue.component(AsyncComponent.name,AsyncComponent);
  Vue.component(s3Login.name,s3Login);
  Vue.component(s3Firstlogin.name,s3Firstlogin);
  Vue.component(s3Header.name,s3Header);
  Vue.component(s3Userinfo.name,s3Userinfo);
  Vue.component(s3Role.name,s3Role);
  Vue.component(s3Table.name,s3Table);
  Vue.component(s3Footer.name,s3Footer);
  Vue.component(s3Breadcrumb.name,s3Breadcrumb);
  Vue.component(s3Nav.name,s3Nav);
  Vue.component(s3LeftMenu.name,s3LeftMenu);
  Vue.component(s3Page.name,s3Page);
  Vue.component(s3Search.name,s3Search);
  Vue.component(s3changPass.name,s3changPass);


  //prototype
  // Vue.prototype.$http = s3.ajax
  Vue.prototype.$hook = CallbackHook.run;

  //install
  Vue.use(Filter);
  Vue.use(Directive)
}

if(typeof window !== 'undefined' && window.Vue){
  s3vue(window.Vue)
}

module.exports = s3vue
module.exports.default = s3vue

