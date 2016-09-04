$(function(){
	var title=GetQueryString("tit");
	var url="";
//	if(title!=null){
////		alert("dddd");
//		url="../json/frontJixinFindAction_getFindInfo";
//	}else{
		url="../json/frontJixinFindAction_searchFindInfo";
//	}
	var totalPage=1;
	$.post(url,{"rows":10,'title':title},function(data){
		totalPage=data.total;
		$('#mypages').bootpag({
			total: totalPage,
			page:1,
			maxVisible: 10
		});
		if(data.rows!==null){
			var findInfo='';
			var filesInfo='';
			var losts='';
			if(data.rows[0].find!=null && data.rows[0].find!=''){
				$.each(data.rows[0].find,function(index,item){
					if(item.limit=="校内不公开"){
						findInfo+=bugongkai(item);
					}else{
						findInfo+="<li class=\"list-group-item\" id=\"mylist\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+(item.tr_title)+">"+addLast( item.tr_title,30);
						if(item.tr_pic!=null && item.tr_pic!=''){
							findInfo+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
						}
						if(item.tr_file!=null && item.tr_file!=''){
							findInfo+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
						}if(item.tr_video!=null && item.tr_video!=''){
							findInfo+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
						}
						/*if(item.limit=="不公开"){
							findInfo+="<span>[校内]</span>";
						}*/
						findInfo+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
					}
				});
				
			}else{
				findInfo='<h4>无数据</h4>';
			}
			
			$("#myFindInfo").html(findInfo);
			
			//hightlight(title);

			$.each(data.rows[0].files,function(index,item){
				filesInfo+="<li class=\"list-group-item\"><a target=\"_blank\" href='../../dataInfo/file/"+item.file_name+"'>"+item.file_savename+"</a></li>";
			});
			$("#mylostInfo").html(filesInfo);
			
			
			$.each(data.rows[0].losts,function(index,item){
				losts+="<li class=\"list-group-item\">"+addLast( item.lost_detail,7)+"&nbsp;<time class=\"mytime\">"+item.lost_time+"</time></li>";
			});
			$("#mylosts").html(losts);
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
	$('#mypages').bootpag().on('page', function(event, num){
		$.post("../json/frontJixinFindAction_getPageInfo",{"page":num,"rows":10,'title':title},function(data){
			if(data.rows!==null){
				var trendInfo='';
				$.each(data.rows,function(index,item){
					if(item.limit=="校内不公开"){
						trendInfo+=bugongkai(item);
					}else{
						trendInfo+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+(item.tr_title)+">"+addLast(item.tr_title,30);
						if(item.tr_pic!=null && item.tr_pic!=''){
							trendInfo+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
						}
						if(item.tr_file!=null && item.tr_file!=''){
							trendInfo+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
						}if(item.tr_video!=null && item.tr_video!=''){
							trendInfo+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
						}
						/*if(item.limit=="不公开"){
							trendInfo+="<span>[校内]</span>";
						}*/
						trendInfo+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
					}
				});
			
				$("#myFindInfo").html(trendInfo);
				//hightlight(title);
			}
		});
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
	
//	$("#myFidInfo").each(function(){
//		=$(this).html();
//		alert(htmll);
//		var newHtml=htmll.replace(regExp,'<span class="highlight">'+title+'</span>');
//		$(this).html(newHtml);
//	});
});

//获取请求参数
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  (r[2]); return null;
}

function hightlight(intro,title){
	clearSelection();//清空一下上次高亮显示的内容
	var regExp=new RegExp(title,'g');	//创建正则表达式   g表示全局  
	var newHtml=htmlEscape(intro).replace(regExp,'<span class="mystyle">'+title+'</span>');
//	$("#myFindInfo").html(newHtml); //更新内容
	return newHtml;
	
}

function htmlEscape(sHtml) {
	 return sHtml.replace(/&lt;|&gt;|&amp;|&quot;/g,function(c){return {'&lt;':'<','&gt;':'>','&amp;':'&','&quot;':'\"'}[c];});
	}
	

function clearSelection(){
	$("#myFindInfo").find('.mystyle').each(function(){
		$(this).replaceWith($(this).html());
	});
}

function bugongkai(item){
	var trendInfo="";
	trendInfo+="<li class=\"list-group-item\"><a target=\"_blank\" title=\"不可访问\">"+addLast(item.tr_title,30);
	if(item.tr_pic!=null && item.tr_pic!=''){
		trendInfo+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
	}
	if(item.tr_file!=null && item.tr_file!=''){
		trendInfo+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
	}if(item.tr_video!=null && item.tr_video!=''){
		trendInfo+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
	}
	trendInfo+="<span>[校内]</span>";
	trendInfo+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
	return trendInfo;
}
