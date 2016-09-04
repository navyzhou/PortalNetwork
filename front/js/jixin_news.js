$(function(){
	var tyid=GetQueryString("tyid");
//	var topName="列表";
//	if(tyid==10001){
//		topName="动态新闻列表";
//	}else if(tyid==10002){
//		topName="计信新闻列表";
//	}else if(tyid==10003){
//		topName="通知新闻列表";
//	}
	$("#myTopName").html("新闻列表");
	var totalPage=1;
	$.post("../json/frontIndexAction_getByTyidInfo",{"tyid":tyid,"rows":10},function(data){
		totalPage=data.total;
		$('#mypages').bootpag({
			total: totalPage,
			page:1,
			maxVisible: 10
		});
		if(data.rows!==null){
			var trendInfo='';
			var remen="";
			var fils="";
			if(data.rows[0].contentInfo!=null){
				$.each(data.rows[0].contentInfo,function(index,item){
					if(item.limit=="校内不公开"){
						trendInfo+=bugongkai(item);
					}else{
						trendInfo+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,30);
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
				$("#myTrendInfo").html(trendInfo);
			}else{
				trendInfo="暂无此类信息";
				$("#myTrendInfo").html(trendInfo);
			}
			
			$.each(data.rows[0].remen,function(index,item){
				if(item.limit=="校内不公开"){
					remen+=bugongkai2(item);
				}else{
					remen+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+item.tr_title.substring(0,10);
					if(item.tr_pic!=null && item.tr_pic!=''){
						remen+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						remen+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					/*if(item.limit=="不公开"){
						remen+="<span>[校内]</span>";
					}*/
					remen+="</a></li>";
				}
			});
			$("#myremen").html(remen);
			
			$.each(data.rows[0].fils,function(index,item){
				fils+="<li class=\"list-group-item\"><a target=\"_blank\" href=../../dataInfo/file/"+item.file_name+" title="+item.file_savename+">"+addLast(item.file_savename,10) +"</a></li>";
			});
			$("#myfiles").html(fils);
			/*
			var trendsType="";
			$.each(data.rows[0].trendsType,function(index,item){
				trendsType+="<li id=\"ty"+item.ttype_id+"\"><a  href=\"jixin_news.html?tyid="+item.ttype_id+"\">"+item.ttype_name+"</a></li>";
				if(item.ttype_id==tyid){
					$("#myTopName").html(item.ttype_name+"类表");
				}
			});
			$("#trendsType").html(trendsType);
			$("#ty"+tyid).addClass("active");
			*/
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
	$('#mypages').bootpag().on('page', function(event, num){
		$.post("../json/frontIndexAction_getPageInfo",{"tyid":tyid,"page":num,"rows":10},function(data){
			if(data!==null){
				var trendInfo='';
				$.each(data.rows,function(index,item){
					if(item.limit=="校内不公开"){
						trendInfo+=bugongkai(item);
					}else{
						trendInfo+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\">"+item.tr_title;
						if(item.tr_pic!=null && item.tr_pic!=''){
							trendInfo+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
						}
						if(item.tr_file!=null && item.tr_file!=''){
							trendInfo+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
						}
						/*if(item.limit=="不公开"){
							trendInfo+="<span>[校内]</span>";
						}*/
						trendInfo+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
					}
				});
				$("#myTrendInfo").html(trendInfo);
			}
		});
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
});

//获取请求参数
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function bugongkai(item){
	var trendInfo="";
	trendInfo+="<li class=\"list-group-item\"><a target=\"_blank\" title=\"不可访问\">"+item.tr_title;
	if(item.tr_pic!=null && item.tr_pic!=''){
		trendInfo+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
	}
	if(item.tr_file!=null && item.tr_file!=''){
		trendInfo+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
	}
	trendInfo+="<span>[校内]</span>";
	trendInfo+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
	return trendInfo;
}

function bugongkai2(item){
	var remen="";
	remen+="<li class=\"list-group-item\"><a target=\"_blank\" title=\"不可访问\">"+item.tr_title.substring(0,10);
	if(item.tr_pic!=null && item.tr_pic!=''){
		remen+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
	}
	if(item.tr_file!=null && item.tr_file!=''){
		remen+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
	}
	remen+="<span>[校内]</span>";
	remen+="</a></li>";
	return remen;
}