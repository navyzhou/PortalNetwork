$(function(){
	$.post("../json/frontInitAction_initStudentstyle",{},function(data){
		if(data.rows[0].xuezi!=null){
			var xuezi="";
			$.each(data.rows[0].xuezi,function(index,item){
				xuezi+="<div class=\"col-xs-3\">" +
						"<div class=\"thumbnail mycenter\"> " ;
						if(item.tr_pic!=null){
							xuezi+="<img class=\"img-circle\" src=../"+splitImg(item.tr_pic)+">";
						}else{
							xuezi+="<img class=\"img-circle\" src=\"images/xues.jpg\">";
						}
						xuezi+=" <div class=\"caption starInfo\">" +
						" <h5>明星姓名："+item.tr_title+"</h5>" +
						" <p><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title=\"查 看\" class=\"btn btn-default\" role=\"button\">查 看</a></p>" +
						"</div>" +
						" </div>" +
						" </div>";
			});
			$("#myxuezi").html(xuezi);
		}
		if(data.rows[0].aixin!=null){
			var aixin="";
			$.each(data.rows[0].aixin,function(index,item){
				aixin+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,15);
				if(item.tr_pic!=null && item.tr_pic!=''){
					aixin+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					aixin+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}
				if(item.tr_video!=null && item.tr_video!=''){
					aixin+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
				}
				aixin+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			});
			$("#myaixin").html(aixin);
		}
		if(data.rows[0].xinsheng!=null){
			var xinsheng="";
			$.each(data.rows[0].xinsheng,function(index,item){
				xinsheng+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,15) ;
				if(item.tr_pic!=null && item.tr_pic!=''){
					xinsheng+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					xinsheng+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}
				if(item.tr_video!=null && item.tr_video!=''){
					xinsheng+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
				}
				xinsheng+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			});
			$("#myxinsheng").html(xinsheng);
		}
		if(data.rows[0].xuesheng!=null){
			var xuesheng="";
			$.each(data.rows[0].xuesheng,function(index,item){
				xuesheng+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,15);
				if(item.tr_pic!=null && item.tr_pic!=''){
					xuesheng+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					xuesheng+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}
				if(item.tr_video!=null && item.tr_video!=''){
					xuesheng+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
				}
				xuesheng+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			});
			$("#myxuesheng").html(xuesheng);
		}
		if(data.rows[0].keyan!=null){
			var keyan="";
			$.each(data.rows[0].keyan,function(index,item){
				keyan+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,15);
				if(item.tr_pic!=null && item.tr_pic!=''){
					keyan+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					keyan+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}
				if(item.tr_video!=null && item.tr_video!=''){
					keyan+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
				}
				keyan+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			});
			$("#mykeyan").html(keyan);
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
});