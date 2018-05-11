// 声明公共变量字典
var orderDetailStatusDisplay = {
		0: "未确认", 
		1: "已确认",
		2: "已审核",
		3: "已关闭"
	};


$(function(){
	//声明核心变量  datalist表示后台取回的采购单明细，splitObject表示拆分对象
	var dataList,splitObj;
	
	
	//获取前台传递的数据
	var poorderId = s3.getParam("poorderId") 
	
	
	/**
	 * 根据采购订单Id 获取明细
	 */
	var getDataDetail = function(poorderId){
		
		//调用后台接口
		
		
		dataList = result.dataList
		
		
		//初始化数据集
		//记录老数据 
		//后续校验数据要用的
		dataList.forEach(function(item){
			item.oldCount = item.count
		})
		
		//初始化拆分对象
		splitObj = initSlit(dataList)
	}
	
	/**
	 * 初始化splitObj
	 * 根据dataList 初始化splitObj
	 */
	var initSlit = function(dataList){
		var slitobj = {};
		dataList.forEach(function(item){
			splitobj[item.id] = []
		})	
		return splitObj;
	}
	
	/**
	 * 渲染数据，
	 */
	var rednerData = function(){
		
		// 获取配置
		
		
		//渲染datalist数据
		//调用dataTables
		
		//处理split数据
		var splitArr = []
		for(var key in splitObj){
			splitArr = splitArr.concat(splitObj[key]);
		}
		
		//渲染数据
		if(splitArr.length > 0){
			//调用dataTables
		}
		
		
		//绑定事件
		bindEvent(table1,table2);
	}
	
	
	//绑定事件
	var bindEvent = function(table1,table2){
		
		//table1绑定增加拆分时间
		
		//如果被点击拆分，获取当前列的对象
		//假设获得了
		var obj = dataList[i];
		//调用拆分事件
		
	}
	
	/**
	 * 拆分物料
	 */
	var splitProduct = function(obj){
		
		//深拷贝
		var obj2 = 深拷贝(obj);
		
		//添加到拆分对象中
		var id = obj2.id;
		sliptObj[id].push(obj2)
		
		//更改dataList数量

		
		//重绘数据
		renderData();
	}
	
	
	/**
	 * 更改数量
	 */
	var changeCount = function(obj,count){
		//记录老的数量
		var oldCount = obj.count
		
		//更改数量
		obj.count = count;
		
		//合法性校验
		var validate = validateCount();
		
		//通过了校验
		if(validate){
			//通过了校验
			renderData()
		}else{
			//如果没通过，要用回老的数量
			obj.count = oldCount;
		}
		
	}
	
	
	/**
	 * 有效性校验
	 */
	var validateCount = function(){
		//声明2个统计指标
		var sum1={},sum2={}
		
		//统计datalist
		datalist.forEach(function(item1){
			sum1[item1.id] = item1.count;
		})
		
		//统计拆分对象
		for(var key in splitObj){
			var sum2[key] = 0;
			splitObj[key].forEach(function(item){
				sum2[key] = sum2[key].add(item.count)
			})
		}
	
	}
	
	
	/**
	 * 删除
	 */
	var deleteSplit = function(obj){
	
		//split中删除这个对象
		var list = splitObj[obj.id];
		
		
		//归还数据
		dataList.forEach(function(item){
			if(item.id === obj.id){
				item.count = Number(item.count).add(obj.count)
			}
		})
		
		//重绘
		renderData()
	}
	
	var sumbitSplit = function(){
		
		var submitobj = {};
		
		//遍历splitObj
		//把所有对象的count取出来
		//组织成新对象
		
		
		//调用后台
	}
	
	
	
})
