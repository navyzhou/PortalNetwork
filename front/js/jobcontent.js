$(function(){
	var jid=GetQueryString("jid");//获取地址栏的动态编号
	//初始化页面
	$.post("../json/frontInitAction_initJobContent",{"jid":jid},function(data){
		var jobcontent="";
		if(data.rows[0].job!=null){
			jobcontent+="<h3 class=\"text-center\">"+data.rows[0].job[0].job_com+"</h3><h4 class=\"text-center\">职位及人数:"+data.rows[0].job[0].job_post+"&nbsp;&nbsp;&nbsp;地点:"+data.rows[0].job[0].job_place+"</h4><p>"+data.rows[0].job[0].job_intro+"</p>";
		}
		$("#myjobcontent").html(jobcontent);
//		var banshi="";
//		$.each(data.rows[0].banshi,function(index,item){
//			banshi+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title+
//			"</a></li>";
//		});
//		$("#mybanshi").html(banshi);
//		
		var zhengce="";
		$.each(data.rows[0].zhengce,function(index,item){
			zhengce+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title+
			"</a></li>";
		});
		$("#myzhengce").html(zhengce);
	});
	$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
});

//获取请求参数
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}