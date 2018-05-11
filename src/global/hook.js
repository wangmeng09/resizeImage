const CallbackHook =  function() {
  
  // 缓存钩子
  var hooks = {}
  /**
   * 注册钩子
   */
  var register = function(key,func){
    if(typeof key == 'string' && typeof func == 'function'){
      if(hooks.hasOwnProperty(key)){
        console.log("该节点已经注册了钩子函数，原钩子函数将被覆盖!")
      }
      hooks[key] = func
    }
  }
  /**
   * 注销钩子，看是否需要
   */
  var unRegister = function(key){
    if(typeof key == 'string')
      delete hooks[key]
  }

  /**
   * 运行钩子
   */
  var run = function(key,params){
    try {
      if(typeof key == 'string' && typeof hooks[key] == 'function'){
        hooks[key](params)
      }
    } catch(e) {
      throw e
    }
  }
  
  return {
    register:register,
    unRegister:unRegister,
    run:run
  }

}()

s3.registerHook = CallbackHook.register
s3.unRegisterHook = CallbackHook.unRegisterHook
s3.activeHook = CallbackHook.run

CallbackHook.install = function (Vue) {
   Vue.prototype.$hook = CallbackHook.run
}

export default CallbackHook
