$(function(){
	var totalPage=1;
	$.post("../json/frontJixinVideosAction_getFilesInfo",{"rows":8},function(data){
		totalPage=data.total;
		$('#mypages').bootpag({
			total: totalPage,
			page:1,
			maxVisible: 10
		});
		if(data.rows[0].videos!=null && data.rows[0].videos!=""){
			var videos='';
			var video='';
			var playvideo='';
			var vtype=data.rows[0].videos[0].video_name.substring(data.rows[0].videos[0].video_name.lastIndexOf("."));
			if(vtype==".swf" || vtype==".flv"){
				video=data.rows[0].videos[0].video_name;
				var s5 = new SWFObject("js/FlvPlayer201002.swf","playlist","610","500","7");
				s5.addParam("allowfullscreen","true"); 
				s5.addVariable("autostart","false");
				s5.addVariable("image","img/flashM-qdh.jpg");
				s5.addVariable("file","../../dataInfo/video/"+video);
				s5.addVariable("width","610");
				s5.addVariable("height","500");
				s5.write("myplayvideo"); 
			}else{
				video=data.rows[0].videos[0].video_name.substring(0,data.rows[0].videos[0].video_name.lastIndexOf("."));
				playvideo+="<video id=\"really-cool-viode\" class=\"video-js vjs-default-skin vjs-big-play-centered\" controls preload=\"none\" width=\"610\" height=\"500\" poster=\"images/mor.png\" data-setup=\"{}\">"+
				"<source src=../../dataInfo/video/"+video+".mp4 type=\"video/mp4\" ></source>" +
				"<source src=../../dataInfo/video/"+video+".webm type=\"video/webm\"></source>" +
				"<source src=../../dataInfo/video/"+video+".ogv type=\"video/ogv\"></source>" ;
				//" <p class=\"vjs-no-js\">" +
				//"<a href='http://video.js.com/html5-video-support/' target=\"_blank\"></a></p></video>";
				$("#myplayvideo").html(playvideo);
			}
			$.each(data.rows[0].videos,function(index,item){
				videos+="<li class=\"list-group-item\"><a type=\"button\" href=\"javascript:showVideo('"+item.video_name+"')\" class=\"btn btn-primary \" title="+item.video_savename+">"+item.video_savename.substring(0,30)+"</a></li>";
		});
			$("#myvideos").html(videos);

		}else{
			
			$("#myplayvideo").html("<h3>无视频</h3>");
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
	$('#mypages').bootpag().on('page', function(event, num){
		$.post("../json/frontJixinVideosAction_getVideosspage",{"page":num,"rows":8},function(data){
			if(data.rows[0].videos!=null){
				var videos='';
				var video='';
				var playvideo='';
				var vtype=data.rows[0].videos[0].video_name.substring(data.rows[0].videos[0].video_name.lastIndexOf("."));
				if(vtype==".swf" || vtype==".flv"){
					video=data.rows[0].videos[0].video_name;
					var s5 = new SWFObject("js/FlvPlayer201002.swf","playlist","610","500","7");
					s5.addParam("allowfullscreen","true"); 
					s5.addVariable("autostart","false");
					s5.addVariable("image","img/flashM-qdh.jpg");
					s5.addVariable("file","../../dataInfo/video/"+video);
					s5.addVariable("width","610");
					s5.addVariable("height","500");
					s5.write("myplayvideo"); 
				}else{
					video=data.rows[0].videos[0].video_name.substring(0,data.rows[0].videos[0].video_name.lastIndexOf("."));
					playvideo+="<video id=\"really-cool-viode\" class=\"video-js vjs-default-skin vjs-big-play-centered\" controls preload=\"none\" width=\"610\" height=\"500\" poster=\"images/mor.png\" data-setup=\"{}\">"+
					"<source src=../../dataInfo/video/"+video+".mp4 type=\"video/mp4\" ></source>" +
					"<source src=../../dataInfo/video/"+video+".webm type=\"video/webm\"></source>" +
					"<source src=../../dataInfo/video/"+video+".ogv type=\"video/ogv\"></source>" +
					" <p class=\"vjs-no-js\">" +
					"<a href='http://video.js.com/html5-video-support/' target=\"_blank\"></a></p></video>";
					$("#myplayvideo").html(playvideo);
				}
				$.each(data.rows[0].videos,function(index,item){
					videos+="<li class=\"list-group-item\"><a type=\"button\" href=\"javascript:showVideo('"+item.video_name+"')\" class=\"btn btn-primary \" title="+item.video_savename+">"+item.video_savename.substring(0,30)+"</a></li>";
			});
				$("#myvideos").html(videos);
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

function showVideo(video_name){
	var playvideo="";
	var video;
	var vtype=video_name.substring(video_name.lastIndexOf("."));
	if(vtype==".swf" || vtype==".flv"){
		video=video_name;
		var s5 = new SWFObject("js/FlvPlayer201002.swf","playlist","610","500","7");
		s5.addParam("allowfullscreen","true"); 
		s5.addVariable("autostart","false");
		s5.addVariable("image","");
		s5.addVariable("file","../../dataInfo/video/"+video);
		s5.addVariable("width","610");
		s5.addVariable("height","500");
		s5.write("myplayvideo"); 
		
	}else{
		video=video_name.substring(0,video_name.lastIndexOf("."));
//		video="fsds";
		playvideo+="<video id=\"really-cool-viode2\" class=\"video-js vjs-default-skin vjs-big-play-centered\" controls preload=\"auto\" width=\"610\" height=\"500\" poster=\"images/mor.png\" data-setup=\"{}\">"+
		"<source src=../../dataInfo/video/"+video+".mp4 type=\"video/mp4\" ></source>" +
		"<source src=../../dataInfo/video/"+video+".webm type=\"video/webm\"></source>" +
		"<source src=../../dataInfo/video/"+video+".ogv type=\"video/ogv\"></source>" +
		" <p class=\"vjs-no-js\">" +
		"<a href='http://video.js.com/html5-video-support/' target=\"_blank\"></a></p></video>";
		$("#myplayvideo").html(playvideo);
	}
	
}

