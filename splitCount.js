//采购明细状态
var orderDetailStatusDisplay = {
		0: "未确认", 
		1: "已确认",
		2: "已审核",
		3: "已关闭"
	};

var dataList = S3.istore.get("param");
var purchaseOrderId = S3.istore.get("purchaseOrderId");
var savaData = S3.istore.get("param");
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

$(function(){
	//表格初始化
	dataTable(dataList);

})

function dataTable(dataList){
	//渲染表格
	var oTable = $("#splitTable").renderDatatables(colArray2,purchaseOrderSplitCount_col,dataList,tableConfig);
	
	/*解决ie下dataTable空数据显示null字符串问题*/
	ieNullRemove();
}

//var initCount;//初始数据
function addSplit(index){
	$("#submit").show();
	var initCount = $('#count'+index).text();
	//$('.btn'+index).attr('initCount',initCount);
	
	
	//获取数量
	var count = dataList[index].count;
	
	//判断是否点击拆分按钮，如果有，必须填写拆分数量，才可继续拆分
	if($('#splitList li').length == 0){
		var html="<li key="+dataList[index].id+" class='list_li'>"+
		 		"<p><span class='id"+index+"'>id：</span><span>"+dataList[index].id+"</span></p>"+
		 		"<p><span>物料编号：</span><span>"+dataList[index].productId+"</span></p>"+
		 		"<p><span>物料名称：</span><span>"+dataList[index].productName+"</span></p>"+
		 		"<p><span>拆分数量：</span><input index="+index+" class='splitCount' type='text'></p>"+
		 		"<p><a index="+index+" class='btn_small skin_btn_light mar_l5 deleteList'>删除</a></p>"+
		 	"</li>";
				   
		$("#splitList").append(html);
		$('.id'+index).attr('initCount',initCount);
		
	}else{
		var check;
		$('#splitList .splitCount').each(function(){
			var val = $(this).val()
			if(val =="" || val == 0){
				check = false;
			}
		})
		
		if(check == false){
			alert("拆分数量不能为空或0")
		}else{
			//判断是否可拆分
			if(count > 0){
				 var html="<li key="+dataList[index].id+" class='list_li'>"+
				 		"<p><span class='id"+index+"'>id：</span><span>"+dataList[index].id+"</span></p>"+
				 		"<p><span>物料编号：</span><span>"+dataList[index].productId+"</span></p>"+
				 		"<p><span>物料名称：</span><span>"+dataList[index].productName+"</span></p>"+
				 		"<p><span>拆分数量：</span><input index="+index+" class='splitCount' type='text'></p>"+
				 		"<p><a index="+index+" class='btn_small skin_btn_light mar_l5 deleteList'>删除</a></p>"+
				 	"</li>";
						   
				$("#splitList").append(html);
				$('.id'+index).attr('initCount',initCount);
				
			}else{
				alert("此单无可拆分数量！")
			}
		}
	}
}

//删除拆分项
$('#splitList').on('click','.deleteList',function(){
	var val = $(this).parent().siblings().find('.splitCount').val();
	var index = $(this).attr("index");
	var initCount = $('.id'+index).attr('initCount');
	
	if($('#splitList li').length == 1){
		$("#submit").hide();
	}
	
	if(val == "" || val == 0){
		$(this).parents('.list_li').remove();
		dataList[index].count = initCount;
	}else{
		var num = (dataList[index].count)*1;
		dataList[index].count = num.add((val)*1)
		$(this).parents('.list_li').remove();
	}
	
	var oTable = $("#splitTable").renderDatatables(colArray2,purchaseOrderSplitCount_col,dataList,tableConfig);
})

//修改表格数据
//var oldCount = 0;
var last;
$('#splitList').on('keyup','.splitCount',function(e){
	var index =  $(this).attr('index');
	var count =  $(this).val();
	var initCount = $('.id'+index).attr('initCount');
	var $self = $(this);
	last = e.timeStamp;
	
	setTimeout(function(){
		if(last-e.timeStamp == 0){
			if(/[^\d]/.test(count)){  
				var temp_count=count.replace(/[^\d]/g,0);
				$self.val((temp_count)*1)
				count = $self.val();
			}
			
			if($self.val() == ""){
				$('.id'+index).attr('initCount',initCount);
				dataList[index].count = initCount//(dataList[index].count)*1+(oldCount)*1;
			}else{
				
				if(initCount-(count)*1 < 0){
					count = 0;
					$self.val("");
					$('#count'+index).text(initCount);
					alert('超出可拆分数量，请重新填写！');
					return false;
				}else{
					var num=(initCount)*1;
					dataList[index].count =  num.sub(count*1);
				}
			}
			
			var oTable = $("#splitTable").renderDatatables(colArray2,purchaseOrderSplitCount_col,dataList,tableConfig);
			//$('.btn'+index).attr('initCount',initCount);
		}
	
	},500)		
})


$("#submit").click(function(){
	var check;
	$('#splitList .splitCount').each(function(){
		if($(this).val() == "" || $(this).val() == 0 ){
			alert("拆分数量不能为空或0！");
			check = false;
		}
	})
	
	if(check == false){
		return false;
	}
	
	var subData = {};

	$("#splitList li").each(function(){
		var key = $(this).attr('key');
		subData[key] = []	
	})
	
	for(var key in subData){
		$("#splitList li").each(function(){
			var val = $(this).find('.splitCount').val();
			if(key == $(this).attr('key')){
				subData[key].push(val)
			}
		})
	}
	
	for(var i = 0; i<savaData.length; i++){
		for(var key in subData){
			if(savaData[i].id == key){
				
				if(subData[key].length == 1 && subData[key][0] == savaData[i].count){
					alert("id为"+key+"的单据未拆分！");
					return false;
				}
				
				var sub = 0;
				for(var j = 0; j<subData[key].length; j++){
					sub = sub.add((subData[key][j])*1)
				}

				if(savaData[i].count !=sub){
					alert("id为"+key+"的单据未完全拆分！");
					return false;
				}
				
				
			}
		}
	}
	
	var params = {
			"id":purchaseOrderId,
			"subData":subData
	}
	console.log(params)
	var result = execjava('purchaseOrderBean.splitOrderProduct', params, 'json');
/*	if(result.status==200){
		alert('拆分成功')
	}*/
	
	window.history.back(-1);
})


