$(function(){
	$.post("../json/frontInitAction_initDormitory",{},function(data){
		if(data.rows[0].tongbao!=null){
			var mytongbao="";
			$.each(data.rows[0].tongbao,function(index,item){
				mytongbao+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,30);
				if(item.tr_pic!=null && item.tr_pic!=''){
					mytongbao+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					mytongbao+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}if(item.tr_video!=null && item.tr_video!=''){
					mytongbao+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
				}
				mytongbao+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			}); 
			$("#mytongbao").html(mytongbao);
		}
		
		if(data.rows[0].xinxi!=null){
			var myxinxi="";
			$.each(data.rows[0].xinxi,function(index,item){
				myxinxi+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,30);
				if(item.tr_pic!=null && item.tr_pic!=''){
					myxinxi+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					myxinxi+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}if(item.tr_video!=null && item.tr_video!=''){
					myxinxi+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
				}
				myxinxi+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			}); 
			$("#myxinxi").html(myxinxi);
		}
		
		if(data.rows[0].jiangcheng!=null){
			var myjiangcheng="";
			$.each(data.rows[0].jiangcheng,function(index,item){
				myjiangcheng+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,30);
				if(item.tr_pic!=null && item.tr_pic!=''){
					myjiangcheng+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					myjiangcheng+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}if(item.tr_video!=null && item.tr_video!=''){
					myjiangcheng+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
				}
				myjiangcheng+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			}); 
			$("#myjiangcheng").html(myjiangcheng);
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
});