$(function(){
	
	$.post("../json/frontInitAction_initawardNotice",{},function(data){

		if(data.rows[0].zizhu!=null){
			var zizhu="";
			var zizhu2="";
			$.each(data.rows[0].zizhu,function(index,item){
				if(index%2==0){
					if(item.temp2=="校内不公开"){
						zizhu+=bugongkai(item);
					}else{
						zizhu+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast( item.tr_title,15) ;
						if(item.tr_pic!=null && item.tr_pic!=''){
							zizhu+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
						}
						if(item.tr_file!=null && item.tr_file!=''){
							zizhu+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
						}
						if(item.tr_video!=null && item.tr_video!=''){
							zizhu+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
						}
						zizhu+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
					}
				}else{
					if(item.temp2=="校内不公开"){
						zizhu2+=bugongkai(item);
					}else{
						zizhu2+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast( item.tr_title,15);
						if(item.tr_pic!=null && item.tr_pic!=''){
							zizhu2+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
						}
						if(item.tr_file!=null && item.tr_file!=''){
							zizhu2+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
						}
						if(item.tr_video!=null && item.tr_video!=''){
							zizhu2+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
						}
						
						zizhu2+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
					}
				};
				
			});
			$("#myzizhu1").html(zizhu);
			$("#myzizhu2").html(zizhu2);
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});

});
//取出文章中标签
function delTag(s){
	var dd=s.replace(/<\/?.+?>/g,"");
	return dds=dd.replace(/&nbsp;/g,"");
}

function delHtmlTag(str){
	  str= str.replace(/<[^>]+>/g,"");//去掉所有的html标记
       return str.replace(/(^\s*)|(\s*$)/g, ""); 
}

function bugongkai(item){
	var zizhu="";
	zizhu+="<li class=\"list-group-item\"><a target=\"_blank\" title=\"不可访问\">"+addLast( item.tr_title,15) ;
	if(item.tr_pic!=null && item.tr_pic!=''){
		zizhu+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
	}
	if(item.tr_file!=null && item.tr_file!=''){
		zizhu+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
	}
	if(item.tr_video!=null && item.tr_video!=''){
		zizhu+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
	}
	zizhu+="<span class=\"myleft\">[校内]</span>";
	zizhu+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
	return zizhu;
}