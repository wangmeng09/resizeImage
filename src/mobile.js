
import { Filter,Directive,AsyncComponent,JSLoader,CSSLoader,CallbackHook } from './global';


import s3Banner from './mobile/s3-banner.vue'
import s3Bottom from './mobile/s3-bottom.vue'
import s3Card from  './mobile/s3-card.vue'
import s3Date from './mobile/s3-banner.vue'
import s3Dealer from './mobile/s3-bottom.vue'
import s3Firstlogin from  './mobile/s3-firstlogin.vue'
import s3Formvalcode from './mobile/s3-formValCode.vue'
import s3Functionpanel from './mobile/s3-functionPanel.vue'
import s3Input from  './mobile/s3-input.vue'
import s3InputNumber from  './mobile/s3-inputNumber.vue'
import s3Login from './mobile/s3-login.vue'
import s3Upload from './mobile/s3-upload.vue'
import s3Header from  './mobile/s3-header.vue'


const s3vue = function (Vue,options) {
  //component
  Vue.component(CSSLoader.name,CSSLoader);
  Vue.component(JSLoader.name,JSLoader);
  Vue.component(AsyncComponent.name,AsyncComponent);
  Vue.component(s3Banner.name,s3Banner);
  Vue.component(s3Bottom.name,s3Bottom);
  Vue.component(s3Card.name,s3Card);
  Vue.component(s3Date.name,s3Date);
  Vue.component(s3Dealer.name,s3Dealer);
  Vue.component(s3Firstlogin.name,s3Firstlogin);
  Vue.component(s3Formvalcode.name,s3Formvalcode);
  Vue.component(s3Functionpanel.name,s3Functionpanel);
  Vue.component(s3Input.name,s3Input);
  Vue.component(s3InputNumber.name,s3InputNumber);
  Vue.component(s3Login.name,s3Login);
  Vue.component(s3Upload.name,s3Upload);
  Vue.component(s3Header.name,s3Header);


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

