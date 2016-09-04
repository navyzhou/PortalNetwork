$(function(){
	$.post("../json/frontInitAction_initSubject",{},function(data){
		if(data.rows[0].zhuanye!=null){
			var myzhuanye="";
			$.each(data.rows[0].zhuanye,function(index,item){
				myzhuanye+="<div class=\"col-xs-6\"> <a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+" class=\"list-group-item mylist\">"+item.tr_title+"</a></div>";
			});
			$("#myzhuanye").html(myzhuanye);
		};
		
		if(data.rows[0].chengguo!=null){
			var chengguo="";
			$.each(data.rows[0].chengguo,function(index,item){
				chengguo+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title;
				if(item.tr_pic!=null && item.tr_pic!=''){
					chengguo+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					$("#chengguoimg").attr("src","../"+splitImg(item.tr_pic));
				}
				if(item.tr_file!=null && item.tr_file!=''){
					chengguo+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}
				if(item.tr_video!=null && item.tr_video!=''){
					chengguo+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
				}
				chengguo+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			});
			$("#mychengguo").html(chengguo);
		};
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
});