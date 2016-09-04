$(function(){
	$.post("../json/frontAcademyAction_initAcademy",{},function(data){
		if(data.rows[0].trends!=null){
			$("#myxueyuan").html(data.rows[0].trends[2].tr_article);
			var jigou="";
			if(data.rows[0].trends[1].tr_pic!=null && data.rows[0].trends[1].tr_pic!=""){
				jigou+="<img src=../"+data.rows[0].trends[1].tr_pic+"><br/>";
			}
			if(data.rows[0].trends[1].tr_article!=null && data.rows[0].trends[1].tr_article!=""){
				jigou+=data.rows[0].trends[1].tr_article;
			}
			$("#myjigou").html(jigou);
			$("#myshizi").html(data.rows[0].trends[0].tr_article);
		};
		if(data.rows[0].leaders!=null){
			var mylingdao="";
			$.each(data.rows[0].leaders,function(index,item){
				mylingdao+="<div class=\"col-xs-4\"> <div class=\"thumbnail mycenter \"> <img src=../"+splitImg(item.les_photo)+" class=\"img-thumbnail mynavtop\">" +
						"<div class=\"caption\"> <h4>职位："+item.lea_post+"</h4><p>姓名："+item.lea_name+"</p>" +
								" <p class=\"mybtna\"> <a href=\"leadercontent.html?lid="+item.lea_id+"\" target=\"_blank\" class=\"btn btn-default\" role=\"button\">详细查看</a></p></div></div></div>";
			});
			$("#mylingdao").html(mylingdao);
		};
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
});