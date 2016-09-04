$(function(){
	$.post("../json/frontInitAction_initMass",{},function(data){
		if(data.rows[0].banjifencai!=null){
			var banjifencai="";
			$.each(data.rows[0].banjifencai,function(index,item){
				banjifencai+="<div class=\"col-xs-6\">" +
					"<div class=\"media\"> <a class=\"pull-left\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">" ;
					if(item.tr_pic==null){
						banjifencai+="<img class=\"img-thumbnail\" src=\"images/combat-training.jpg\"></a>" ;
					}else{
						banjifencai+="<img class=\"img-thumbnail\" src=../"+splitImg(item.tr_pic)+"></a>" ;
					}
					banjifencai+="<div class=\"media-body\">" +
					"<h5 class=\"media-heading\">"+item.tr_title+"</h5>" +
					"<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+addLast(item.tr_article,120)+"</p>" +
					"<a type=\"button\" class=\"btn btn-default\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" target='blank' title=\"详细查看\">详细查看</a>" +
					"</div>" +
					"</div>" +
					"</div>";
			});
			$("#mybanjifencai").html(banjifencai);
		};
		
		if(data.rows[0].shetuan!=null){
			var shetuan="";
			$.each(data.rows[0].shetuan,function(index,item){
				shetuan+="<div class=\"col-xs-6\">" +
					"<div class=\"media\"> <a class=\"pull-left\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">" ;
					if(item.tr_pic==null){
						shetuan+="<img class=\"img-thumbnail\" src=\"images/combat-training.jpg\"></a>" ;
					}else{
						shetuan+="<img class=\"img-thumbnail\" src=../"+splitImg(item.tr_pic)+"></a>" ;
					}
					shetuan+="<div class=\"media-body\">" +
					"<h5 class=\"media-heading\">"+item.tr_title+"</h5>" +
					"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+addLast(item.tr_article,120)+"</p>" +
					"<a type=\"button\" class=\"btn btn-default\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" target='blank' title=\"详细查看\">详细查看</a>" +
					"</div>" +
					"</div>" +
					"</div>";
			});
			$("#myshetuan").html(shetuan);
		};
		
		if(data.rows[0].xuetuan!=null){
			var xuetuan="";
			$.each(data.rows[0].xuetuan,function(index,item){
				xuetuan+="<div class=\"col-xs-6\">" +
					"<div class=\"media\"> <a class=\"pull-left\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">" ;
					if(item.tr_pic==null){
						xuetuan+="<img class=\"img-thumbnail\" src=\"images/combat-training.jpg\"></a>" ;
					}else{
						xuetuan+="<img class=\"img-thumbnail\" src=../"+splitImg(item.tr_pic)+"></a>" ;
					}
					xuetuan+="<div class=\"media-body\">" +
					"<h5 class=\"media-heading\">"+item.tr_title+"</h5>" +
					"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+addLast(item.tr_article,120)+"</p>" +
					"<a type=\"button\" class=\"btn btn-default\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" target='blank' title=\"详细查看\">详细查看</a>" +
					"</div>" +
					"</div>" +
					"</div>";
			});
			$("#myxuetuan").html(xuetuan);
		};
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
});

//取出文章中标签
function delTag(s){
	var dd=s.replace(/<\/?.+?>/g,"");
	return dds=dd.replace(/&nbsp;/g,"");
}