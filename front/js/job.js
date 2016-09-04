$(function(){
	
	$.post("../json/frontInitAction_initJob",{},function(data){
//		if(data.rows[0].jobs!=null){
//			var jobs="";
//			$.each(data.rows[0].jobs,function(index,item){
//				alert(($.trim(delHtmlTag(item.job_intro))).substring(0,100));
//				jobs+="<div class=\"col-xs-6\" >" +
//						" <div class=\"media\">" +
//						"<div class=\"media-body\">" +
//						"<h5 class=\"media-heading\">"+item.job_com+"</h5>" +
//						" <table class=\"table\">" +
//						"<tr>" +
//						" <td>职位"+item.job_post+"</td>" +
//						"<td>工作地点"+item.job_place+"</td>" +
//						"</tr>" +
//						"<tr>" +
//						"<td colspan=\"2\">"+($.trim(item.job_intro)).substring(0,100)+" </td>" +
//						"</tr>" +
//						"</table>" +
//						"<a type=\"button\"target=\"_blank\" href=\"jobcontent.html?jid="+item.job_id+"\" title="+item.job_com+" class=\"btn btn-default\">详情</a>" +
//						"</div>" +
//						"</div>" +
//						"</div>";
//			});
//			$("#myjob").html(jobs);
//		}
		
		
		if(data.rows[0].jobs!=null){
			var jobs="";
			$.each(data.rows[0].jobs,function(index,item){
				jobs+="<div class=\"col-xs-6\" >" +
						"<div class=\"media\">" +
						" <div class=\"media-body starInfo \">" +
						"<h5 class=\"media-heading\">"+item.job_com+"</h5>" +
						"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+addLast(item.job_intro,190) +"</p>" +
						"<a target=\"_blank\" type=\"button\" class=\"btn btn-default \" href=\"jobcontent.html?jid="+item.job_id+"\" title=\"详细查看\">详细查看</a>" +
						" </div>" +
						"</div>" +
						" </div>";
			});
			$("#myjob").html(jobs);
		}
		
		if(data.rows[0].shengya!=null){
			var shengya="";
			$.each(data.rows[0].shengya,function(index,item){
				shengya+="<div class=\"col-xs-6\" >" +
						"<div class=\"media\">" +
						" <div class=\"media-body starInfo\">" +
						"<h5 class=\"media-heading\">"+item.tr_title+"</h5>" +
						"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+addLast(item.tr_article,190)+"</p>" +
						"<a target=\"_blank\" type=\"button\" class=\"btn btn-default \" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title=\"详细查看\">详细查看</a>" +
						" </div>" +
						"</div>" +
						" </div>";
			});
			$("#myshengya").html(shengya);
		}
		
		if(data.rows[0].jiuye!=null){
			var jiuye="";
			$.each(data.rows[0].jiuye,function(index,item){
				jiuye+="<div class=\"col-xs-6\" >" +
						"<div class=\"media\">" +
						" <div class=\"media-body starInfo\">" +
						"<h5 class=\"media-heading\">"+item.tr_title+"</h5>" +
						"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+addLast(item.tr_article,190)+"</p>" +
						"<a target=\"_blank\" type=\"button\" class=\"btn btn-default\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title=\"详细查看\">详细查看</a>" +
						" </div>" +
						"</div>" +
						" </div>";
			});
			$("#myjiuye").html(jiuye);
		};
		
		if(data.rows[0].banshi!=null){
			var banshi="";
			var banshi2="";
			$.each(data.rows[0].banshi,function(index,item){
				if(index%2==0){
					banshi+="<li class=\"list-group-item \"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title.substring(0,15)+"</a></li>";
				}else{
					banshi2+="<li class=\"list-group-item \"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title.substring(0,15)+"</a></li>";
				}
				
			});
			$("#mybanshi").html(banshi);
			$("#mybanshi2").html(banshi2);
		};
		
		if(data.rows[0].zhengce!=null){
			var zhengce="";
			var zhengce2="";
			$.each(data.rows[0].zhengce,function(index,item){
				if(index%2==0){
					zhengce+="<li class=\"list-group-item \"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title.substring(0,15)+"</a></li>";
				}else{
					zhengce2+="<li class=\"list-group-item \"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title.substring(0,15)+"</a></li>";
				}
				
			});
			$("#myzhengce").html(zhengce);
			$("#myzhengce2").html(zhengce2);
		}
		

		if(data.rows[0].mingxing!=null){
			var mingxing="";
			$.each(data.rows[0].mingxing,function(index,item){
				mingxing+="<div class=\"col-xs-3\">" +
						"<div class=\"thumbnail\"> " ;
						if(item.tr_pic!=null){
							mingxing+="<img class=\"img-circle\" src=../"+splitImg(item.tr_pic)+">";
						}else{
							mingxing+="<img class=\"img-circle\" src=\"images/jiuye.png\">";
						}
						mingxing+=" <div class=\"caption starInfo\">" +
						" <h5>明星姓名："+item.tr_title+"</h5>" +
						" <p><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title=\"查 看\" class=\"btn btn-default\" role=\"button\">查 看</a></p>" +
						"</div>" +
						" </div>" +
						" </div>";
			});
			$("#mymingxing").html(mingxing);
		};
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