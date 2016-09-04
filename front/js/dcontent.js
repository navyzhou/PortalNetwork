$(function(){
	var pid=GetQueryString("pid");//获取地址栏的动态编号
	//初始化页面
	$.post("../json/frontInitAction_initDContent",{"pid":pid},function(data){
		var dcontent="";
		
		if(data.rows[0].dormPublic!=null){
			dcontent+="<h4 class=\"text-center\">"+data.rows[0].dormPublic[0].public_week+"</h4>" ;
			if(data.rows[0].dormPublic[0].public_notice==null || data.rows[0].dormPublic[0].public_notice==""){
				dcontent+="";
			}else{
				dcontent+="<p>&nbsp;&nbsp;&nbsp;&nbsp;"+data.rows[0].dormPublic[0].public_notice+"</p>";
			}
		}
		dcontent+="<h4>文明寝室：</h4>";
		if(data.rows[0].good!=null && data.rows[0].good!=""){
			$.each(data.rows[0].good,function(index,item){
				dcontent+="<table class=\"table table-bordered\">" +
					"<tr><td>宿舍号："+ item.dorm_id+ "</td>"
					+ "<td>所在班级："+ item.dorm_class+ "</td>"
					+"<td>辅导员："+ item.teacher+ "</td></tr>"
					+"<tr><td  colspan=\"3\">成员："+ item.dorm_member+ "</td></tr>"
					+"</table>";
			});
		}else{
			dcontent+="<h4 class=\"text-center\">暂无数据</h4>";
		}
		dcontent+="<h4>通报寝室：</h4>";
		if(data.rows[0].Bad!=null  && data.rows[0].Bad!=""){
			$.each(data.rows[0].Bad,function(index,item){
				dcontent+="<table class=\"table table-bordered\">" +
					"<tr><td>宿舍号："+ item.dorm_id+ "</td>"
					+ "<td>所在班级："+ item.dorm_class+ "</td>"
					+"<td>辅导员："+ item.teacher+ "</td></tr>"
					+"<tr><td  colspan=\"3\">成员："+ item.dorm_member+ "</td></tr>"
					+"<tr><td  colspan=\"3\">原因:"+ item.reson+ "</td> </tr>" +
					"</table>";
			});
		}else{
			dcontent+="<h3 class=\"text-center\">暂无数据</h3>";
		}
		
		$("#mydcontent").html(dcontent);


		if(data.rows[0].tongbao!=null){
			var mytongbao="";
			$.each(data.rows[0].tongbao,function(index,item){
				mytongbao+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"dcontent.html?pid="+item.public_id+" \" title="+item.public_week+">"+item.public_week+"</a></li>";
			}); 
			$("#mytongbao").html(mytongbao);
		};
//		var zhengce="";
//		$.each(data.rows[0].zhengce,function(index,item){
//			zhengce+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title+
//			"</a></li>";
//		});
//		$("#myzhengce").html(zhengce);
	});
});

//获取请求参数
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}