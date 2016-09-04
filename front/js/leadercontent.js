$(function(){
	var lid=GetQueryString("lid");//获取地址栏的动态编号
	//初始化页面
	$.post("../json/frontInitAction_initLeaderContent",{"leader.lea_id":lid},function(data){
		var leadercontent="";
		if(data.rows[0].leader!=null){
			leadercontent+="<div id=\"mycontent\"><img src=../"+data.rows[0].leader[0].les_photo+" \" data-action=\"zoom\"/>" +
						"<h4>职位:"+data.rows[0].leader[0].lea_post+"</h4><p>姓名:"+data.rows[0].leader[0].lea_name+"</p>" +
								"</div><p>"+data.rows[0].leader[0].lea_intro+"</p>";
		}
		$("#myleadercontent").html(leadercontent);
		
		var xuezi="";
		$.each(data.rows[0].xuezi,function(index,item){
			xuezi+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title+
			"</a></li>";
		});
		$("#myxuezi").html(xuezi);
		
		var mingxing="";
		$.each(data.rows[0].mingxing,function(index,item){
			mingxing+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title+
			"</a></li>";
		});
		$("#mymingxing").html(mingxing);
	});
	$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
});

//获取请求参数
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}