//采购明细状态
var orderDetailStatusDisplay = {
	0: "未确认", 
	1: "已确认",
	2: "已审核",
	3: "已关闭"
};

//dataTable配置
var tableConfig = {  		
	paging:false,//分页
	processing:true,//处理数据显示
	searching:false,//搜索框
    ordering:true,//排序
	autoWidth:true,//宽度自适应
	//scrollY:getScrollY(dataList),
	info:false,//是否显示页脚
	scrollX:true,
	order:[]
};

var tableAttr = [      
     ["id","table1"],   
     ["class","hover row-border nowrap"],   
     ["cellpadding","0"],                 
     ["cellspacing","0"],    
     ["border","0"],
     ["width","100%"],
     ["style","table-layout:fixed"]
];

//声明核心变量  datalist表示后台取回的采购单明细，splitObject表示拆分对象
var dataList,splitObj;
var purchaseOrderId = S3.istore.get('purchaseOrderId');


$(function(){
	
	
	getDataDetail(purchaseOrderId)
	renderTable(dataList,splitObj)
	   
	/**
	 * 根据采购订单Id 获取明细
	 */
	function getDataDetail(purchaseOrderId){
		
		var params = {"purchaseOrderId":purchaseOrderId};
		//调用后台接口
		var result = execjava('purchaseOrderBean.doGetPurchaseOrderDetail', params, 'json');		
		dataList = result.data;
		
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
	function initSlit(dataList){
		var splitObj = {};
		dataList.forEach(function(item){
			splitObj[item.id] = []
		})	
		return splitObj;
	}
	
	/**
	 * 渲染数据
	 */
	
	var rednerData = function(){
		
		// 获取配置
		
		
		//渲染datalist数据
		//调用dataTables
		

		
		//渲染数据
		if(splitArr.length > 0){
			//调用dataTables
		}
		
		
		//绑定事件
		bindEvent(table1,table2);
	}
	
	
	
	function renderTable(dataList,splitObj){
		//渲染表格
		var oTable = $("#splitTable").renderDatatables(colArray2,purchaseOrderSplitCount_col,dataList,tableConfig);
			
		//处理split数据
		var splitArr = []
		for(var key in splitObj){
			splitArr = splitArr.concat(splitObj[key]);

		}	
		console.log(splitArr)
		//渲染表格
		var oTable = $("#addSplitTable").renderDatatables(colArray2,purchaseOrderSplitCount_col,splitArr,tableConfig,tableAttr);
		
		/*解决ie下dataTable空数据显示null字符串问题*/
		ieNullRemove();
	}

	
})

function addSplit(index){
	console.log(dataList[index])
	
}
