$(function(){
	var tid=GetQueryString("tid");//获取地址栏的动态编号
	var tyid=GetQueryString("tyid");//获取地址栏的类型编号
	var prvtend="";
	var nexttend="";
	//初始化页面
	$.post("../json/frontContenAction_showContentInfo",{"tid":tid,"tyid":tyid},function(data){
		if(data.rows!=null){
			if( data.rows[0].trendInfos[0]!=null && data.rows[0].trendInfos[0]!=''){
//				if(data.rows[0].trendInfos[1]!=null &&  data.rows[0].trendInfos[1]!=''){
//					if(data.rows[0].trendInfos[1].limit=="校内不公开"){
//						alert("对不起只能校内访问");
//					}
//				}
				var breadcrumb="<li>当前位置：</li><li><a href=\"jixin_news.html?tyid="+data.rows[0].trendInfos[0].types_id+"\">"+data.rows[0].trendInfos[0].file_name+"</a></li><li class=\"active\">"+data.rows[0].trendInfos[0].tr_title+"</li>";
				$("#mybreadcrumb").html(breadcrumb);
				//显示要阅读的动态信息
				var content="<h4 class=\"text-center\">"+data.rows[0].trendInfos[0].tr_title+"</h4>" +
							" <h5 class=\"text-center\">新闻来源："+data.rows[0].trendInfos[0].tr_from+" &nbsp;| &nbsp;作者："+data.rows[0].trendInfos[0].tr_author+" &nbsp;| &nbsp;浏览次数："+data.rows[0].trendInfos[0].tr_click+" &nbsp;|&nbsp 加入时间："+data.rows[0].trendInfos[0].tr_time+"</h5>" +
							"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
							if(data.rows[0].trendInfos[0].tr_article!=null && data.rows[0].trendInfos[0].tr_article!=""){
								content+=data.rows[0].trendInfos[0].tr_article+"<br/></br> ";
							}
				if(data.rows[0].trendInfos[0].tr_pic!=null && data.rows[0].trendInfos[0].tr_pic!=''){
					content+="<div id=\"myimg\">";
					var images=data.rows[0].trendInfos[0].tr_pic.split(";");
					for(var i=0;i<images.length;i++){
						content+="<img src=../"+images[i]+" data-action=\"zoom\"/><br/><br/>";
					}
					content+="</div>";
				}else{
					content+="  ";
				}
				
				if(data.rows[0].trendInfos[0].tr_video!=0 && data.rows[0].trendInfos[0].tr_video!='0' && data.rows[0].trendInfos[0].tr_video!=null){
					var video="";
//					if(data.rows[0].trendInfos[0].temp2==null || data.rows[0].trendInfos[0].temp2==""){
//						contine
//					}else{
						if(data.rows[0].trendInfos[0].temp1!=null && data.rows[0].trendInfos[0].temp1!=""){
							var vtype=data.rows[0].trendInfos[0].temp1.substring(data.rows[0].trendInfos[0].temp1.lastIndexOf("."));
			//				判断视频的格式
							if(vtype==".swf" || vtype==".flv"){
							
								video=data.rows[0].trendInfos[0].temp1;
								var s5 = new SWFObject("js/FlvPlayer201002.swf","playlist","713","600","7");
									s5.addParam("allowfullscreen","true"); 
									s5.addVariable("autostart","false");
									s5.addVariable("image","img/flashM-qdh.jpg");
									s5.addVariable("file","../../dataInfo/video/"+video);
									s5.addVariable("width","713");
									s5.addVariable("height","600");
									s5.write("mymedia");
							}else{
								video=data.rows[0].trendInfos[0].temp1.substring(0,data.rows[0].trendInfos[0].temp1.lastIndexOf("."));
				//				video="fsds";
								content+="<video id=\"really-cool-viode\" class=\"video-js vjs-default-skin vjs-big-play-centered\" controls preload=\"none\" width=\"713\" height=\"600\" poster=\"images/mor.png\" data-setup=\"{}\">" +
								"<source src=../../dataInfo/video/"+video+".mp4 type=\"video/mp4\" ></source>" +
								"<source src=../../dataInfo/video/"+video+".webm type=\"video/webm\"></source>" +
								"<source src=../../dataInfo/video/"+video+".ogv type=\"video/ogv\"></source>";
								//" <p class=\"vjs-no-js\">" +
								//"<a href='http://video.js.com/html5-video-support/' target=\"_blank\"></a></p></video>";
	//						}
						}
					}
				}
				var file="";
				if(data.rows[0].drownFile!=null){
					$.each(data.rows[0].drownFile,function(index,item){
						 file+="</br><span class=\"glyphicon glyphicon-download-alt\"></span>&nbsp;&nbsp;下载:&nbsp;&nbsp;<a href='../../dataInfo/file/"+item.file_name+"'>"+item.file_savename+"</a>";
					});
				}
				$("#mycontent").prepend(content);
				$("#mycontent").append(file);
				
				//显示上一条动态信息
				if(data.rows[0].trendInfos[1]!=null){//判断是否存在上一条动态信息
					prvtend="上一条: <a href=\"content.html?tid="+data.rows[0].trendInfos[1].tr_id+"&tyid="+data.rows[0].trendInfos[1].types_id+"\" title="+data.rows[0].trendInfos[1].tr_title+">"+data.rows[0].trendInfos[1].tr_title+"</a>";
				}else{
					prvtend="上一条: 没有上一条";
				}
				$("#myprvtend").html(prvtend);
				
				//显示下一条动态信息
				if(data.rows[0].trendInfos[2]!=null){//判断是否存在下一条动态信息
					nexttend="下一条: <a href=\"content.html?tid="+data.rows[0].trendInfos[2].tr_id+"&tyid="+data.rows[0].trendInfos[2].types_id+"\" title="+data.rows[0].trendInfos[2].tr_title+">"+data.rows[0].trendInfos[2].tr_title+"</a>";
				}else{
					nexttend="下一条: 没有下一条";
				}
				$("#mynexttend").html(nexttend);
				
//				var fils="";
//				$.each(data.rows[0].files,function(index,item){
//					fils+="<li class=\"list-group-item\"><a href=../../dataInfo/file/"+item.file_name+">"+item.file_savename+"</a></li>";
//				});
//				$("#myfiles").html(fils);
				var remen="";
				$.each(data.rows[0].remen,function(index,item){
					if(item.limit=="校内不公开"){
						remen+=bugongkai(item);
					}else{
						remen+="<li class=\"list-group-item\"><a href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+" >"+addLast( item.tr_title,10);
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
			}else{
				alert("您访问的数据不存在");
//				Modal.confirm( {
//				    msg: "验证码不能为空",
//				    title:"错误提示"
//				});
				window.location.href='index.html';
			}
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
});

//获取请求参数
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function showCodeAgain(){
	var r=new Date();
	var img=document.getElementById("showcode");
	img.src="code.jsp?d="+r;
}

function bugongkai(item){
	var remen="";
	remen+="<li class=\"list-group-item\"><a title=\"不可访问\" >"+addLast( item.tr_title,10);
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