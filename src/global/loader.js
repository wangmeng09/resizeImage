import axios from 'axios'

const Loader = function(){};

const getAsync = function(resolve,url){
	if (!window.SyncComponentCache) {
	            window.SyncComponentCache = {};
	        }
	        if (!window.SyncComponentCache[url]) {
	           	axios.get(url).then(function(res){
	           		let asyncCom = new Function(`return ${res.data}`)();
	           		window.SyncComponentCache[url] = asyncCom;
	        		resolve(asyncCom);
	        	})
	        } else {
	           resolve(window.SyncComponentCache[url]);
	      }
}

Loader.install = function(Vue,options){
	Vue.prototype.$load = getAsync;
}

export default Loader